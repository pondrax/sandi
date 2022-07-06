<?php

namespace App\Jobs;

use setasign\Fpdi\Fpdi;
use chillerlan\QRCode\{QRCode, QROptions};

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class MarkDokumen implements ShouldQueue
{
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  protected $dokumen;
  protected $request;

  protected $paperSize = [
    'F4' => [330,210],
    'A4' => [295,210],
  ];

  /**
   * Create a new job instance.
   *
   * @return void
   */
  public function __construct($dokumen, $request)
  {
    $this->dokumen = $dokumen;
    $this->request   = $request;
  }

  /**
   * Execute the job.
   *
   * @return void
   */
  public function handle()
  {
    $dokumen    = $this->dokumen;
    $request    = $this->request;
    $source     = $dokumen->file;
    
    $this->pdf = new Fpdi();
    
    $pagecount = $this->pdf->setSourceFile(storage_path('app/'.$source));
    
    for($i=1; $i <= $pagecount; $i++) {   
      $tpl = $this->pdf->importPage($i);
      $format = $this->pdf->getTemplateSize($tpl);
      $this->pdf->addPage($format['orientation'], $format);   
      $this->pdf->useImportedPage($tpl);
      
      if(!$dokumen->mark){
        $this->markQR($dokumen, $format);
        $this->markFooter($format);
      }
      if($dokumen->spesimen){
        $dokumen->spesimen->whereIn('page',['all',$i])->each(function($spesimen) use($format){
          $this->markSpesimen($spesimen, $format);
          // unset($spesimen['img']);
          // Log::debug($spesimen);
        });
        $dokumen->update([
          // 'penandatangan'=>null,
          'spesimen'=> null
        ]);
      }
    }
    // Prevent resave document ( signature removal )
    if($dokumen->sign == 0){
      $source = str_replace(["_mark",".pdf"], ["","_mark.pdf"], $source);
      $this->pdf->Output('F', storage_path('app/'.$source));
      $this->dokumen->update([
        'file'  => $source,
        'mark'  => 1,
        'size'  => Storage::size($source)
      ]);
    }
  }
  public function markSpesimen($spesimen, $format)
  {
    $PTtoMM = 2.83465;
    $x = $spesimen['x'] / $PTtoMM;
    $y = $spesimen['y'] / $PTtoMM;
    $w = $spesimen['w'] / $PTtoMM;
    $h = $spesimen['h'] / $PTtoMM;
    $this->pdf->Image($spesimen['img'], $x, $y, $w, $h, 'png');
  }
  public function markQR($dokumen, $format)
  {
    $options = new QROptions([
      'version'      => 5,
      'quietzoneSize'	=> 2,
    ]);
    
    $qr = (new QRCode($options))->render(str_replace('service/','',url('d?' . $dokumen->id)));

    $this->pdf->Image($qr, 8, $format['height']-20, 15, 15, 'png');
  }

  public function markFooter($format)
  {
    $this->pdf->Image(storage_path('app/public/sign/note.png'), 30, $format['height']-20, 0, 14, 'png');
    $this->pdf->Image(storage_path('app/public/sign/bsre.png'), $format['width']-35, $format['height']-16, 0, 11, 'png');
  }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class BaseSeeder extends Seeder
{
  protected $model;
  protected $filePath;
  protected $delimiter = ',';

	public function run()
	{
    $model = new $this->model;
    $model->truncate();
    $data = [];
    if (($handle = fopen(base_path($this->filePath), "r")) !== false) { 
      if (($row = fgetcsv($handle, 1000, $this->delimiter)) !== false) {
        $keys = $row; 
      }
      while (($row = fgetcsv($handle, 1000, $this->delimiter)) !== false) {
        $data = array_combine($keys, $row);  
        $model->create($data);
      }
      fclose($handle); 
    }
	}
}

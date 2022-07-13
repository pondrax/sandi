<script>
import dayjs from 'dayjs';
import {Button, ApexChart} from '$ui';
import { onMount } from 'svelte';

let id;
let urlParams;
onMount(()=>{
  setTimeout(()=>{
    urlParams = new URLSearchParams(location.search)
    id = urlParams.get('id')
    // console.log(id)
    if(!id){
        location.href = '/app/indeks-kami'
      }  
  },1000)
})

let detail = {
  id:id,
  versi: '4.2',
  tanggal: new Date(),
  instansi: 'Dinas Komunikasi dan Informatika',
  ruang_lingkup: 'Pusat Data',
  asesi: {
    nama:'Aditiya Anwar',
    jabatan: 'Pranata Komputer - Ahli Pertama'
  },
  asesor: {
    nama: 'Pondra Setiawan',
    jabatan: 'Sandiman - Ahli Pertama'
  },
  kategori_sistem: 'Strategis',
  skor: 37,
  hasil_evaluasi: 'Baik',
  hasil: [
    {skor:Math.floor(Math.random()*150), tingkat:'I'},
    {skor:Math.floor(Math.random()*150), tingkat:'II'},
    {skor:Math.floor(Math.random()*150), tingkat:'III'},
    {skor:Math.floor(Math.random()*150), tingkat:'IV'},
    {skor:Math.floor(Math.random()*150), tingkat:'V'},
    {skor:Math.floor(Math.random()*100)},
    {skor:Math.floor(Math.random()*100)},
    {skor:Math.floor(Math.random()*100)},
  ],
  status:'VERIFIED'
};

const chartOptions = ()=>{
  return {
    chart: {
      height: 400,
      type: 'radar',
    },
    colors:[
      'hsla(var(--pf) / var(--tw-text-opacity,0.5))',
      'hsla(var(--sf) / var(--tw-text-opacity,0.5))',
      'hsla(var(--af) / var(--tw-text-opacity,0.5))',
      'hsla(var(--er) / var(--tw-text-opacity,0.5))',
      'hsla(var(--su) / var(--tw-text-opacity,0.5))',
      'hsla(var(--in) / var(--tw-text-opacity,0.5))',
      'hsla(var(--wa) / var(--tw-text-opacity,0.5))',
    ],
    series: [{
      name: 'Kepatuhan ISO/SNI 27001',
      data: [80, 50, 30, 40, 140],
    },{
      name: 'Penerapan Operasional',
      data: [80, 50, 30, 0, 100],
    },{
      name: 'Kerangka Kerja Dasar',
      data: [80, 50, 20, 40, 100],
    },{
      name: 'Responden',
      data: [80, 50, 10, 40, 100],
    }],
    title: {
      // text: 'Indeks Kami '+ detail.ruang_lingkup
    },
    xaxis: {
      categories: [
        ['Tata Kelola'], 
        ['Pengelolaan','Risiko'], 
        ['Kerangka Kerja','Keamanan Informasi'], 
        ['Pengelolaan Aset'], 
        ['Teknologi dan','Keamanan Informasi']
      ]
    }
  }
}
</script>
<style>
:global(.apexcharts-legend) {
  flex-direction: column;
}
</style>




<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li><a href="/app/indeks-kami">Indeks Kami</a></li> 
        <li>Dashboard</li>
      </ul>
    </div>
    <img src="/tools/indeks-kami.png" alt="indeks kami" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Dashboard Asesmen Indeks Keamanan Informasi (Versi {detail.versi})</h1>
    <div class="flex flex-wrap md:flex-nowrap justify-between w-full py-2">
      <div>
        <table class="table table-compact">
          <tr>
            <td>Instansi</td>
            <th>{detail.instansi}</th>
          </tr>
          <!-- <tr>
            <td>Alamat</td>
            <th>{detail.alamat}</th>
          </tr>
          <tr>
            <td>Nomor Telepon</td>
            <th>{detail.telepon}</th>
          </tr>
          <tr>
            <td>Email</td>
            <th>{detail.email}</th>
          </tr> -->
          <tr>
            <td>Deskripsi Ruang Lingkup</td>
            <th>{ detail.ruang_lingkup }</th>
          </tr>
          <tr>
            <td>Tanggal Pengisian</td>
            <th>{ dayjs(detail.tanggal).format('YYYY-MM-DD')}</th>
          </tr>
          <tr>
            <td>Pengisi Lembar Evaluasi</td>
            <th>{ detail.asesi.nama } / { detail.asesi.jabatan }</th>
          </tr>
          <tr>
            <td>Penilai Lembar Evaluasi</td>
            <th>{ detail.asesor.nama } / { detail.asesor.jabatan }</th>
          </tr>
        </table>
      </div>
      <div class="py-3 text-center">
        <div class="radial-progress text-secondary text-center" style="--value:80;--size:6rem;">
          <b>37</b>
          Strategis
        </div>
        <div class="radial-progress text-primary text-center" style="--value:90;--size:6rem;">
          <b>642</b>
          Baik
        </div>
        <br>
        <p class="py-2 text-xs">
          Tingkat Kelengkapan Penerapan<br> Standar ISO27001 sesuai Kategori SE	
	      </p>
        <div class="rounded-xl bg-accent">
          VERIFIED
        </div>
      </div>
    </div>

    <div class="flex flex-wrap md:flex-nowrap gap-5">
      <div class="grow md:flex-none w-[25em]">
        <ul class="menu menu-vertical xxl:menu-horizontal bg-base-100 rounded-box">
          <li class="bg-base-300">
            <a href={"/app/indeks-kami/detail?kategori=1&id="+id}>
              <span>Kategori SE</span>
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">{detail.kategori_sistem}</span>
                <span class="badge">{detail.skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=2&id="+id}>
              <span>Tata Kelola </span>
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">Tk.{detail.hasil[0].tingkat}</span>
                <span class="badge">{detail.hasil[0].skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=3&id="+id}>
              <span>Pengelolaan Risiko </span>
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">Tk.{detail.hasil[1].tingkat}</span>
                <span class="badge">{detail.hasil[1].skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=4&id="+id}>
              <span>Kerangka Kerja Keamanan Informasi</span>
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">Tk.{detail.hasil[2].tingkat}</span>
                <span class="badge">{detail.hasil[2].skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=5&id="+id}>
              <span>Pengelolaan Aset </span>              
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">Tk.{detail.hasil[3].tingkat}</span>
                <span class="badge">{detail.hasil[3].skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=6&id="+id}>
              <span>Teknologi dan Keamanan Informasi</span>
              <div class="flex gap-1 ml-auto -my-2">
                <span class="badge badge-secondary">Tk.{detail.hasil[4].tingkat}</span>
                <span class="badge">{detail.hasil[4].skor}</span>
              </div>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=7.1&id="+id}>
              <span>Pengamanan Keterlibatan Pihak Ketiga</span>
              <span class="badge ml-auto">{detail.hasil[5].skor}%</span>
            </a>
          </li>
          <li>
            <a href={"/app/indeks-kami/detail?kategori=7.2&id="+id}>
              <span>Pengamanan Layanan Infrastruktur Awan</span>
              <span class="badge ml-auto">{detail.hasil[6].skor}%</span>
            </a>
          </li>
        <li>
          <a href={"/app/indeks-kami/detail?kategori=7.3&id="+id}>
            <span>Perlindungan Data Pribadi</span>
            <span class="badge ml-auto">{detail.hasil[7].skor}%</span>
          </a>
        </li>
      </ul>
    </div>
      <div class="grow bg-base-100 rounded-xl mt-2 mx-2">
        <ApexChart options={chartOptions()}></ApexChart>
      </div>
    </div>
    
  </section>
</div>
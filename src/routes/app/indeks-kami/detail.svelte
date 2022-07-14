<script>
import { onMount } from 'svelte';

import dayjs from 'dayjs';
import { Button,Checkbox,Input,Select,Dropdown, Portal, MockupCode } from '$ui';
import { AirplayIcon, FeatherIcon, MessageSquareIcon, MoreVerticalIcon, PlusIcon, RefreshCwIcon, Share2Icon, Trash2Icon } from 'svelte-feather-icons';

import { daftarKategori, daftarKriteria, daftarTemplate } from './template.json';

let detail = {
  ruang_lingkup: 'Pusat Data'
};

let id, bagian;

let table = {
  url: '/api/indeks-kami/isian/read?kategori=1',
  data: [],
  current: 1,
  from: 1,
  to: 1,
  total: 5,
  query:{
    versi:'4.2',
    limit:-1
  },
  selections:[]
}

let currentKategori = [];
let isian = null;

$: if(isian){
  calculate()
}

let finalSkor = {
  total:0,
  kategori:'Rendah',
  kriteria:{}
}
let statusSkor = {}
let validasiSkor = {}

const calculateSkor = (data, kategori, prop)=>{
  let kriteria = daftarKriteria.filter(k=>k.kode==kategori.kode)
  let skor = {};
  skor.total = data.reduce((prev,d)=>d[prop]+prev,0);
  
  if(kategori.tipe=='tingkat'){
    skor[1]   = data.filter(v=>v.tahap==1).reduce((p,v)=>p+v[prop],0);
    skor[2]   = data.filter(v=>v.tahap==2).reduce((p,v)=>p+v[prop],0);
    skor[3]   = data.filter(v=>v.tahap==3).reduce((p,v)=>p+v[prop],0);

    skor.II   = data.filter(v=>v.tingkat=='II').reduce((p,v)=>p+v[prop],0);
    skor.III  = data.filter(v=>v.tingkat=='III').reduce((p,v)=>p+v[prop],0);
    skor.IV   = data.filter(v=>v.tingkat=='IV').reduce((p,v)=>p+v[prop],0);
    skor.V    = data.filter(v=>v.tingkat=='V').reduce((p,v)=>p+v[prop],0);

    skor.tkII = kriteria.find(k=>k.tingkat=='II' && k.minimal.II <=skor.II);
    skor.tkIII= kriteria.find(k=>k.tingkat=='III'&& k.minimal.III<=skor.III&& k.minimal.II <=skor.II);
    skor.tkIV = kriteria.find(k=>k.tingkat=='IV' && k.minimal.IV <=skor.IV && k.minimal.III<=skor.III);
    skor.tkV  = kriteria.find(k=>k.tingkat=='V'  && k.minimal.V  <=skor.V  && k.minimal.IV <=skor.IV);

    skor.klasifikasi = (skor.tkV || skor.tkIV || skor.tkIII || skor.tkII || {}).klasifikasi;

  }else if(kategori.tipe == 'persen'){
    skor.klasifikasi = Math.ceil(skor.total / kriteria[0].minimal.total * 100) + '%'
  }else{
    skor.klasifikasi = (kriteria.find(k=>k.minimal<=skor.total) ||{}).klasifikasi;
  }
  return skor;
}
const calculate = () =>{
  daftarKategori.forEach(kategori=>{
    let currentIsian = Object.values(isian).filter(i=>i.kode.startsWith(kategori.kode));
    // console.log( calculateSkor(currentIsian,k,'status'))
    statusSkor[kategori.kode] = calculateSkor(currentIsian,kategori,'status');
    validasiSkor[kategori.kode] = calculateSkor(currentIsian,kategori,'validasi');
    // console.log(statusSkor)
  })  
  finalSkor.total = Object.keys(statusSkor).filter(key=>!(key.startsWith(1)||key.startsWith(7))).reduce((prev,val)=>prev+statusSkor[val].total,0)
  finalSkor.kategori = (statusSkor[1]||{}).klasifikasi
  finalSkor.kriteria = (daftarKriteria.find(val=>val.kode==finalSkor.kategori&&val.minimal<=finalSkor.total)||{})
}
const kode = (num) =>{
  if(!num){
    return null
  }
  if(num.includes('#')){
    return num.replace(/#|\.0/g,'')
  }
  let kat = num.split('.');
  if(kat.length>2){
    return kat[0] + '.' + kat[1]
  }
  return kat[0]
}

onMount(()=>{
  setTimeout(()=>{
    
    let urlParams = new URLSearchParams(location.search)
    id = urlParams.get('id')
    bagian = urlParams.get('kategori');

    if(!id){
      location.href = '/app/indeks-kami'
    }  

    isian = {};
    daftarTemplate.forEach(k=>{
      if(!k.kode.toString().includes('#')){
        isian[k.kode.toString()]={
          id:id,
          kode:k.kode.toString(),
          tingkat:k.tingkat,
          tahap:k.tahap,
          dokumen:[],
          status:null,// default value
          validasi:null
        }
      }
    })
    
    document.querySelector(`[data-sticky="${bagian}"]`).scrollIntoView({behavior:'smooth'});

    const observer = new IntersectionObserver(([e]) => {
      currentKategori = daftarKategori.find(k=>k.kode == e.target.dataset.sticky)||{}
    },{threshold: [1]});

    const sticky = document.querySelectorAll('[data-sticky]')
    sticky.forEach(el=>{
      observer.observe(el);
    })

  },1000)
})
</script>


<div id="main" class="p-6">
  <section class="pt-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li><a href="/app/indeks-kami">Indeks Kami</a></li> 
        <li><a href={"/app/indeks-kami/dashboard?id="+id}>Dashboard</a></li> 
        <li>Detail</li>
      </ul>
    </div>
    <img src="/tools/indeks-kami.png" alt="indeks kami" class="float-right w-24 mr-5 -mb-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Asesmen Indeks Kami : { detail.ruang_lingkup }</h1>
  </section>
  
  <section class="">
    <div class="flex flex-wrap md:flex-nowrap justify-between gap-5">
      <div class="w-full">
        <h1 class="text-xl">{ currentKategori.bagian||'' }</h1>
        <div>
          {@html currentKategori.deskripsi||'' }
        </div>
      </div>
      
      <div class="px-5 text-center">
        <div class="my-2 radial-progress text-secondary text-center text-sm" style={`--value:${finalSkor.total/finalSkor.kriteria.maksimal*100};--size:5rem;`}>
          <b>{ finalSkor.kategori }</b>
          <b>{ finalSkor.total }</b>
        </div>
        
        <br>
        <div class="badge badge-accent w-40 h-auto">
          { finalSkor.kriteria.klasifikasi }
          <!-- { finalSkor.kriteria.maksimal } -->
        </div>
      </div>
    </div>
    <div class="bg-base-100 rounded-xl shadow p-2 my-3">
      <div class="h-[500px] overflow-auto">
        <table class="table w-full">
          {#each daftarTemplate as d,i}    
            {#if !d.opsi}
              {#if !d.kode.includes('##')}
              <tr class="sticky -top-1 z-20 bg-base-200 h-24" data-sticky={kode(d.kode)}>
                <th class="text-center">{ kode(d.kode) }</th>
                <th>{d.pertanyaan}</th>
                <th class="text-center">
                  Status 
                  {#if statusSkor[kode(d.kode)]}
                    <span class="badge badge-">{ statusSkor[kode(d.kode)].total }</span><br>
                    <span class="badge badge-info">{ statusSkor[kode(d.kode)].klasifikasi }</span>
                  {/if}
                </th>
                <th class="text-center">
                  Validasi 
                  {#if validasiSkor[kode(d.kode)]}
                    <span class="badge badge-">{ validasiSkor[kode(d.kode)].total }</span><br>
                    <span class="badge badge-success">{ validasiSkor[kode(d.kode)].klasifikasi }</span>
                  {/if}
                </th>
              </tr>
              {:else}
              <tr class="bg-base-200">
                <th class="text-center">{kode(d.kode)}</th>
                <th>{d.pertanyaan}</th>
                <th></th>
                <th></th>
              </tr>
              {/if}
            {:else}
              <tr class="hover" 
                class:bg-neutral={!d.opsi}
                class:text-neutral-content={!d.opsi}
                >
                <!-- <th>
                  <Checkbox bind:selected={table.selections[i]} />
                </th> -->
                <td class="align-top text-center">
                  <span>{ d.kode }</span>
                  {#if d.tingkat}
                    <span class="badge badge-error whitespace-nowrap">
                      Tk.{ d.tingkat } :                
                      {#if statusSkor[kode(d.kode)]}
                        { statusSkor[kode(d.kode)][d.tingkat] } 
                      {/if}
                    </span>
                  {/if}
                  {#if d.tahap}
                    <span class="badge badge-info whitespace-nowrap">
                      T{ d.tahap } :
                      {#if statusSkor[kode(d.kode)]}
                        { statusSkor[kode(d.kode)][d.tahap] } 
                      {/if}
                    </span>
                  {/if}
                </td>
                <td>
                  <div class="py-1">
                    { d.pertanyaan }
                  </div>
                  <div class="flex gap-2">
                    <Button secondary tiny>
                      <PlusIcon size="12"/>
                      dokumen
                    </Button>
                    <div class="ml-auto">
                      <Button info tiny>
                        <MessageSquareIcon size="12"/>
                      </Button>
                    </div>
                  </div>
                </td>
                <td>
                  {#if isian}
                    <Select bind:value={isian[d.kode].status} options={d.opsi} small></Select>
                  {/if}
                </td>
                <td>
                  {#if isian}
                    <Select bind:value={isian[d.kode].validasi} options={d.opsi} small></Select>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </table>
        
      </div>
    </div>
  </section>
  
</div>
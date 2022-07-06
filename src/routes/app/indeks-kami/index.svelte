<script>
import dayjs from 'dayjs';
import { Button,Checkbox,Input,Select,Dropdown, Portal, MockupCode } from '$ui';
import { AirplayIcon, FeatherIcon, MoreVerticalIcon, PlusIcon, RefreshCwIcon, Share2Icon, Trash2Icon } from 'svelte-feather-icons';

let table = {
  url: '/api/kami/read',
  data: [
    {
      id:Math.floor(Math.random()*10000),
      versi: '4.2',
      tanggal: new Date(),
      instansi: 'Dinas Komunikasi dan Informatika',
      ruang_lingkup: 'Pusat Data',
      asesi: 'Aditiya Anwar',
      asesor: 'Pondra Setiawan',
      kategori_sistem: 'Strategis',
      skor: 'Baik'
    },
    {
      id:Math.floor(Math.random()*10000),
      versi: '4.2',
      tanggal: new Date(),
      instansi: 'Dinas Komunikasi dan Informatika',
      ruang_lingkup: 'Pusat Data',
      asesi: 'Aditiya Anwar',
      asesor: 'Pondra Setiawan',
      kategori_sistem: 'Strategis',
      skor: 'Baik'
    },
    {
      id:Math.floor(Math.random()*10000),
      versi: '4.2',
      tanggal: new Date(),
      instansi: 'Dinas Komunikasi dan Informatika',
      ruang_lingkup: 'Pusat Data',
      asesi: 'Aditiya Anwar',
      asesor: 'Pondra Setiawan',
      kategori_sistem: 'Strategis',
      skor: 'Baik'
    },
    {
      id:Math.floor(Math.random()*10000),
      versi: '4.2',
      tanggal: new Date(),
      instansi: 'Dinas Komunikasi dan Informatika',
      ruang_lingkup: 'Pusat Data',
      asesi: 'Aditiya Anwar',
      asesor: 'Pondra Setiawan',
      kategori_sistem: 'Strategis',
      skor: 'Baik'
    },
    {
      id:Math.floor(Math.random()*10000),
      versi: '4.2',
      tanggal: new Date(),
      instansi: 'Dinas Komunikasi dan Informatika',
      ruang_lingkup: 'Pusat Data',
      asesi: 'Aditiya Anwar',
      asesor: 'Pondra Setiawan',
      kategori_sistem: 'Strategis',
      skor: 'Baik'
    },
  ],
  current: 1,
  from: 1,
  to: 1,
  total: 5,
  query:{
    versi:'4.2'
  },
  selections:[]
}

let description; 

function toggleSelections(){
  if(table.selections.every(v=>v==true)){
    table.selections = new Array(table.total).fill(false)
  }else{
    table.selections = new Array(table.total).fill(true)
  }
}

function refreshTable(){
  // console.log(mode)
  table.loading=!table.loading;
  // table.loading=true;
  // http('get','/api/dokumen/'+ $menu).then(({data})=>{
  //   table = {
  //     loading:false,
  //     data :  data.data,
  //     current: data.currentPage,
  //     from: data.from,
  //     to: data.to,
  //     total: data.total,
  //     query:{},
  //     selections: new Array(data.total).fill(false)
  //   };
  //   refreshStats()
  // }).catch(err=>{
  //   table.loading = false;
  // })
}
</script>

<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Indeks Kami</li>
      </ul>
    </div>
    <img src="/indeks-kami.png" alt="indeks kami" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Indeks Keamanan Informasi</h1>
    <p class="py-1">
      Indeks KAMI adalah alat evaluasi untuk menganalisa tingkat kesiapan pengamanan informasi di suatu organisasi. Alat evaluasi ini tidak ditujukan untuk menganalisa kelayakan atau efektifitas bentuk pengamanan yang ada, melainkan sebagai perangkat untuk memberikan gambaran kondisi kesiapan (kelengkapan dan kematangan) kerangka kerja keamanan informasi kepada pimpinan Instansi/Perusahaan. Evaluasi dilakukan terhadap berbagai area yang menjadi target penerapan keamanan informasi dengan ruang lingkup pembahasan yang juga memenuhi semua aspek keamanan yang didefinisikan oleh standar ISO/IEC 27001:2013.
    </p>
    {#if description}
      <p class="py-1">
        Bentuk evaluasi yang diterapkan dalam indeks KAMI dirancang untuk dapat digunakan oleh suatu organisasi dari berbagai tingkatan, ukuran, maupun tingkat kepentingan penggunaan TIK dalam mendukung terlaksananya proses yang ada. Data yang digunakan dalam evaluasi ini nantinya akan memberikan snapshot indeks kesiapan - dari aspek kelengkapan maupun kematangan - kerangka kerja keamanan informasi yang diterapkan dan dapat digunakan sebagai pembanding dalam rangka menyusun langkah perbaikan dan penetapan prioritasnya.
      </p>
      <p class="py-1">
        Alat evaluasi ini kemudian bisa digunakan secara berkala untuk mendapatkan gambaran perubahan kondisi keamanan informasi sebagai hasil dari program kerja yang dijalankan, sekaligus sebagai sarana untuk menyampaikan peningkatan kesiapan kepada pihak yang terkait (stakeholders).
      </p>
    {/if}
    <div class="py-2">
      <Button on:click={()=>description=!description} info small>
        Detail
      </Button>
      <Button href="/app/indeks-kami/prosedur" info small>
        Prosedur
      </Button>
      <Button href="https://bssn.go.id/indeks-kami" target="_blank" info small>
        Referensi
      </Button>
    </div>
  </section>

  <section class="py-3">
    <div class="flex justify-between">
      <h1 class="text-lg font-bold uppercase">
        Daftar Asesmen Indeks Kami {table.query.versi}
      </h1>
      <div class="flex gap-2">
    
        <Button on:click={refreshTable} small secondary>
          <PlusIcon size="16"/> Asesmen Baru
        </Button>
        <Select 
          bind:value={table.query.versi} 
          options={[
            {label:'Semua Versi Indeks Kami', value:''},
            {label:'Versi 4.19 (November 2019)', value:'4.19', disabled:1},
            {label:'Versi 4.2 (Mei 2021)', value:'4.2',selected:1},
          ]} small>
        </Select>
      </div>
    </div>
    <div class="flex gap-5 justify-between">
      <div class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Pengajuan</div>
          <div class="stat-value">5</div>
          <div class="stat-desc">Semua asesmen pengajuan</div>
        </div>        
      </div>
      <div class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Direview</div>
          <div class="stat-value">3</div>
          <div class="stat-desc">Asesmen butuh direview</div>
        </div>        
      </div>
      <div class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Sistem Strategis</div>
          <div class="stat-value">2</div>
          <div class="stat-desc">Kategori Sistem Elektronik Strategis</div>
        </div>        
      </div>
      <div class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Kategori Baik</div>
          <div class="stat-value">4</div>
          <div class="stat-desc">SE Sesuai standar Keamanaan</div>
        </div>        
      </div>
    </div>
    
    <div class="toolbar flex gap-2 pt-5">      
      <Button on:click={refreshTable} small>
        <RefreshCwIcon size="16" class={table.loading?'animate-spin':''}/>
      </Button>

      <div class="w-full">
        <Input bind:value={table.query.nama} placeholder="Cari Data" small/>
      </div>
    </div>
    <div class="bg-base-100 rounded-xl shadow p-2 mb-3">
      <div class="min-h-[500px] overflow-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <!-- <th>
                <Checkbox selected={table.selections.every(v=>v==true)} on:change={toggleSelections}/>
              </th> -->
              <th>Tanggal</th>
              <th>Instansi Pemangku</th>
              <th>Ruang Lingkup</th>
              <th>Asesi</th>
              <th>Asesor</th>
              <th>Kategori Sistem Elektronik</th>
              <th>Hasil Evaluasi</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {#each table.data as d,i}            
              <tr class="hover">
                <!-- <th>
                  <Checkbox bind:selected={table.selections[i]} />
                </th> -->
                <td>
                  { dayjs(d.tanggal).format('DD-MM-YY hh:mm') }
                </td>
                <td>{ d.instansi }</td>
                <td>{ d.ruang_lingkup }</td>
                <td>{ d.asesi }</td>
                <td>{ d.asesor }</td>
                <td>{ d.kategori_sistem }</td>
                <td>{ d.skor }</td>
                <td>
                  <div class="flex gap-2">
                    <Button href={"/app/indeks-kami/dashboard?id="+d.id} small primary>
                      <AirplayIcon size="20"/>
                    </Button>
                    <!-- <Dropdown end>
                      <Button small>
                        <MoreVerticalIcon size="20"/>
                      </Button>
                      <ul slot="menu" class="menu">
                    </Dropdown> -->
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        
      </div>
    </div>
    
      
    <div class="btn-group">
      <button class="btn btn-sm">1</button>
      <button class="btn btn-sm btn-active">2</button>
      <button class="btn btn-sm">3</button>
      <button class="btn btn-sm">4</button>
    </div>
  </section>
</div>
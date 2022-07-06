<script>
  import dayjs from 'dayjs';
  import { user, notify, menu } from '$lib/store';
  import { http } from '$lib/api';
	import { AirplayIcon, BookIcon, DownloadIcon, FeatherIcon, MoreVerticalIcon, RefreshCwIcon, Share2Icon, Trash2Icon } from 'svelte-feather-icons';
	import { Button,Checkbox,Input,Dropdown, Portal, MockupCode } from '$ui';
  import Preview from './_/preview.svelte';
  import { onMount } from 'svelte';
  import Upload from './_/upload.svelte';
  import Stats from './_/stats.svelte';
  import ENV from '$lib/variables';
  
  
  let stats = {
    diupload:0,
    pengajuan:0,
    ditandatangani:0,
    dibagikan: 0
  };

  let dataSpesimen = []
  let penandatangan = '';
  let upload = [];

  let formDelete = {
    open:false,
    prop:{}
  };
  let formDetail = {
    open: false,
    loading:false,
    message:'',
    prop: {
      tanggal: new Date()
    },
    error:{},
  }
  let formTtd = {
    open: false,
    loading:false,
    message:'',
    prop: {},
    error:{},
  }
  let formPassphrase={
    open:false,
    message:'',
    prop:{}
  }
  let formPreview = {
    open:false,
    prop:{}
  }
  let formShare = {
    open:false,
    prop:[]
  }
  let mode = 'user';
  let table = {
    loading:false,
    data: [],
    current: 1,
    from: 1,
    to: 1,
    total: 1,
    query:{},
    selections:[],
  }
  
  function confirmDestroyFile(docs){
    formDelete = {
      open: true,
      prop: docs
    };
  }
  function destroyFile(){
    let id = formDelete.prop.id;
    http('delete','/api/dokumen/' + id).then(response=>{
      let index = upload.findIndex(d=>d.done.id == id);
      upload.splice(index,1)
      upload= upload;
      formDelete = {open:false,prop:{}}
      formDetail.open=false;
      refreshTable()
    }).catch(err=>{})
  }
  // $:mode, refreshTable()
  function refreshTable(){
    // console.log(mode)
    table.loading=true;
    http('get','/api/dokumen/'+ $menu).then(({data})=>{
      table = {
        loading:false,
        data :  data.data,
        current: data.currentPage,
        from: data.from,
        to: data.to,
        total: data.total,
        query:{},
        selections: new Array(data.total).fill(false)
      };
      refreshStats()
    }).catch(err=>{
      table.loading = false;
    })
  }
  function refreshStats(){
    http('get','/api/dokumen/stats').then(({data})=>{
      stats= data;
    }).catch(err=>{})
  }
  function toggleSelections(){
    if(table.selections.every(v=>v==true)){
      table.selections = new Array(table.total).fill(false)
    }else{
      table.selections = new Array(table.total).fill(true)
    }
  }
  function ttdDokumen(){
    let ttd = table.data.filter((val,key)=>table.selections[key]);
    upload = [];
    ttd.forEach((data,i)=>{
      if(i == 0){
        // console.log(data.spesimen);
        dataSpesimen = data.spesimen || [];
        penandatangan = data.penandatangan;
      }
      upload.push({
        file:{},
        progress:0,
        done:data,
        open:false,
      });
    })
    upload = upload;
    document.querySelector('#main').scrollIntoView({behavior:'smooth'})
  }

  function shareDokumen(){
    let docs = table.data.filter((val,key)=>table.selections[key]);
    let text = [];
    docs.forEach(data=>{
      text.push(ENV.url + '/d?' + data.id + ' - ' + data.nama)
    })

    formShare.open=true;
    formShare.prop = docs;
    formShare.text = text.join('\n');
  }

function openModalPassphrase(){
  formPassphrase.open=true;
  upload.forEach(f=>{
    let file = f.done;
    let data = {
      spesimen:JSON.stringify(dataSpesimen),
      penandatangan
    }
    http('put','/api/dokumen/'+file.id,data).then(response=>{
      // Background updating
      // console.log(response)
    })
  })
}
function updateDetailFile(){
  formTtd.open=false;
  upload.forEach(f=>{
    let file = f.done;
    let data = {
      spesimen:JSON.stringify(dataSpesimen),
      penandatangan
    }
    http('put','/api/dokumen/'+file.id,data).then(response=>{
      // Background updating
      // console.log(response)
      refreshTable();
    }).catch(err=>{})
  })
  upload = []
}
function ttd(status){
  formPassphrase.message = 'loading...';
  let dokumen_id = upload.map(f=>f.done.id)
  let data = {
    dokumen_id:dokumen_id.join(','),
    passphrase:formPassphrase.prop.passphrase,
    status
  }
  http('post','/api/dokumen/sign',data).then(response=>{
    formPassphrase.message = response.message;
    setTimeout(()=>{
      formPassphrase.open = false;
      formPassphrase.message=''
      formTtd.open = false
      upload=[];
      refreshTable()
    },3000);
  }).catch(err=>{
    // console.log(error.response)
    if(err.response.data){
      formPassphrase.message = err.response.data.message;// +' '+JSON.stringify(err.response.data.errors);
    }
  })
  // upload = []
}

  // $:upload,refreshTable()
  $: $menu, refreshTable()
  onMount(()=>{
    // refreshTable()
    if(!$user.nik){
      window.location.href = '/app/profil'
    }
    notify.subscribe(value=>refreshTable())
  })


</script>

<svelte:head>
  <script src="build/pdf.min.js"></script>
</svelte:head>
<div id="main" class="p-6">
  <Upload 
    bind:upload 
    bind:formDetail 
    bind:formTtd
    {confirmDestroyFile}
    {refreshTable}
  ></Upload>
  
  <Stats bind:stats></Stats>
  <div class="flex flex-wrap gap-4 justify-between mt-10 py-2">
    <div class="flex gap-2">
      <!-- <ButtonGroup>
        <Number value={table.current} class="w-24" min={0}/>
      </ButtonGroup> -->

      <Button on:click={refreshTable}>
        <RefreshCwIcon size="16" class={table.loading?'animate-spin':''}/>
      </Button>

      <div class="w-72">
        <Input bind:value={table.query.nama} placeholder="Cari Dokumen" autocomplete="off"/>
      </div>
    </div>
    <div class="flex gap-2">
      {#if table.selections.includes(true)}
      <Button on:click={ttdDokumen} secondary gap>
        <FeatherIcon size="16"/> Tandatangani
      </Button>
      <Button on:click={shareDokumen} info gap>
        <Share2Icon size="16"/> Bagikan
      </Button>
      {/if}
    </div>
  </div>
  <div class="bg-base-100 rounded-xl shadow p-2 mb-20">
    <div class="min-h-[500px] overflow-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>
              <Checkbox selected={table.selections.every(v=>v==true)} on:change={toggleSelections}/>
            </th>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Nomor</th>
            <th>Status</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {#each table.data as d,i}            
            <tr class="hover">
              <th>
                <Checkbox bind:selected={table.selections[i]} />
              </th>
              <td>
                { dayjs(d.created_at).format('DD-MM-YY hh:mm') }
              </td>
              <td>
                { d.nama }
              </td>
              <td>{ d.nomor||'' }</td>
              <td>{ d.history[0].status}</td>
              <td>
                <div class="flex gap-2">
                  <Button small primary on:click={()=>{formPreview.open=true;formPreview.prop=d;formPreview.preview=(d.file||'').replace('public/','/storage/')}}>
                    <AirplayIcon size="20"/>
                  </Button>
                <Dropdown end>
                  <Button small>
                    <MoreVerticalIcon size="20"/>
                  </Button>
                  <ul slot="menu" class="menu">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={()=>{table.selections[i]=true;ttdDokumen()}} class="">TANDATANGANI</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={()=>{table.selections[i]=true;shareDokumen()}} class="">BAGIKAN</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- <li><a on:click={confirmDestroyFile} class="">UBAH</a></li> -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={()=>{confirmDestroyFile(d)}} class="">HAPUS</a></li>
                  </ul>
                </Dropdown>
              </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
    
</div>
<Portal>
  <div class="modal" class:modal-open={formDelete.open} on:click={()=>formDelete.open=false}>
    <div class="modal-box" on:click|stopPropagation={()=>null}>
      <div class="flex justify-center py-8">
        <Trash2Icon size="64"/>
      </div>
      <h3 class="font-bold text-lg text-center">Apakah anda yakin ingin menghapus dokumen?</h3>
      <p class="py-4 text-center">{ formDelete.prop.nama }</p>
      <div class="modal-action justify-center">
        <Button on:click={destroyFile} error>Ya!</Button>
        <Button on:click={()=>formDelete.open=false}>Tidak!</Button>
      </div>
    </div>    
  </div>

  <div class="modal" class:modal-open={formTtd.open} on:click={()=>formTtd.open=false}>
    <div class="modal-box w-11/12 max-w-6xl" on:click|stopPropagation={()=>null}>
      <div class="absolute top-0 right-0">
        <Button on:click={()=>formTtd.open=false} small>&times;</Button>
      </div>
      <h3 class="font-bold text-lg text-center p-2">{formTtd.prop.nama}</h3>
      <Preview url={ (formTtd.prop.file||'').replace('public/','/storage/')} 
        signed={formTtd.prop.sign}
        bind:dataSpesimen
        bind:penandatangan
        {openModalPassphrase}
        {updateDetailFile}
      ></Preview>
    </div>  
  </div>

  <div class="modal" class:modal-open={formPreview.open} on:click={()=>formPreview.open=false}>
    <div class="modal-box w-11/12 max-w-6xl" on:click|stopPropagation={()=>null}>
      <div class="absolute top-0 right-0">
        <Button on:click={()=>formPreview.open=false} small>&times;</Button>
      </div>
      <h3 class="font-bold text-lg text-center p-2">{formPreview.prop.nama}</h3>
      {#if formPreview.preview}
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src={'/web/viewer.html?'+formPreview.preview} class="w-full min-h-[500px]"></iframe>
      {/if}
      <br>
      <div class="overflow-auto">
        {#if formPreview.prop.history}
          <table class="table w-full">
            <thead>
              <tr>
                <th width="200">Tanggal</th>
                <th>Pengguna</th>
                <th>Status</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {#each formPreview.prop.history as history}
                <tr>
                  <td>{dayjs(history.created_at).format('DD-MM-YYYY hh:mm')}</td>
                  <td>{history.penandatangan.name}</td>
                  <td>{history.status}</td>
                  <td>                    
                    <Button small primary on:click={()=>{formPreview.preview=(history.file||'').replace('public/','/storage/')}}>
                      <BookIcon size="20"/>
                    </Button>
                    <Button small accent download href={formPreview.preview=(history.file||'').replace('public/','/storage/')}>
                      <DownloadIcon size="20"/>
                    </Button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
      </div>
    </div>  
  </div>

  <div class="modal" class:modal-open={formPassphrase.open} on:click={()=>formPassphrase.open=false}>
    <div class="modal-box p-6" on:click|stopPropagation={()=>null}>
      <div class="absolute top-0 right-0">
        <Button on:click={()=>formPassphrase.open=false} small>&times;</Button>
      </div>
      <h3 class="font-bold text-lg text-center">Masukkan Passphrase Anda</h3>
      <div class="my-6">
        <Input type="password" bind:value={formPassphrase.prop.passphrase}/>
      </div>
      <div class="h-12">
        <div class="text-primary">{formPassphrase.message}</div>
      </div>
      <div class="text-center">
        <div>
          <Button on:click={()=>ttd('Tandatangan')} primary>TANDA TANGAN!</Button>
        </div>
        <br>
        <div>              
          <Button on:click={()=>ttd('Paraf')} small>PARAF</Button>
        </div>
        <!-- <Button on:click={ttd}>AJUKAN REVISI!</Button> -->
      </div>
    </div>  
  </div>

  <div class="modal" class:modal-open={formShare.open} on:click={()=>formShare.open=false}>
    <div class="modal-box w-11/12 max-w-6xl" on:click|stopPropagation={()=>null}>
      <div class="absolute top-0 right-0">
        <Button on:click={()=>formShare.open=false} small>&times;</Button>
      </div>
      <h3 class="font-bold text-lg text-center">Bagikan Dokumen</h3>
      <div class="my-4">
        <MockupCode data={formShare.text} open></MockupCode>
      </div>
    </div>  
  </div>
</Portal>
<script>
import dayjs from 'dayjs';
import ENV from '$lib/variables';
import { http } from "$lib/api";
import { onMount } from "svelte";
import { Button, Input } from '$ui'
import { AirplayIcon, BookIcon, DownloadIcon } from 'svelte-feather-icons';

let pass = null;
let message = ''
let doc = {
  nama:''
};
function checkDoc(){
  let id = location.href.split('?');
  if(id.length>1){
    http('post','dokumen/'+ id[1],{pass})
      .then(response=>{
        doc = response.data
        if(response.data.message){
          message = response.data.message
        }
      })
  }
}
onMount(()=>{
  checkDoc()
})
</script>

<div class="flex px-6 py-3">
  <a href="/" class="flex gap-2 py-2 text-base-800 text-2xl font-bold">
    <img src="/favicon.png" alt="icon" class="h-8" />
    {ENV.name}
  </a>
</div>

<div class="px-6">
  {#if !doc}
  
    <h3 class="font-bold text-lg text-center p-2">Dokumen Tidak ditemukan</h3>
  
  {:else if doc.rahasia}
    <div class="p-6 text-center ">

      <h3 class="font-bold text-lg text-center p-2">Dokumen Bersifat Rahasia</h3>
      <p>Isi password untuk menampilkan dokumen</p> 
      <form on:submit|preventDefault={checkDoc} class="p-6">
        <Input type="password" bind:value={pass} required></Input>
        <Button>Lihat Dokumen</Button>
        <p class="text-error-content p-3">{message}</p>
      </form>
    </div>
    
  {:else}
    <h3 class="font-bold text-lg text-center p-2">{doc.nama}</h3>
    {#if doc.preview}
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe src={'/web/viewer.html?'+doc.preview} class="w-full min-h-[500px]"></iframe>
    {/if}
    <br>
    <!-- <h3 class="text-lg text-center">RIWAYAT DOKUMEN</h3> -->
    <div class="overflow-auto">
      {#if doc.history}
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
            {#each doc.history as history}
              <tr>
                <td>{dayjs(history.created_at).format('DD-MM-YYYY hh:mm')}</td>
                <td>{history.penandatangan.name}</td>
                <td>{history.status}</td>
                <td>                    
                  <Button small primary on:click={()=>{doc.preview=(history.file||'').replace('public/','/storage/')}}>
                    <BookIcon size="20"/>
                  </Button>
                  <Button small accent download href={doc.preview=(history.file||'').replace('public/','/storage/')}>
                    <DownloadIcon size="20"/>
                  </Button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
  {/if}
</div>
<script type="text/javascript">
import { browser } from '$app/env'
import { http } from '$lib/api';
import ENV from '$lib/variables';
import { Button, Input } from '$ui';
import QrScanner from 'qr-scanner'; 

let mode = 'scan';
let el;
let qrScanner;
let message = ''
let form = {};

function verifyDokumen(){
  form.captcha = null
  http('post','dokumen/verify',form)
    .then(response=>{
      console.log(response)
    }).catch(err=>{})
}
function verifyCallback(response) {
  form.captcha = response;
};
function onloadCallback() {
  grecaptcha.render('recaptcha', {
    'sitekey' : ENV.recaptchaKey,
    'callback' : verifyCallback,
    // 'theme' : 'dark'
  });
};
  
$: if(mode === 'scan' && browser){  
  // console.log(qrScanner)
  if(!qrScanner){
    setTimeout(()=>{
      const config = {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
      qrScanner = new QrScanner(el, scanned,config);
      qrScanner.start()
    },100)
  }
}

$: if(mode === 'upload' && browser){
  if(qrScanner){
    qrScanner.stop()
    setTimeout(()=>{
      qrScanner.destroy()
      qrScanner =null;
      document.querySelectorAll('.scan-region-highlight').forEach(e=>e.parentNode.removeChild(e));
    },100)
  }
  setTimeout(onloadCallback,200);
}
function scanned(result){
  console.log('decoded qr code:', result)
  location.href = result.data
}
function backHome(){
  if(!qrScanner){
    location.href = '/'
  }else{
    qrScanner.stop()
    setTimeout(()=>{
      qrScanner.destroy()
      qrScanner =null;
      document.querySelectorAll('.scan-region-highlight').forEach(e=>e.parentNode.removeChild(e));
      location.href='/'
    },100) 
  }
}
</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
</svelte:head>

<div class="flex justify-between fixed top-0 z-50 p-6 bg-base-100 w-full">

  <div class="flex gap-2 py-2 text-base-800 text-2xl font-bold" on:click={backHome}>
    <img src="/favicon.png" alt="icon" class="h-8" />
    {ENV.name}
  </div>
  <Button on:click={()=>mode=mode=='scan'?'upload':'scan'} accent>
    MODE {mode}
  </Button>
</div>
  
{#if mode == 'scan'}
  <!-- <h3>Scan QR Code</h3> -->
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={el} class="w-screen h-screen bg-black"></video>
{:else}
  <div class="pt-32 px-6">
    <form on:submit|preventDefault={verifyDokumen}>
      <Input bind:value={form.file} type="file" label="Dokumen"></Input>
      <div id="recaptcha"></div>
      <br/>
      <Button disabled={!form.captcha} primary>CEK DOKUMEN</Button>
    </form>
  </div>
{/if}
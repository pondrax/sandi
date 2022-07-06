<script>
  import { user, notify, menu } from '$lib/store';
	import env from '$lib/variables';
  import { http } from '$lib/api';
	import { AtSignIcon, BookmarkIcon, BookOpenIcon, CircleIcon, FeatherIcon, KeyIcon, MapPinIcon, MenuIcon, Share2Icon, ZapIcon } from 'svelte-feather-icons';
	import { 
    Button, 
    Drawer,
    Alert,
  } from '$ui';
  import Pusher from 'pusher-js';

	export let openSidebar = false;
  

  let notifications = $notify;
  // Pusher.logToConsole = true;
    
  var pusher = new Pusher('c74de4efb08087148359', {
    cluster: 'ap1'
  });
    
  var channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(message) {
    console.log(message,$user)
    if(message.to.includes($user.id)){
      addNotification(message,3000)
    }
  });
  function addNotification(message, timeout){
    notifications.push(message);
    notifications = notifications;

    if(timeout){
      setTimeout(()=>{
        delNotification(notifications.length)
      },timeout)
    }
  }
  function delNotification(id){
    notifications.splice(id,1)
    notifications=notifications
  }
  
  http('get','/api/profile').catch(err=>{
    if(err.response && err.response.status == 401){
      logout()
    }
  })
  function logout(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('access_user')
    location.href = '/';
  }
</script>

<div class="flex flex-col gap-5 fixed top-5 right-5" style="z-index:1000">
  {#each notifications as notification,id}
    {#if notification.data.error }
      <Alert error on:close={()=>delNotification(id)} closable sm>
        <h3 class="text-lg">{ notification.data.message }</h3>
        { notification.data.error }
      </Alert>
      {:else}
      <Alert info on:close={()=>delNotification(id)} closable sm>
        <h3 class="text-lg">{ notification.data.message }</h3>
        { notification.data.nama }
      </Alert>
    {/if}
  {/each}
  <!-- {JSON.stringify(notifications)} -->
</div>
<Drawer bind:open={openSidebar} mobile class="">
	<div slot="menu" class="flex flex-col h-screen py-4 w-72">
    <div class="overflow-y-auto">
      <div class="py-4">
        <a href="/app/dashboard" class="flex justify-center py-4">
          <div class="avatar indicator">
            <span class="indicator-item badge badge-secondary">{ $user.status || 'NOT_REGISTERED' }</span> 
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <!-- <img src="https://api.lorem.space/image/face" alt="avatar"/> -->
              <img src={$user.avatar} alt="avatar"/>
            </div>
          </div>
        </a>
        <div class="text-center">
          <h3 class="font-bold uppercase">{ $user.name }</h3>
          <h4 class="text-gray-400 text-sm">{ $user.jabatan }</h4>
          <div>
            <Button href="/app/profil" tiny primary>Profil</Button>
            <Button tiny on:click={logout}>Logout</Button>
          </div>
        </div>
        
      </div>
      <ul class="px-2 menu menu-compact">        
        <li class="menu-title relative">
          <span>Tentang</span>
        </li>
        <li>
          <div class="py-1 cursor-default bg-transparent text-sm">
            <AtSignIcon size="12"/>
            { $user.nip }
          </div>
        </li>
        <!-- <li>
          <div class="py-1 cursor-default bg-transparent text-sm">
            <PhoneCallIcon size="12"/>
            { $user.telepon }
          </div>
        </li> -->
        <li>
          <div class="py-1 cursor-default bg-transparent text-sm">
            <MapPinIcon size="12"/>
            { $user.unit_kerja }
          </div>
        </li>
        
        <li class="my-5"></li>

        <li class="menu-title">
          <span>Dokumen</span>
        </li>
        <li><a href="/app/dashboard" on:click={()=>menu.set('dokumen')}>
          <BookOpenIcon size="16"/>
          Semua
          <!-- <span class="badge text-xs ml-auto">12</span> -->
        </a></li>
        <!-- <li><a href="/app/dokumen">
          <BookmarkIcon size="16"/>
          Favorit
        </a></li> -->

        <li><a href="/app/dashboard" on:click={()=>menu.set('penandatangan')}>
          <ZapIcon size="16"/>
          Butuh Tanda Tangan
        </a></li>
        <li><a href="/app/dashboard" on:click={()=>menu.set('ditandatangani')}>
          <FeatherIcon size="16"/>
          Ditandatangani
        </a></li>
        <li><a href="/verify">
          <KeyIcon size="16"/>
          Verifikasi
        </a></li>
        
        <li class="mt-5"></li>
        <li class="menu-title">
          <span>Label</span>
        </li>
        <li>
          <div class="cursor-default bg-transparent text-sm">
            <CircleIcon size="12" class="text-blue-500"/> Baru
          </div>
        </li>
        <li>
          <div class="cursor-default bg-transparent text-sm">
            <CircleIcon size="12" class="text-purple-500"/> Rahasia
          </div>
        </li>
        <!-- <li>
          <div class="cursor-default bg-transparent text-sm">
            <CircleIcon size="12" class="text-red-500"/> Penting
          </div>
        </li> -->
        <li>
          <div class="cursor-default bg-transparent text-sm">
            <CircleIcon size="12" class="text-green-500"/> Ditandatangani
          </div>
        </li>
      </ul>

    </div>
    <div class="mt-auto mx-auto -mb-3 px-3 flex gap-1 py-2">
      <img src="/logo.png" alt="icon" class="h-8"/>
      <img src="/bsre.png" alt="icon" class="h-8"/>
      <a href="/" class="ml-2 my-1 text-base-800 text-md">
        { env.name }
      </a>
    </div>
  </div>
  <div class="p-2 h-screen">
    <div class="relative h-full bg-base-200 rounded-box overflow-auto">
      <div class="p-2">
        <Button ghost on:click={() => (openSidebar = !openSidebar)} class="btn lg:hidden">
          <MenuIcon size="24" />
        </Button>
      </div>
      {#if $user.status != 'ISSUE'}
      <div class="px-6">
        <Alert info>Sertifikat Elektronik anda belum aktif, anda belum bisa melakukan tanda tangan. 
          <a href="/app/profil" class="underline">Perbarui profil </a>
          untuk melanjutkan.</Alert>
      </div>
      {/if}
      <slot />
    </div>
	</div>
</Drawer>

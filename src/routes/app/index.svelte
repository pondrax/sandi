<script>
import dayjs from 'dayjs';
import { user, notify, menu } from '$lib/store';
import { http } from '$lib/api';
import { AirplayIcon, BookIcon, DownloadIcon, FeatherIcon, MoreVerticalIcon, RefreshCwIcon, Share2Icon, Trash2Icon } from 'svelte-feather-icons';
import { Button,Checkbox,Input,Dropdown, Portal, MockupCode } from '$ui';
import { onMount } from 'svelte';
import ENV from '$lib/variables';

let description;
</script>


<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Layanan Persandian</li>
      </ul>
    </div>
    <img src="/security.png" alt="indeks kami" class="float-right w-24 mr-5">
    <h1 class="py-2 text-lg font-bold uppercase">
      Portal Layanan Persandian dan Keamanan Informasi Kota Mojokerto
    </h1>
    <p class="py-1">
      Keamanan informasi adalah sekumpulan metodologi, praktik, ataupun proses yang dirancang dan diterapkan untuk melindungi informasi atau data pribadi dari akses, penggunaan, penyalahgunaan, gangguan, atau modifikasi yang tidak sah. Keamanan informasi bertujuan untuk melindungi data pada berbagai tahap, baik itu ketika proses menyimpan, mentransfer, atau menggunakannya. 
    </p>    
    {#if description}
      <p class="py-1">
        Portal layanan ini disusun untuk memudahkan semua stakeholder pemegang aplikasi untuk memantau layanan nya masing-masing
      </p>
    {/if}
    <div class="py-2">
      <Button on:click={()=>description=!description} info small>
        Detail
      </Button>
      <Button href="https://bssn.go.id/" target="_blank" info small>
        Referensi
      </Button>
    </div>
  </section>

  <section>
    <div class="flex flex-wrap gap-5">
      <a href="/app/indeks-kami" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/indeks-kami.png" alt="Indeks Kami" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Indeks Kami</h2>
          <p>Indeks Keamanan Informasi</p>
        </div>
      </a>
      <a href="/app/audit-csm" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/bssn.png" alt="CSM" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">CSM</h2>
          <p>Cyber Security Maturity</p>
        </div>
      </a>
      <a href="/app/audit-keamanan" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/spbe.png" alt="Audit SPBE" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Audit SPBE</h2>
          <p>Audit Keamanan SPBE</p>
        </div>
      </a>
      <a href="/app/monitoring" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/monitoring.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Monitoring</h2>
          <p>Monitoring</p>
        </div>
      </a>
      
    </div>
  </section>
</div>

<Portal>
  
</Portal>
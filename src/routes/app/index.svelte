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
    <img src="/logo.png" alt="indeks kami" class="float-right w-24 mr-5">
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

  <section class="py-3">
    <h1 class="text-xl py-3">Audit</h1>
    <div class="flex flex-wrap gap-5">
      <a href="/app/indeks-kami" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/indeks-kami.png" alt="Indeks Kami" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Indeks Kami</h2>
          <p>Indeks Keamanan Informasi</p>
        </div>
      </a>
      <a href="/app/audit-keamanan-aplikasi" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/spbe.png" alt="Audit SPBE" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Audit SPBE</h2>
          <p>Audit Keamanan Aplikasi SPBE</p>
        </div>
      </a>
      <a href="/app/audit-keamanan-infra" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/spbe.png" alt="Audit SPBE" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Audit SPBE</h2>
          <p>Audit Keamanan Infrastruktur SPBE</p>
        </div>
      </a>
      <a href="/app/audit-csm" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/bssn.png" alt="CSM" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">CSM</h2>
          <p>Cyber Security Maturity</p>
        </div>
      </a>
    </div>
  </section>

  <section class="py-3">
    <h1 class="text-xl py-3">Layanan</h1>
    <div class="flex flex-wrap gap-5">
      <a href="/app/monitoring" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/csirt.png" alt="Monitoring Aplikasi" class="h-5 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">CSIRT</h2>
          <p>Computer Security Incident Response Team</p>
        </div>
      </a>
      <a href="/app/sertifikat" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/bsre.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Sertifikat Elektronik</h2>
          <p>Sertifikat Elektronik</p>
        </div>
      </a>
      <a href="/app/helpdesk" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/helpdesk.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Helpdesk</h2>
          <p>Permintaan / Aduan Layanan</p>
        </div>
      </a>
    </div>
  </section>

  <section class="py-3">
    <h1 class="text-xl py-3">Lab</h1>
    <div class="flex flex-wrap gap-5">
      <a href="/app/itsa" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/itsa.png" alt="ITSA" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">ITSA</h2>
          <p>IT Security Assessment</p>
        </div>
      </a>
      <a href="/app/pentest" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/pentest.png" alt="Pentest" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Pentest</h2>
          <p>Penetrating Test</p>
        </div>
      </a>
      <a href="/app/vulnerability" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/va.png" alt="Vulnerability" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">VA</h2>
          <p>Vulnerability Assesment</p>
        </div>
      </a>
      <a href="/app/lab" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/lab.png" alt="Lab" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Lab</h2>
          <p>Security Lab</p>
        </div>
      </a>
    </div>
  </section>
  
  <section class="py-3">
    <h1 class="text-xl py-3">Monitoring</h1>
    <div class="flex flex-wrap gap-5">
      <a href="/app/monitoring" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/monitoring.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Monitoring</h2>
          <p>Monitoring Aplikasi</p>
        </div>
      </a>
      <a href="/app/wazuh" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/wazuh.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Wazuh</h2>
          <p>Security Monitoring</p>
        </div>
      </a>
      
      <a href="/app/firewall" class="card card-compact min-w-[15em] bg-base-100 hover:bg-primary shadow-xl">
        <img src="/tools/fortigate.png" alt="Monitoring Aplikasi" class="h-10 absolute right-0"/>
        <div class="card-body">
          <h2 class="card-title">Firewall</h2>
          <p>Firewall Fortigate</p>
        </div>
      </a>    
    </div>
  </section>
  
</div>

<Portal>
  
</Portal>
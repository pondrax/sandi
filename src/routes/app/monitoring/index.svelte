<script>
import { http } from "$lib/api";
import dayjs from "dayjs";
import { onMount } from "svelte";
import {Button} from '$lib/ui';
import { ArrowUpIcon } from "svelte-feather-icons";

let detail ={
  changed:[],
  unchanged:[],
  problem:[],
  stats:{
    total:1,
    changed:1,
    unchanged:1,
    problem:1,
  },
  query:{
    tanggal: dayjs().format('YYYY-MM-DD')
  }
}

onMount(()=>{
  getDataMonitoring()
})
const getDataMonitoring = ()=>{
  http('get','https://sandi.mojokertokota.go.id/api/stats/summary?filter[created_at]='+ detail.query.tanggal)
  .then(({problem, unchanged, changed})=>{
    detail.unchanged = unchanged;
    detail.changed = changed;
    detail.problem = problem;
    detail.stats = {
      total: changed.length + unchanged.length + problem.length,
      changed: changed.length,
      unchanged: unchanged.length,
      problem: problem.length
    }
  })
}
const scrollTo = (id)=>{
  document.querySelector(id).scrollIntoView({behavior:'smooth'})
}
</script>

<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Monitoring Aplikasi</li>
      </ul>
    </div>
    <img src="/monitoring.png" alt="indeks kami" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Layanan Monitoring Aplikasi</h1>
    <p class="py-1">
      Monitoring aplikasi merupakan tools yang dapat digunakan memantau seluruh aplikasi untuk memastikan kinerjanya sudah sesuai standar, mengidentifikasi bugs dan masalah dalam aplikasi sebelum masalah tersebut berdampak pada end user atau masyarakat.
    </p>
  </section>

  <!-- sticky top-0 z-50 -->
  <section class=" bg-base-200 p-3 -mx-3">
    <h1 class="pb-2 text-xl font-bold uppercase">Dashboard</h1>
    <div class="flex gap-5 justify-between">
      <Button on:click={()=>scrollTo('#problem')} class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Problem</div>
          <div class="stat-value">{detail.stats.problem}</div>
          <div class="stat-desc">Aplikasi Mengalami Kendala</div>
        </div>     
      </Button>
      <Button on:click={()=>scrollTo('#unchanged')}  class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Tetap</div>
          <div class="stat-value">{detail.stats.unchanged}</div>
          <div class="stat-desc">Aplikasi Tidak Update</div>
        </div>     
      </Button>
      <Button on:click={()=>scrollTo('#changed')}  class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Berubah</div>
          <div class="stat-value">{detail.stats.changed}</div>
          <div class="stat-desc">Aplikasi Mengalami Perubahan</div>
        </div>     
      </Button>
      <div class="stats shadow w-full">
        <div class="stat place-items-center">
          <div class="stat-title">Total</div>
          <div class="stat-value">{detail.stats.total}</div>
          <div class="stat-desc">Jumlah Aplikasi Dipantau</div>
        </div>     
      </div>
    </div>
  </section>

  <section id="problem" class="py-10">   
    <div class="flex justify-between">
      <h1 class="pb-2 text-xl font-bold uppercase">Aplikasi yang terkendala</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div> 
    <div class="grid md:grid-cols-3 gap-4 py-3">
      {#each detail.problem as d}
      <div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" class="h-48"/>
        </figure>
        <div class="card-body">
          <a href={d.site.url} target="_blank">{d.site.url}</a>
          <!-- <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> -->
        </div>
      </div>
      {/each}
    </div>
  </section>

  <section id="unchanged" class="py-10">    
    <div class="flex justify-between">
      <h1 class="pb-2 text-xl font-bold uppercase">Aplikasi terupdate</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div>
    <div class="grid md:grid-cols-3 gap-4 py-3">
      {#each detail.changed as d}
      <div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" />
        </figure>
        <div class="card-body">
          <a href={d.site.url} target="_blank">{d.site.url}</a>
        </div>
      </div>
      {/each}
    </div>
  </section>

  <section id="changed" class="py-10">    
    <div class="flex justify-between">
      <h1 class="pb-2 text-xl font-bold uppercase">Aplikasi yang tidak berubah</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div>
    <div class="grid md:grid-cols-3 gap-4 py-3">
      {#each detail.unchanged as d}
      <div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" />
        </figure>
        <div class="card-body">
          <a href={d.site.url} target="_blank">{d.site.url}</a>
        </div>
      </div>
      {/each}
    </div>
  </section>
</div>
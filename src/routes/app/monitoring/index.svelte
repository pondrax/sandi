<script>
import { http } from "$lib/api";
import dayjs from "dayjs";
import { onMount } from "svelte";
import {Button, Input} from '$lib/ui';
import { ArrowUpIcon, RefreshCwIcon } from "svelte-feather-icons";

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
  },
  loading:false
}

let stuck;

onMount(()=>{
  getDataMonitoring();  

  const observer = new IntersectionObserver(([e]) => {
    console.log(e.intersectionRatio)
    stuck = e.intersectionRatio<1;
    e.target.classList.toggle('stuck', e.intersectionRatio < 1)
  },{threshold: [1]});

  const sticky = document.querySelectorAll('.toolbar')
  sticky.forEach(el=>{
    observer.observe(el);
  })
})

const getDataMonitoring = ()=>{
  detail.loading = true;
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
    detail.loading=false
  })
}
const scrollTo = (id)=>{
  document.querySelector(id).scrollIntoView({behavior:'smooth'})
}

</script>

<div id="main" class="p-6">
  <!-- <Test on:mount={()=>alert('hi')}></Test> -->
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Monitoring Aplikasi</li>
      </ul>
    </div>
    <img src="/tools/monitoring.png" alt="monitoring" class="float-right w-24 mr-5">
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

  <div class="toolbar sticky -top-1 z-50 bg-base-200 flex gap-2 px-5 pt-3 -mx-5">      
    <Button on:click={getDataMonitoring} small>
      <RefreshCwIcon size="16" class={detail.loading?'animate-spin':''}/>
    </Button>

    <div class="w-full">
      <Input bind:value={detail.query.tanggal} type="date" small onInput={getDataMonitoring}></Input>
    </div>
    {#if stuck}
      <div style="margin-top:-2px">
        <ul class="menu menu-compact menu-horizontal bg-base-100 rounded-box">
          <li><div on:click={()=>scrollTo('#problem')}>Problem:{detail.stats.problem}</div></li>
          <li><div on:click={()=>scrollTo('#unchanged')}>Unchanged:{detail.stats.unchanged}</div></li>
          <li><div on:click={()=>scrollTo('#changed')}>Changed:{detail.stats.changed}</div></li>
          <li><div on:click={()=>scrollTo('#main')}>Total:{detail.stats.total}</div></li>
        </ul>
      </div>
    {/if}
  </div>

  <section id="problem" class="pt-16">   
    <div class="flex justify-between">
      <h1 class="text-xl font-bold uppercase">Aplikasi yang terkendala</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div>     
    
    {#if detail.loading}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
        <RefreshCwIcon size="30" class="animate-spin"/> 
        Loading...
      </div>      
    {:else if detail.problem.length == 0}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
          Data Tidak ditemukan
      </div>
    {:else}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-3">
        {#each detail.problem as d}
        <div class="card card-compact bg-base-100 shadow-xl">
          <p class="badge badge-error mx-3 mt-3 -mb-5 z-20">Terkendala</p>
          <figure>
            <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" class="h-48"/>
          </figure>
          <div class="card-body">
            <a href={d.site.url} target="_blank" class="link font-bold uppercase break-all">
              {d.site.url.replace(/http:|\/|.mojokertokota.go.id/g,'')}
            </a>
            <div>
              <p class="badge badge-error">{ dayjs(d.created_at).format('YYYY-MM-DD HH:mm')}</p>
            </div>
            <!-- <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div> -->
          </div>
        </div>
        {/each}
      </div>
    {/if}
  </section>

  <section id="unchanged" class="pt-16">    
    <div class="flex justify-between">
      <h1 class="text-xl font-bold uppercase">Aplikasi tidak update</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div>    
    
    {#if detail.loading}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
        <RefreshCwIcon size="30" class="animate-spin"/> 
        Loading...
      </div>      
    {:else if detail.unchanged.length == 0}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
          Data Tidak ditemukan
      </div>
    {:else}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-3">
        {#each detail.unchanged as d}
        <div class="card card-compact bg-base-100 shadow-xl">
          <p class="badge badge-info mx-3 mt-3 -mb-8 z-20">Tidak Update</p>
          <figure>
            <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" />
          </figure>
          <div class="card-body">
            <a href={d.site.url} target="_blank" class="link font-bold uppercase break-all">
              {d.site.url.replace(/http:|\/|.mojokertokota.go.id/g,'')}
            </a>
            <div>
              <p class="badge badge-info">{ dayjs(d.created_at).format('YYYY-MM-DD HH:mm')}</p>
            </div>
          </div>
        </div>
        {/each}
      </div>
    {/if}
  </section>

  <section id="changed" class="pt-16">    
    <div class="flex justify-between">
      <h1 class="text-xl font-bold uppercase">Aplikasi ada perubahan</h1>
      <Button on:click={()=>scrollTo('#main')}>
        <ArrowUpIcon size="16"></ArrowUpIcon>
      </Button>
    </div>
    
    {#if detail.loading}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
        <RefreshCwIcon size="30" class="animate-spin"/> 
        Loading...
      </div>      
    {:else if detail.changed.length == 0}
      <div class="hero bg-base-100 text-center mt-3 p-6 rounded-xl">
          Data Tidak ditemukan
      </div>
    {:else}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-3">
        {#each detail.changed as d}
        <div class="card card-compact bg-base-100 shadow-xl">
          <p class="badge badge-warning mx-3 mt-3 -mb-8 z-20">Aplikasi Update</p>
          <figure>
            <img src={d.screenshot.includes('.jpg')?d.screenshot: '/offline.png'} alt="Monitoring" />
          </figure>
          <div class="card-body">
            <a href={d.site.url} target="_blank" class="link font-bold uppercase break-all">
              {d.site.url.replace(/http:|\/|.mojokertokota.go.id/g,'')}
            </a>
            <div>
              <p class="badge badge-warning">{ dayjs(d.created_at).format('YYYY-MM-DD HH:mm')}</p>
            </div>
          </div>
        </div>
        {/each}
      </div>
    {/if}
  </section>
</div>
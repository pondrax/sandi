<script>
import { http } from "$lib/api";
import dayjs from "dayjs";
import { onMount } from "svelte";
import {Button, Input, Checkbox, MockupCode} from '$lib/ui';
import { ArrowUpIcon, RefreshCwIcon } from "svelte-feather-icons";
import Test from './test.svelte'

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
let form= {
  checkbox:[2],
  mask:'tes',
  mask2:'',
  currency:0
}
let stuck;

onMount(()=>{
  // getDataMonitoring();  

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
let val = 'val';
</script>

<div id="main" class="p-6">
  <!-- <Test on:mount={()=>alert('hi')}></Test> -->
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Wazuh</li>
      </ul>
    </div>
    <img src="/tools/wazuh.png" alt="monitoring" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Layanan Monitoring Aplikasi</h1>
    <p class="py-1">
      Monitoring aplikasi merupakan tools yang dapat digunakan memantau seluruh aplikasi untuk memastikan kinerjanya sudah sesuai standar, mengidentifikasi bugs dan masalah dalam aplikasi sebelum masalah tersebut berdampak pada end user atau masyarakat.
    </p>
  </section>
  
  <Test 
    label="Input Mask"
    bind:value={form.mask} 
    on:input={(ev)=>console.log(ev)} 
    mask={{mask:'__/__/__'}}
    small
    ></Test>
    
    <Test 
    label="Input Mask 2"
    bind:value={form.mask2} 
    mask={{mask:'##/##/##',char:'#'}}
    small
  ></Test>
    
  <Test 
    bind:value={form.currency} 
    on:input={()=>console.log('a')} 
    currency="id-ID"
    small
  ></Test>
    
  <MockupCode data={form} open tiny></MockupCode>
  <Checkbox bind:selected={form.checkbox} 
  on:change={()=>alert('c')}
  options={[
    {name:'1aja', value:1},
    {name:'2aja', value:2}
  ]}></Checkbox>

</div>
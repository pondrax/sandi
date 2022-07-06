<script>
import { onMount } from 'svelte';

let el;
export let options = {
  // chart: {
  //   type: 'bar'
  // },
  // series: [
  //   {
  //     name: 'sales',
  //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  //   }
  // ],
  // xaxis: {
  //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  // }
};

let chart;
onMount(async()=>{
  const { default:ApexCharts } = await import('apexcharts');
  
  chart = new ApexCharts(el, options);
  chart.render();
})
$: (options)=>{
  console.log(options)
  chart.updateOptions(options)
}
</script>

<div bind:this={el}></div>
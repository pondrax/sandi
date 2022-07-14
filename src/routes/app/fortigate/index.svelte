<script>
import {
  Button
} from '$lib/ui'

</script>

<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Fortigate</li>
      </ul>
    </div>
    <img src="/tools/fortigate.png" alt="monitoring" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Fortigate Firewall</h1>
    <p class="py-1">
      Monitoring aplikasi merupakan tools yang dapat digunakan memantau seluruh aplikasi untuk memastikan kinerjanya sudah sesuai standar, mengidentifikasi bugs dan masalah dalam aplikasi sebelum masalah tersebut berdampak pada end user atau masyarakat.
    </p>
    <span class="badge badge-error">*VPN Required</span>
    <div class="py-3">
      <Button href="https://192.168.39.2" blank primary>Fortigate 100E</Button>
      <Button href="https://192.168.59.5" blank primary>Fortigate 200F</Button>
    </div>

  </section>

  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- <iframe src="https://192.168.39.2/login" style="width:100%;height:20rem"></iframe> -->
</div>
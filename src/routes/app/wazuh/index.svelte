<script>
import { 
  Button
} from "$lib/ui";

</script>

<div id="main" class="p-6">
  <section class="py-3">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><a href="/app">Home</a></li> 
        <li>Wazuh</li>
      </ul>
    </div>
    <img src="/tools/wazuh.png" alt="monitoring" class="float-right w-24 mr-5">
    <h1 class="pb-2 text-xl font-bold uppercase">Wazuh</h1>
    <p class="py-1">
      Monitoring aplikasi merupakan tools yang dapat digunakan memantau seluruh aplikasi untuk memastikan kinerjanya sudah sesuai standar, mengidentifikasi bugs dan masalah dalam aplikasi sebelum masalah tersebut berdampak pada end user atau masyarakat.
    </p>
    <span class="badge badge-error">*VPN Required</span>
    <div class="py-3">
      <Button href="https://192.168.33.46:5443" blank primary>Buka App Wazuh</Button>
    </div>

  </section>
</div>
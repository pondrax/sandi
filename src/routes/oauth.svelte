<script>
import { browser } from '$app/env';

let user = {
  name: ''
};

if(browser){
  const urlParams = new URLSearchParams(location.search);
  localStorage.setItem('access_token', urlParams.get('access_token'));
  localStorage.setItem('access_user', urlParams.get('access_user'));
  user = JSON.parse(urlParams.get('access_user'))
  setTimeout(()=>{
    location.href = '/app/'
  },3000)
}
</script>

<div id="main" class="p-6">

  <h3>
    Selamat Datang {user.name}
  </h3>
  <br>
  <p>Anda akan dialihkan ke menu utama sesaat lagi</p>
</div>
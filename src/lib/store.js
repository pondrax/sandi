import { writable } from "svelte/store";
import { browser } from '$app/env';

export let user = writable({
  name: 'Pengguna Esign',
  nip: 'NIP',
  jabatan: 'Member',
  status: 'ISSUE',
  unit_kerja: 'Pemerintah Kota Mojokerto',
  avatar: '/logo.png',
});

export let token = writable(null);

export let notify = writable([]);
export let menu = writable('dokumen');



if(browser){
  if(localStorage.getItem('access_user')){
    user.set(JSON.parse(localStorage.getItem('access_user')) || {});
    token.set(localStorage.getItem('access_token'));
    user.subscribe((value) => localStorage.setItem('access_user', JSON.stringify(value)));
  }else{
    if(location.href.includes('/app/')){
      location.href = '/';
    }
  }
}
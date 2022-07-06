<script>
  import { http } from '$lib/api';
  import { user } from '$lib/store';
  import { Alert, Button, Input, Select,Textarea } from '$ui';

  let form = {
    name: $user.name,
    nik: $user.nik,
    nip: $user.nip,
    telepon: $user.telepon,
    jabatan: $user.jabatan,
    golongan: $user.golongan,
    unit_kerja: $user.unit_kerja
  }
  let golongan = [];
  let error = {}
  let message = ''

  http('get','/api/profile').then(response=>{
    golongan = response.golongan||[]
  })
  function saveData(){
    message = 'loading..'
    http('put', '/api/profile', form)
    .then(response=>{
      $user = response.data;
      error = {}
      message = response.message;
      setTimeout(()=>{
        message=''
      },3000)
    }).catch(err=>{
      if(err.response){
        error = err.response.data.errors;
        message = err.response.data.message;
        
      }
    })
  }
</script>

<div class="p-6">
  <h1 class="text-xl text-center font-bold py-2 border-b-2">PROFIL PENGGUNA</h1>
  <div class="flex flex-wrap gap-5">
    <div class="text-center md:w-1/4 p-4">
      <div class="avatar w-full">
        <div class="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={$user.avatar} alt="avatar"/>
        </div>
      </div>
      <br>
      <div>Status Sertifikat</div>
      <span class="badge badge-secondary text-lg">{ $user.status || 'NOT_REGISTERED' }</span> 
    </div>
    <div class="w-full md:w-2/3">
      <form on:submit|preventDefault={saveData}>
        <div class="grid md:grid-cols-2 gap-x-5 my-3">
          <Input bind:value={form.name} bind:error={error.name} label="Nama Lengkap" placeholder="Nama Lengkap"></Input>
          <Input bind:value={form.nik} bind:error={error.nik} label="NIK" placeholder="NIK"></Input>
          <Input bind:value={form.nip} bind:error={error.nip} label="NIP" placeholder="NIP"></Input>
          <Input bind:value={form.telepon} bind:error={error.telepon} label="Telepon" placeholder="Telepon"></Input>
          <Input bind:value={form.jabatan} bind:error={error.jabatan} label="Jabatan" placeholder="Jabatan"></Input>
          <Select bind:value={form.golongan} options={golongan} keyValue={"golongan"} let:opt={opt} label="Golongan" placeholder="Golongan">
            <div>
              {opt.golongan} - {opt.pangkat}
            </div>
          </Select>
          <div class="col-span-2">
            <Textarea bind:value={form.unit_kerja} bind:error={error.unit_kerja} label="Unit Kerja" placeholder="Unit Kerja"></Textarea>
          </div>
        </div>
        
        <div class="flex">
          <Button primary>Simpan</Button>
          <div class="text-info-content p-3">{message}</div>
        </div>
      </form>
    </div>
    
    {#if $user.status == 'ISSUE'}
      <div class="mt-16 w-full">

        <Alert info>
          <p>
            Selamat, sertifikat elektronik anda sudah aktif
            <span class="md:ml-5">

              <Button href="/app/dashboard" secondary small>Upload dan Tanda Tangani Dokumen</Button>
            </span>
          </p>
        </Alert>
      </div>
    {/if}
  </div>
</div>
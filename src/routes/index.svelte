<script>
import ENV from '$lib/variables';
import { ArrowDownIcon, ChevronDownIcon, FeatherIcon, KeyIcon } from 'svelte-feather-icons';
import { Button } from '$ui';
import { browser } from '$app/env';

let loginUrl = ENV.url + '/service/auth/google';

if(browser){
  if(localStorage.getItem('access_user')){
    loginUrl = ENV.url + '/app/';
  }
  // console.log(loginUrl)
}
</script>

<div id="home" class="font-sans bg-base-100 flex flex-col min-h-screen w-full">
	<div>

    <div class="hero min-h-screen bg-base-200 -mb-36">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-4xl font-bold">Persandian &</h1>
          <h1 class="text-4xl font-bold">Keamanan Informasi</h1>
          <p class="py-6">Melindungi aplikasi sehingga tersedia untuk diakses kapanpun dimanapun dengan validitas data yang terpercaya</p>
          <!-- <p class="py-6">Melindungi data, tersedia untuk diakses kapanpun dimanapun dan validitas data yang dapat dipercaya</p> -->
          <a href="#tentang" class="btn btn-primary">Pelajari Selengkapnya</a>
        </div>
      </div>
    </div>

		<div class="sticky -top-2 bg-base-200 p-2 z-30 -mb-20" style="border-radius:0 0 50% 50%">
			<div class="w-full md:max-w-xl md:mx-auto md:flex md:items-center md:justify-between">
        <div class="navbar justify-center">
          <!-- <div class="flex-1">
            <a href="/" class="btn btn-ghost normal-case text-xl">
              <img src="/favicon.png" alt="icon" class="h-8 mr-2" />
              {ENV.name}
            </a>
          </div> -->
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#tentang">Tentang</a></li>
              <li tabindex="0">
                <a href="#layanan">
                  Layanan
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100 shadow z-30">
                  <li><a href="#csirt">CSIRT</a></li>
                  <li><a href="#sertifikat-elektronik">Sertifikat Elektronik</a></li>
                  <li><a href="#audit">Audit</a></li>
                  <li><a href="#asesmen">Asesmen</a></li>
                </ul>
              </li>
              <li><a href="#faq">Faq</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </div>
        </div>
        
			</div>
		</div>

    <div id="tentang" class="bg-base-100">        
      <svg
        class="fill-current bg-base-200 text-base-100 hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="margin-bottom:-320px"
      >
        <path
          fill-opacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl">
          <div>
            <h1 class="text-3xl font-bold">Persandian</h1>
            <p class="py-3">Persandian sebagai upaya untuk mengamankan, melindungi dan menjamin orisinalitas sebuah berita atau dokumen pemerintah merupakan hal yang amat penting dalam era serba teknologi informasi saat ini</p>
            <!-- <p class=""><b>Tujuan</b>:</p>
              <ul class="list-disc ml-5">
                <li>
                  <div>Keterjagaan</div>
                  <div>Melindungi data dan informasi dari pihak yang tidak memiliki wewenang untuk mengetahui atau mengelolanya.</div>
              </li>
            </ul> -->
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#kami" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>

    <div id="kami" class=" bg-base-100">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl">
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
          <div>
            <h1 class="text-3xl font-bold">Keamanan Informasi</h1>
            <p class="py-3">Keamanan informasi adalah perlindungan terhadap segala jenis sumber daya informasi dari penyalahgunaan pihak yang tak berwenang mengelolanya</p>
            <p class=""><b>Tujuan</b>:</p>
            <ul class="list-disc">
              <li>
                <div>Keterjagaan</div>
                <div>Melindungi data dan informasi dari pihak yang tidak memiliki wewenang untuk mengetahui atau mengelolanya.</div>
              </li>
              <li>
                <div>Kesesuaian</div>
                <div>Memastikan bahwa informasi hanya digunakan oleh pihak yang berwenang untuk mengelolanya</div>
              </li>
              <li>
                <div>Integritas</div>
                <div>Memberikan gambaran yang tepat dan akurat berkaitan dengan sistem fisik yang ditampilkannya.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="text-center -mt-20">
        <a href="#csirt" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
      <svg
        class="fill-base-200 bg-base-100 text-base-100 hidden md:block -mt-32 -mb-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
    </div>

    <div id="csirt" class="bg-base-200">     
      <div class="hero min-h-screen">     
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl mt-10">
          <div>
            <h1 class="text-3xl font-bold">CSIRT</h1>
            <p class="py-3">Persandian sebagai upaya untuk mengamankan, melindungi dan menjamin orisinalitas sebuah berita atau dokumen pemerintah merupakan hal yang amat penting dalam era serba teknologi informasi saat ini</p>
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#se" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>
    
    <div id="se" class="bg-base-200">     
      <div class="hero min-h-screen">     
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl mt-10">
          <div>
            <h1 class="text-3xl font-bold">Sertifikat Elektronik</h1>
            <p class="py-3">Persandian sebagai upaya untuk mengamankan, melindungi dan menjamin orisinalitas sebuah berita atau dokumen pemerintah merupakan hal yang amat penting dalam era serba teknologi informasi saat ini</p>
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#audit" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>

    
    <div id="audit" class="bg-base-200">     
      <div class="hero min-h-screen">     
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl mt-10">
          <div>
            <h1 class="text-3xl font-bold">Audit</h1>
            <p class="py-3">Persandian sebagai upaya untuk mengamankan, melindungi dan menjamin orisinalitas sebuah berita atau dokumen pemerintah merupakan hal yang amat penting dalam era serba teknologi informasi saat ini</p>
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#asesmen" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>

    <div id="asesmen" class="bg-base-200">     
      <div class="hero min-h-screen">     
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl mt-10">
          <div>
            <h1 class="text-3xl font-bold">Asesmen</h1>
            <p class="py-3">Persandian sebagai upaya untuk mengamankan, melindungi dan menjamin orisinalitas sebuah berita atau dokumen pemerintah merupakan hal yang amat penting dalam era serba teknologi informasi saat ini</p>
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#faq" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>

    
    <div id="faq" class="bg-base-200">     
      <div class="hero min-h-screen">     
        <div class="hero-content flex-col lg:flex-row gap-10 max-w-5xl mt-10">
          <div>
            <h1 class="text-3xl font-bold">FAQ</h1>
            <p class="py-3">Pertanyaan yang sering diajukan</p>
          </div>
          <img src="/assets/images/kami.png" class="max-w-sm rounded-lg" alt="kami"/>
        </div>
      </div>
      <div class="text-center -mt-20">
        <a href="#csirt" class="btn btn-primary">
          <ChevronDownIcon size="15"></ChevronDownIcon>
        </a>
      </div>
    </div>

		<div class="bg-base-200 md:overflow-hidden">
			<div class="px-4 py-16">
				<div class="relative w-full md:mx-auto text-center">
					<h1 class="font-bold text-base-700 text-xl sm:text-2xl md:text-4xl leading-tight mb-6">
						Tools Audit Keamanan Informasi
					</h1>
					<h1 class="text-base-700 text-xl sm:text-2xl md:text-3xl leading-tight">
						Aplikasi ini berisikan beberapa tools untuk melakukan audit TIK seperti Indeks Keamanan Informasi dsb
					</h1>
          <div class="flex flex-wrap gap-5 justify-center my-10">
            <Button href={loginUrl} secondary gap>
              <FeatherIcon size="20"/>
              Mulai Asesmen
            </Button>
            <!-- <div class="divider"></div>
            <Button href="/verify" primary gap>
              <KeyIcon size="20"/>
              Verifikasi Dokumen
            </Button> -->
          </div>
					<!-- <p class="text-base-600 md:text-xl md:px-18">
						Pemerintah Kota Mojokerto
					</p> -->

					<!-- <div
						class="hidden md:block h-40 w-40 rounded-full bg-primary absolute right-0 bottom-0 -mb-64 -mr-48"
					/> -->

					<div
						class="hidden md:block h-5 w-5 rounded-full bg-secondary absolute top-0 right-0 -mr-40 mt-32"
					/>
				</div>
			</div>

			<svg
				class="fill-current bg-base-200 text-base-100 hidden md:block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill-opacity="1"
					d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
				/>
			</svg>
		</div>

		<div
			class="max-w-4xl mx-auto bg-base-100 shadow-lg relative z-20 hidden md:block"
			style="margin-top: -320px; border-radius: 20px;"
		>
			<div
				class="h-20 w-20 rounded-full bg-secondary absolute top-0 left-0 -ml-10 -mt-10"
				style="z-index: -1;"
			/>

			<div
				class="h-5 w-5 rounded-full bg-primary absolute top-0 left-0 -ml-32 mt-12"
				style="z-index: -1;"
			/>

			<div class="h-10 bg-base-100 rounded-t-lg border-b border-base-100" />
			<div class="flex" style="height: 550px;">
				<div class="w-32 bg-base-200 p-6 overflow-hidden rounded-bl-lg">
					<div class="text-center mb-10">
						<div class="w-10 h-10 rounded-full bg-primary mb-4 mx-auto" />
						<div class="h-2 rounded-full bg-primary" />
					</div>

					<div class="text-center mb-10">
						<div class="w-10 h-10 rounded-full bg-base-300 mb-4 mx-auto" />
						<div class="h-2 rounded-full bg-base-300" />
					</div>

					<div class="text-center mb-10">
						<div class="w-10 h-10 rounded-full bg-base-300 mb-4 mx-auto" />
						<div class="h-2 rounded-full bg-base-300" />
					</div>

					<div class="text-center">
						<div class="w-10 h-10 rounded-full bg-base-300 mb-4 mx-auto" />
						<div class="h-2 rounded-full bg-base-300" />
					</div>
				</div>
				<div class="flex-1 py-6 px-8">
					<div class="flex flex-wrap -mx-4">
						<div class="w-2/3 px-4">
							<div class="flex flex-wrap -mx-4 mb-10">
								<div class="w-1/4 px-4">
									<div class="text-center mb-10 bg-base-100 shadow rounded-lg p-6">
										<div class="w-10 h-10 rounded-full bg-accent mb-4 mx-auto" />
										<div class="h-2 rounded-full bg-base-200" />
									</div>
								</div>
								<div class="w-1/4 px-4">
									<div class="text-center mb-10 bg-base-100 shadow rounded-lg p-6">
										<div class="w-10 h-10 rounded-full bg-primary mb-4 mx-auto" />
										<div class="h-2 rounded-full bg-base-200" />
									</div>
								</div>
								<div class="w-1/4 px-4">
									<div class="text-center mb-10 bg-base-100 shadow rounded-lg p-6">
										<div class="w-10 h-10 rounded-full bg-secondary mb-4 mx-auto" />
										<div class="h-2 rounded-full bg-base-200" />
									</div>
								</div>
								<div class="w-1/4 px-4">
									<div class="text-center mb-10 bg-base-100 shadow rounded-lg p-6">
										<div class="w-10 h-10 rounded-full bg-primary mb-4 mx-auto" />
										<div class="h-2 rounded-full bg-base-200" />
									</div>
								</div>
							</div>

							<div class="h-32 percentage mb-10 pt-2">
								<div class="h-4 bg-base-200 w-64 mb-4 block" />
								<div class="h-4 bg-base-200 w-32 mb-4 block" />
								<div class="h-4 bg-base-200 w-40 mb-4 block" />
								<div class="h-4 bg-base-200 w-20 mb-4 block" />
							</div>

							<div class="w-full flex flex-wrap mb-6">
								<div class="w-1/2">
									<div class="flex items-center">
										<div class="h-8 w-8 rounded-full bg-base-200 mr-4" />
										<div>
											<div class="h-2 w-16 bg-base-200 mb-1 rounded-full" />
											<div class="h-2 w-10 bg-base-100 rounded-full" />
										</div>
									</div>
								</div>
								<div class="w-1/2">
									<div class="flex items-center">
										<div class="h-8 w-8 rounded-full bg-base-200 mr-4" />
										<div>
											<div class="h-2 w-16 bg-base-200 mb-1 rounded-full" />
											<div class="h-2 w-10 bg-base-100 rounded-full" />
										</div>
									</div>
								</div>
							</div>

							<div class="w-full flex flex-wrap">
								<div class="w-1/2">
									<div class="flex items-center">
										<div class="h-8 w-8 rounded-full bg-base-200 mr-4" />
										<div>
											<div class="h-2 w-16 bg-base-200 mb-1 rounded-full" />
											<div class="h-2 w-10 bg-base-100 rounded-full" />
										</div>
									</div>
								</div>
								<div class="w-1/2">
									<div class="flex items-center">
										<div class="h-8 w-8 rounded-full bg-base-200 mr-4" />
										<div>
											<div class="h-2 w-16 bg-base-200 mb-1 rounded-full" />
											<div class="h-2 w-10 bg-base-100 rounded-full" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="w-1/3 px-4">
							<div class="rounded-lg shadow-lg p-6">
								<div class="block w-12 h-2 rounded-full bg-base-200 mb-6" />

								<svg height="150" width="150" viewBox="0 0 20 20" class="mx-auto mb-12">
									<circle r="10" cx="10" cy="10" fill="#4299e1" />
									<circle
										r="5"
										cx="10"
										cy="10"
										fill="transparent"
										stroke="#2b6cb0"
										stroke-width="10"
										stroke-dasharray="11 31.4"
										transform="rotate(-90) translate(-20)"
									/>
								</svg>

								<div class="flex flex-wrap -mx-2 mb-10">
									<div class="w-1/3 px-2">
										<div class="block h-2 rounded-full bg-base-200" />
									</div>
									<div class="w-1/3 px-2">
										<div class="block h-2 rounded-full bg-base-200" />
									</div>
									<div class="w-1/3 px-2">
										<div class="block h-2 rounded-full bg-base-200" />
									</div>
								</div>
							</div>

							<div class="flex justify-between my-10">
								<div>
									<div class="h-2 w-10 bg-base-300 rounded-full mb-2" />
									<div class="h-2 w-16 bg-base-300 rounded-full mb-2" />
									<div class="h-2 w-8 bg-base-300 rounded-full" />
								</div>
								<div>
									<div class="ml-auto h-2 w-5 bg-base-300 rounded-full mb-2" />
									<div class="ml-auto h-2 w-6 bg-base-300 rounded-full mb-2" />
									<div class="ml-auto h-2 w-8 bg-base-300 rounded-full" />
								</div>
							</div>

							<div class="text-right flex justify-end">
								<div class="rounded-lg h-8 w-20 px-4 bg-base-200 mr-2" />
								<div class="rounded-lg h-8 w-20 px-4 bg-accent" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-4 md:hidden">
			<div
				class="-mt-10 max-w-4xl mx-auto bg-base-100 shadow-lg relative z-20"
				style="border-radius: 20px;"
			>
				<div class="h-10 bg-base-100 rounded-t-lg border-b border-base-100" />
				<div class="flex" style="height: 340px;">
					<div class="w-16 bg-base-200 px-2 py-6 overflow-hidden rounded-bl-lg">
						<div class="text-center mb-6">
							<div class="w-4 h-4 rounded-full bg-primary mb-2 mx-auto" />
							<div class="h-2 w-8 mx-auto rounded-full bg-primary" />
						</div>
						<div class="text-center mb-6">
							<div class="w-4 h-4 rounded-full bg-base-300 mb-2 mx-auto" />
							<div class="h-2 w-8 mx-auto rounded-full bg-base-300" />
						</div>
						<div class="text-center mb-6">
							<div class="w-4 h-4 rounded-full bg-base-300 mb-2 mx-auto" />
							<div class="h-2 w-8 mx-auto rounded-full bg-base-300" />
						</div>
						<div class="text-center">
							<div class="w-4 h-4 rounded-full bg-base-300 mb-2 mx-auto" />
							<div class="h-2 w-8 mx-auto rounded-full bg-base-300" />
						</div>
					</div>
					<div class="flex-1 py-6 px-4">
						<div class="flex flex-wrap -mx-2">
							<div class="w-1/3 px-2">
								<div class="text-center mb-6 bg-base-100 shadow rounded-lg px-2 py-3">
									<div class="w-4 h-4 rounded-full bg-accent-600 mb-2 mx-auto" />
									<div class="h-2 w-8 mx-auto rounded-full bg-base-200" />
								</div>
							</div>
							<div class="w-1/3 px-2">
								<div class="text-center mb-6 bg-base-100 shadow rounded-lg px-2 py-3">
									<div class="w-4 h-4 rounded-full bg-primary-600 mb-2 mx-auto" />
									<div class="h-2 w-8 mx-auto rounded-full bg-base-200" />
								</div>
							</div>
							<div class="w-1/3 px-2">
								<div class="text-center mb-6 bg-base-100 shadow rounded-lg px-2 py-3">
									<div class="w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto" />
									<div class="h-2 w-8 mx-auto rounded-full bg-base-200" />
								</div>
							</div>
						</div>

						<div class="flex flex-wrap -mx-2 mb-6">
							<div class="w-1/2 px-2">
								<div class="shadow h-24 p-2 rounded-lg">
									<div class="h-20 percentage pt-2">
										<div class="h-2 bg-base-200 w-24 mb-2 block" />
										<div class="h-2 bg-base-200 w-12 mb-2 block" />
										<div class="h-2 bg-base-200 w-20 mb-2 block" />
										<div class="h-2 bg-base-200 w-8 mb-2 block" />
									</div>
								</div>
							</div>
							<div class="w-1/2 px-2">
								<div class="rounded-lg shadow px-2 py-2">
									<div class="block w-8 h-2 rounded-full bg-base-200 mb-2" />

									<div class="mb-2">
										<svg height="50" width="50" viewBox="0 0 20 20" class="mx-auto">
											<circle r="10" cx="10" cy="10" fill="#ddd" />
											<circle
												r="5"
												cx="10"
												cy="10"
												fill="transparent"
												stroke="#eee"
												stroke-width="10"
												stroke-dasharray="11 31.4"
												transform="rotate(-90) translate(-20)"
											/>
										</svg>
									</div>

									<div class="flex flex-wrap -mx-2">
										<div class="w-1/3 px-2">
											<div class="block h-2 rounded-full bg-base-200" />
										</div>
										<div class="w-1/3 px-2">
											<div class="block h-2 rounded-full bg-base-200" />
										</div>
										<div class="w-1/3 px-2">
											<div class="block h-2 rounded-full bg-base-200" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="w-full flex flex-wrap mb-2">
							<div class="w-1/2">
								<div class="flex items-center">
									<div class="h-4 w-4 rounded-full bg-base-200 mr-4" />
									<div>
										<div class="h-2 w-10 bg-base-200 mb-1 rounded-full" />
										<div class="h-2 w-6 bg-base-100 rounded-full" />
									</div>
								</div>
							</div>
							<div class="w-1/2">
								<div class="flex items-center">
									<div class="h-4 w-4 rounded-full bg-base-200 mr-4" />
									<div>
										<div class="h-2 w-10 bg-base-200 mb-1 rounded-full" />
										<div class="h-2 w-6 bg-base-100 rounded-full" />
									</div>
								</div>
							</div>
						</div>

						<div class="w-full flex flex-wrap mb-6">
							<div class="w-1/2">
								<div class="flex items-center">
									<div class="h-4 w-4 rounded-full bg-base-200 mr-4" />
									<div>
										<div class="h-2 w-10 bg-base-200 mb-1 rounded-full" />
										<div class="h-2 w-6 bg-base-100 rounded-full" />
									</div>
								</div>
							</div>
							<div class="w-1/2">
								<div class="flex items-center">
									<div class="h-4 w-4 rounded-full bg-base-200 mr-4" />
									<div>
										<div class="h-2 w-10 bg-base-200 mb-1 rounded-full" />
										<div class="h-2 w-6 bg-base-100 rounded-full" />
									</div>
								</div>
							</div>
						</div>

						<div class="text-right flex justify-end">
							<div class="rounded-lg h-6 w-16 px-4 bg-base-200 mr-2" />
							<div class="rounded-lg h-6 w-16 px-4 bg-accent" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<p class="text-center p-4 text-base-600 mt-10">
			Copyright &copy; 2022
			<a class="border-b text-primary" href="https://diskominfo.mojokertokota.go.id" target="_blank"
				>Dinas Komunikasi dan Informatika Kota Mojokerto</a
			>.
		</p>
	</div>
</div>

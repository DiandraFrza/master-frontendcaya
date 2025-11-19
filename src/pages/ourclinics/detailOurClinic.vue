<template>
  <div>
    <!-- Hero Section (tetap sama) -->
    <div
      class="2xxl:min-h-125 lg:min-h-112.5 md:min-h-100 sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-[#07121E] before:opacity-70 after:w-full after:h-[calc(100%_-_80px)] after:absolute after:bottom-0 after:right-0 after:z-0 after:bg-[url(../../src/images/banner/bg.webp)] after:bg-no-repeat after:bg-position-[right_-13px_top] max-lg:after:hidden"
      style="background-image:url(images/banner/bnr1.webp);">
      <div class="container relative z-1 h-full table">
        <div class="table-cell 2xxl:h-125 lg:h-112.5 md:h-100 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
          <h1
            class="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp"
            data-wow-delay="0.2s" data-wow-duration="0.8s">Klinik Kami</h1>
          <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <ul class="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
              <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="index.html"
                  class="text-primary">Beranda</a></li>
              <li
                class="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
                Klinik Kami</li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
        <ul class="flex gap-7.5 [writing-mode:tb-rl]">
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.instagram.com/">Instagram</a>
          </li>
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.facebook.com/">Facebook</a>
          </li>
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://x.com/">twitter</a></li>
        </ul>
      </div>
      <div class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden">
      </div>
      <div
        class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden">
      </div>
      <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
            fill="var(--primary)" />
        </svg>
      </div>
      <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_102_123)">
            <path d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
              fill="var(--primary)" />
          </g>
          <defs>
            <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_123" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
            fill="var(--primary)" />
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <main class="page-content">
      <!-- Search Section -->
      <section class="py-12 bg-slate-50">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Temukan Klinik Terdekat</h2>
            <p class="text-slate-600 text-lg">Cari klinik Caya terdekat di kota Anda</p>
          </div>

          <div class="max-w-2xl mx-auto mb-12">
            <div class="relative">
              <input v-model="query" type="text" placeholder="Cari berdasarkan nama klinik, alamat, atau kota..."
                class="w-full px-6 py-4 pl-12 rounded-2xl border border-slate-300 focus:border-[#F46700] focus:ring-2 focus:ring-[#F46700]/20 transition-all duration-300 bg-white shadow-sm">
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Clinic Cards -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="branch in filtered" :key="branch.id"
              class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full">

              <!-- Header dengan Gradient -->
              <div class="bg-linear-to-r from-[#FF7D14] to-[#ff562c] p-6 text-white">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold">{{ branch.name }}</h3>
                  <div v-if="branch.id === 'depok'"
                    class="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Pusat
                  </div>
                </div>
                <p class="text-white/90 text-sm">{{ branch.address }}</p>
              </div>

              <!-- Content -->
              <div class="p-6 flex-1 flex flex-col">
                <!-- Jam Operasional -->
                <div class="flex items-start gap-3 mb-4">
                  <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-slate-800 mb-1">Jam Operasional</p>
                    <p class="text-sm text-slate-600 leading-tight">{{ branch.hours }}</p>
                  </div>
                </div>

                <!-- Telepon -->
                <div class="flex items-start gap-3 mb-6">
                  <div class="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-slate-800 mb-1">Telepon</p>
                    <a :href="`tel:${branch.phone}`"
                      class="text-sm text-slate-600 hover:text-[#F46700] transition-colors block">
                      {{ branch.phone }}
                    </a>
                  </div>
                </div>

                <!-- Action Buttons - Tetap di bawah -->
                <div class="mt-auto pt-4">
                  <div class="flex gap-3">
                    <a :href="branch.maps" target="_blank"
                      class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center py-2.5 px-4 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 min-h-[42px]">
                      <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span class="truncate">Lihat Peta</span>
                    </a>
                    <a :href="waUrl(branch)" target="_blank"
                      class="flex-1 bg-linear-to-r from-[#FF7D14] to-[#ff562c] text-white text-center py-2.5 px-4 rounded-lg hover:scale-[1.02] transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 min-h-[42px]">
                      <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z" />
                      </svg>
                      <span class="truncate">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filtered.length === 0" class="text-center py-12">
            <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Klinik tidak ditemukan</h3>
            <p class="text-slate-600">Coba gunakan kata kunci lain atau lihat semua klinik kami</p>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Peta Lokasi Klinik</h2>
            <p class="text-slate-600">Temukan lokasi klinik Caya di seluruh Indonesia</p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="h-96 md:h-120 rounded-2xl overflow-hidden">
              <iframe class="w-full h-full" src="https://www.google.com/maps/d/embed?mid=1YOUR_MAP_ID&hl=en&ehbc=2E312F"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="p-6 bg-slate-50 border-t border-slate-200">
              <div class="flex flex-wrap gap-4 justify-center">
                <div v-for="branch in branches" :key="branch.id" class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full" :class="{
                    'bg-[#F46700]': branch.id === 'depok',
                    'bg-blue-500': branch.id === 'buli',
                    'bg-green-500': branch.id === 'jakarta',
                    'bg-purple-500': branch.id === 'surabaya',
                    'bg-orange-500': branch.id === 'tanjungpinang'
                  }"></div>
                  <span class="text-sm text-slate-700">{{ branch.name.split('—')[1].trim() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-linear-to-r from-[#FF7D14] to-[#ff562c]">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Butuh Informasi Lebih Lanjut?</h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda memilih klinik terdekat dan menjawab pertanyaan seputar layanan
            MCU
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="`tel:${sitePhone}`"
              class="bg-white text-[#F46700] px-8 py-4 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                </path>
              </svg>
              Hubungi Kami
            </a>
            <a :href="`https://wa.me/${siteWA.replace(/\D/g, '')}`" target="_blank"
              class="bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const sitePhone = '+622177829192';
const siteWA = '081290007336';
const branches = ref([
  {
    id: 'depok',
    name: 'Caya Lab — Depok (Klinik Pusat)',
    address: 'Jl. KH. M. Yusuf Raya No.13, Sukmajaya, Depok',
    hours: 'Sen–Sab 08:00–17:00 • Minggu 09:00–13:00',
    phone: '+62 21 7782 9192',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+KH.+M.+Yusuf+Raya+No.13+Sukmajaya+Depok',
  },
  {
    id: 'buli',
    name: 'Caya Lab — Buli',
    address: 'Jl. Raya Buli No.45, Buli City',
    hours: 'Sen–Sab 08:30–16:30',
    phone: '+62 21 7782 9193',
    maps: 'https://www.google.com/maps/search/?api=1&query=Buli',
  },
  {
    id: 'jakarta',
    name: 'Caya Lab — Jakarta',
    address: 'Jl. Sudirman Kav. 88, Jakarta Selatan',
    hours: 'Sen–Jum 08:00–18:00 • Sab 08:00–13:00',
    phone: '+62 21 7782 9194',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Sudirman+Kav.+88+Jakarta',
  },
  {
    id: 'surabaya',
    name: 'Caya Lab — Surabaya',
    address: 'Jl. Raya Darmo No.12, Surabaya',
    hours: 'Sen–Sab 09:00–17:00',
    phone: '+62 31 7782 9195',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Darmo+No.12+Surabaya',
  },
  {
    id: 'tanjungpinang',
    name: 'Caya Lab — Tanjung Pinang',
    address: 'Jl. Imam Bonjol No.7, Tanjung Pinang',
    hours: 'Sen–Sab 08:00–15:00',
    phone: '+62 771 7782 9196',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Imam+Bonjol+Tanjung+Pinang',
  },
]);

const query = ref('');
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return branches.value;
  return branches.value.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q)
  );
});

function waUrl(branch) {
  const text = encodeURIComponent(
    `Halo Caya, saya mau tanya layanan MCU di cabang ${branch.name} — alamat: ${branch.address}`
  );
  return `https://wa.me/${siteWA.replace(/\D/g, '')}?text=${text}`;
}
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
</style>
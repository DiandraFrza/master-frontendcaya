<!-- @format -->

<template>
  <footer class="bg-slate-50">
    <!-- Header Section -->
    <div class="container mx-auto px-4 max-w-6xl pt-12 pb-8">
      <!-- <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Konsultasikan Kebutuhan Kesehatan Anda</h2>
        <p class="text-slate-600 text-base">Menjaga kesehatan sebagai Amanah dengan Pelayanan sepenuh Hati.</p>
      </div> -->

      <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12 px-4">
        <div class="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-6">
          <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg lg:text-right text-center font-bold text-slate-900 mb-1">Salam CAYA</h3>
            <p class="text-sm lg:text-right text-slate-700">021-77829190 / +62812-9000-7336</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:text-right text-center">
          <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shrink-0 shadow-lg absolute md:static">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Jam Operasional</h3>
            <p class="text-sm text-slate-700 mb-1">Senin - Jum'at : 06:00 - 21:00</p>
            <p class="text-sm text-slate-700 mb-2">Sabtu : 06:00 - 20:00</p>
            <p class="text-xs text-slate-600 mt-2">Libur pada hari Minggu dan Peringatan Hari Besar Indonesia (PHBi)</p>
          </div>
        </div>
      </div>
      <!-- Footer Links Section -->
      <div class="grid grid-cols-3 md:grid-cols-3 gap-12 items-center mb-16">
        <!-- Logo -->
        <div class="flex justify-center md:justify-center">
          <img src="/assets/images/Logo-CMC.png" alt="CAYA Logo" class="h-18 object-contain" />
        </div>

        <!-- Tentang Caya -->
        <div>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/tentang-caya" class="font-reguler text-slate-600 hover:text-orange-600"> Tentang Caya </RouterLink>
            </li>

            <li>
              <RouterLink to="/kebijakan-privasi" class="font-reguler text-slate-600 hover:text-orange-600"> Kebijakan Privasi </RouterLink>
            </li>

            <li>
              <RouterLink to="/layanan" class="font-reguler text-slate-600 hover:text-orange-600"> Layanan Kami </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Berita & Blog -->
        <div>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/blog" class="font-reguler text-slate-600 hover:text-orange-600"> Berita & Blog </RouterLink>
            </li>

            <li>
              <RouterLink to="/feature-development" class="font-reguler text-slate-600 hover:text-orange-600"> Karir </RouterLink>
            </li>

            <li>
              <RouterLink to="/lokasi" class="font-reguler text-slate-600 hover:text-orange-600"> Lokasi </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>

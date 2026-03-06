<!-- @format -->
<script setup>
import { ref } from "vue";

const testimonials = ref([
  {
    id: 1,
    name: "Ibu Rina A.",
    role: "Local Guide",
    date: "1 minggu yang lalu",
    quote: "Pelayanannya ramah dan proses pemeriksaannya cepat. Hasilnya juga dijelaskan dengan bahasa yang mudah dipahami. Tempat bersih dan nyaman. Highly recommended klinik lab di sini!",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Bapak Andi S.",
    role: "2 ulasan",
    date: "3 minggu yang lalu",
    quote: "Tim Caya sangat membantu dalam pelaksanaan MCU karyawan. Laporan rapi dan sesuai kebutuhan HR. Dokter yang in-charge juga sangat informatif dan responsif. Puas banget sama layanannya.",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Ibu Siti M.",
    role: "5 ulasan",
    date: "1 bulan yang lalu",
    quote: "Home service sangat membantu buat ibu saya yang sudah lansia. Petugas datang tepat waktu, pinter ambil darahnya (gak sakit), dan tetap profesional dengan APD lengkap. Makasih Caya!",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmad Rizky",
    role: "1 ulasan",
    date: "2 bulan yang lalu",
    quote: "Fasilitas lengkap dan hasil tes bisa langsung diakses online, jadi gak perlu bolak-balik. Harga juga sangat bersaing dengan lab lain. Bakal jadi langganan medical check up tahunan keluarga.",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 4,
  },
]);
</script>

<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Section Header & Google Review Summary -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div class="max-w-xl">
          <div class="inline-flex items-center gap-2 bg-orange-100/80 text-orange-700 px-4 py-2 rounded-full mb-6 border border-orange-200">
            <i class="fa-solid fa-heart text-orange-500"></i>
            <span class="font-semibold text-sm">Pengalaman Nyata Pasien</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Ribuan Keluarga Mempercayai <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Caya Lab</span>
          </h2>
          <p class="text-gray-600 text-lg">Konsistensi dalam memberikan layanan kesehatan yang akurat, cepat, dan ramah adalah komitmen utama kami.</p>
        </div>

        <!-- Google Aggregate Rating Card -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 w-full md:w-auto shrink-0 flex items-center gap-6">
          <div class="text-center">
            <div class="text-5xl font-black text-gray-900 mb-2">4.9</div>
            <div class="flex gap-1 text-amber-400 text-lg justify-center mb-1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div class="text-sm text-gray-500 font-medium">Dari 200+ ulasan</div>
          </div>
          <div class="h-16 w-px bg-gray-200"></div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="font-bold text-gray-800 text-lg">Ulasan Google</span>
              <!-- Google "G" Logo Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            </div>
            <a href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-1">
              Tulis ulasan <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article v-for="item in testimonials" :key="item.id" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
          <!-- Profile Header -->
          <div class="flex items-center gap-3 mb-4">
            <img :src="item.avatar" :alt="item.name" class="w-10 h-10 rounded-full object-cover" />
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 text-sm truncate">{{ item.name }}</h4>
              <p class="text-xs text-gray-500 truncate">{{ item.role }}</p>
            </div>
            <!-- Smaller Google Icon on Card -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px" class="opacity-50"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
          </div>

          <!-- Star Rating & Date -->
          <div class="flex justify-between items-center mb-3">
            <div class="flex gap-0.5 text-amber-400 text-[10px]">
              <i v-for="n in 5" :key="n" :class="['fa-solid', n <= item.rating ? 'fa-star' : 'fa-star text-gray-300']"></i>
            </div>
            <span class="text-[11px] text-gray-500">{{ item.date }}</span>
          </div>

          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed flex-1 line-clamp-6 group-hover:line-clamp-none transition-all">
            {{ item.quote }}
          </p>
        </article>
      </div>

      <!-- Action Bottom -->
      <div class="mt-12 text-center">
        <a href="https://www.google.com/maps/search/Caya+Laboratorium+Klinik" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 font-bold text-gray-700 bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-gray-50 hover:text-blue-600 transition-colors">
          Lihat semua ulasan di Google Maps
        </a>
      </div>
    </div>
  </section>
</template>


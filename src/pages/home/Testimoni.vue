<!-- @format -->
<script setup>
import { ref } from "vue";

const testimonials = ref([
  {
    id: 1,
    name: "Ibu Rina A.",
    role: "Pasien MCU Personal",
    quote: "Pelayanannya ramah dan proses pemeriksaannya cepat. Hasilnya juga dijelaskan dengan bahasa yang mudah dipahami.",
    avatar: "/assets/avatar/middle/img1.webp",
  },
  {
    id: 2,
    name: "Bapak Andi S.",
    role: "HR Manager Perusahaan",
    quote: "Tim Caya sangat membantu dalam pelaksanaan MCU karyawan. Laporan rapi dan sesuai kebutuhan HR.",
    avatar: "/assets/avatar/middle/img1.webp",
  },
  {
    id: 3,
    name: "Ibu Siti M.",
    role: "Pasien Home Service",
    quote: "Home service sangat membantu. Petugas datang tepat waktu dan tetap profesional.",
    avatar: "/assets/avatar/middle/img1.webp",
  },
]);
</script>

<template>
  <section class="py-20 bg-[#ecf5fb]">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">Apa Kata Mereka</h3>
        <p class="text-gray-600 max-w-2xl mx-auto">Pengalaman pasien dan mitra yang telah menggunakan layanan Caya.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in testimonials" :key="item.id" class="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
          <!-- Quote -->
          <p class="text-gray-700 leading-relaxed mb-6 flex-1">“{{ item.quote }}”</p>

          <!-- Profile -->
          <div class="flex items-center gap-4 mt-auto">
            <img :src="item.avatar" :alt="item.name" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <p class="font-semibold text-gray-900 text-sm">
                {{ item.name }}
              </p>
              <p class="text-gray-500 text-xs">
                {{ item.role }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

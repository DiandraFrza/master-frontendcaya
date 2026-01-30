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
    rating: 5,
    service: "Medical Check Up",
    icon: "fa-star",
  },
  {
    id: 2,
    name: "Bapak Andi S.",
    role: "HR Manager Perusahaan",
    quote: "Tim Caya sangat membantu dalam pelaksanaan MCU karyawan. Laporan rapi dan sesuai kebutuhan HR.",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 5,
    service: "K3 Perusahaan",
    icon: "fa-building",
  },
  {
    id: 3,
    name: "Ibu Siti M.",
    role: "Pasien Home Service",
    quote: "Home service sangat membantu. Petugas datang tepat waktu dan tetap profesional.",
    avatar: "/assets/avatar/middle/img1.webp",
    rating: 5,
    service: "Home Service",
    icon: "fa-house-medical",
  },
]);
</script>

<template>
  <section class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center">
        <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
          <i class="fa-solid fa-heart"></i>
          <span class="font-semibold text-sm">Pengalaman Nyata</span>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in testimonials" :key="item.id" class="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:border-[#ff562c]/20 flex flex-col">
          <!-- Star Rating -->
          <div class="flex items-center gap-1 mb-4">
            <div v-for="n in item.rating" :key="n" class="text-[#ff562c]">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>

          <!-- Quote -->
          <p class="text-gray-700 leading-relaxed mb-6 flex-1 italic">"{{ item.quote }}"</p>

          <!-- Service Badge -->
          <div class="mb-4 inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full w-fit text-xs font-semibold">
            <i :class="`fa-solid ${item.icon}`"></i>
            {{ item.service }}
          </div>

          <!-- Profile -->
          <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
            <img :src="item.avatar" :alt="item.name" class="w-14 h-14 rounded-full object-cover border-2 border-[#ff562c]" />
            <div>
              <p class="font-bold text-gray-900">
                {{ item.name }}
              </p>
              <p class="text-gray-500 text-xs">
                {{ item.role }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6 text-lg">Ribuan pelanggan telah mempercayai Caya untuk kesehatan mereka</p>
        <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff562c] to-[#ff7d2e] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
          <i class="fa-brands fa-whatsapp"></i>
          Jadilah Bagian dari Kami
        </a>
      </div>
    </div>
  </section>
</template>

<!-- @format -->
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const services = [
  { label: "Kebijakan Privasi", to: "/kebijakan-privasi" },
  { label: "Komitmen Perlindungan Data", to: "/komitmen-perlindungan-data" },
  { label: "Daftar Hukum", to: "/daftar-hukum" },
  { label: "I. Tujuan dan Ruang Lingkup Kebijakan Privasi", to: "/tujuan-ruang-lingkup" },
  { label: "II. Kebijakan Privasi Layanan Kesehatan CAYA", to: "/kebijakan-privasi-layanan-kesehatan" },
  { label: "III. Kebijakan Privasi Website CAYA", to: "/kebijakan-privasi-website" },
  { label: "IV. Kebijakan Privasi Contact Center CAYA", to: "/kebijakan-privasi-contact-center" },
  { label: "V. Keamanan Data", to: "/keamanan-data" },
  { label: "VI. Perubahan Kebijakan Privasi", to: "/perubahan-kebijakan-privasi" },
  { label: "VII. Hukum yang Berlaku", to: "/hukum-yang-berlaku" },
  { label: "VIII. Narahubung", to: "/narahubung" },
];
</script>

<template>
  <aside class="lg:col-span-1">
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
      <!-- Menu -->
      <nav class="space-y-1">
        <router-link v-for="item in services" :key="item.to" :to="item.to" class="flex items-center gap-2 text-sm p-2 rounded-sm transition" :class="route.path === item.to ? 'bg-[#F94327] text-black font-bold' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'">
          <span>{{ item.label }}</span>
        </router-link>
      </nav>
    </div>
  </aside>
</template>
<style scoped></style>

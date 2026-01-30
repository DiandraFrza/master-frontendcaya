<!-- @format -->

<!-- components/services/ServiceSidebar.vue -->
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const services = [
  { label: "Laboratorium Klinik", to: "/services/lab", icon: "fa-flask-vial" },
  { label: "Radiologi & Penunjang", to: "/services/radiologi", icon: "fa-x-ray" },
  { label: "Medical Check Up", to: "/services/mcu", icon: "fa-stethoscope" },
  { label: "Screening Penyakit", to: "/services/screening", icon: "fa-heart-pulse" },
  { label: "Konsultasi Dokter", to: "/services/konsultasi", icon: "fa-user-doctor" },
  { label: "Elektromedis", to: "/services/elektromedis", icon: "fa-heartbeat" },
  { label: "Layanan Korporasi & K3", to: "/services/korporasi", icon: "fa-building" },
  { label: "Home Service", to: "/services/home-service", icon: "fa-house-medical" },
];
</script>

<template>
  <aside class="lg:col-span-1">
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
      <h3 class="font-bold text-gray-900 mb-4">Menu Layanan</h3>

      <!-- Menu -->
      <nav class="space-y-1">
        <router-link v-for="item in services" :key="item.to" :to="item.to" class="flex items-center gap-2 text-sm p-2 rounded-lg transition" :class="route.path.startsWith(item.to) ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'">
          <i :class="`fa-solid ${item.icon}`"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </nav>

      <!-- CTA -->
      <div class="mt-8 pt-6 border-t border-gray-200">
        <div class="bg-orange-50 rounded-lg p-4">
          <p class="text-xs text-orange-900 mb-2">Bingung memilih layanan?</p>
          <a href="https://wa.me/081290094900" class="w-full px-3 py-2 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium text-sm transition flex items-center justify-center gap-2">
            <i class="fa-brands fa-whatsapp"></i>
            Konsultasi WhatsApp
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped></style>

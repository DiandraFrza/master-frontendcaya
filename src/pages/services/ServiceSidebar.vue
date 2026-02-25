<!-- @format -->

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const services = [
  { label: "Laboratorium", to: "/services/lab", icon: "fa-flask-vial", color: "orange" },
  { label: "Radiologi", to: "/services/radiologi", icon: "fa-x-ray", color: "orange" },
  { label: "Elektromedis", to: "/services/elektromedis", icon: "fa-heart-pulse", color: "orange" },
  { label: "Konsultasi Dokter", to: "/services/konsultasi", icon: "fa-user-doctor", color: "orange" },
  { label: "Medical Checkup", to: "/services/mcu", icon: "fa-heartbeat", color: "orange" },
  { label: "Home Service", to: "/services/home-service", icon: "fa-truck-medical", color: "orange" },
  { label: "Screening Penyakit", to: "/services/screening", icon: "fa-stethoscope", color: "orange" },
  { label: "Layanan Korporat", to: "/services/korporat", icon: "fa-building-user", color: "orange" },
];

const getItemClasses = (item) => {
  const isActive = route.path.startsWith(item.to);
  const colorMap = {
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
    orange: isActive ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50 hover:text-orange-600",
  };

  return ["flex items-center gap-3 text-sm p-3 rounded-xl transition-all duration-200", isActive ? "font-semibold shadow-sm" : "text-gray-600", colorMap[item.color]];
};
</script>

<template>
  <aside class="lg:col-span-1">
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
      <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <i class="fa-solid fa-grid-2 text-orange-500"></i>
        Menu Layanan
      </h3>

      <!-- Menu -->
      <nav class="space-y-1">
        <router-link v-for="item in services" :key="item.to" :to="item.to" :class="getItemClasses(item)">
          <div :class="['w-8 h-8 rounded-lg flex items-center justify-center transition-colors', route.path.startsWith(item.to) ? 'bg-white shadow-sm' : 'bg-gray-100']">
            <i :class="`fa-solid ${item.icon}`"></i>
          </div>
          <span>{{ item.label }}</span>
          <i v-if="route.path.startsWith(item.to)" class="fa-solid fa-chevron-right ml-auto text-xs"></i>
        </router-link>
      </nav>

      <!-- Quick Info -->
      <div class="mt-6 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
        <div class="flex items-start gap-2">
          <i class="fa-solid fa-info-circle text-orange-500 mt-0.5"></i>
          <div class="text-xs text-orange-800">
            <p class="font-semibold mb-1">Butuh Bantuan?</p>
            <p class="opacity-80">Tim kami siap membantu memilih layanan yang tepat</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-4">
        <a href="https://wa.me/081290094900" class="w-full px-4 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2">
          <i class="fa-brands fa-whatsapp text-lg"></i>
          Konsultasi Gratis
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  position: relative;
}

.router-link-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 20px;
  background: linear-gradient(to bottom, #f97316, #ea580c);
  border-radius: 0 2px 2px 0;
}
</style>

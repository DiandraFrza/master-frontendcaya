<!-- @format -->
<!-- Halaman Layanan Korporat - Baru -->

<script setup>
import { ref, computed } from "vue";
import { layananKorporat } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Layanan Korporat | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Solusi kesehatan terintegrasi untuk perusahaan dan institusi. MCU onsite dengan layanan profesional.",
    },
  ],
});

const selectedCategory = ref("mcuOnsite");

// Filter hanya MCU Onsite (hapus wellness program & kerja sama)
const korporatSubcategories = computed(() => {
  const { mcuOnsite } = layananKorporat.subcategories;
  return { mcuOnsite };
});
const currentCategory = computed(() => korporatSubcategories.value[selectedCategory.value]);

const filteredItems = computed(() => currentCategory.value.items);

// const stats = [
//   { value: "50+", label: "Perusahaan Partner" },
//   { value: "MCU", label: "Onsite" },
//   { value: "Custom", label: "Program" },
//   { value: "Dedicated", label: "Support" },
// ];

const benefits = [
  {
    icon: "fa-building",
    title: "MCU Onsite",
    desc: "Pemeriksaan kesehatan langsung di lokasi perusahaan Anda",
  },
  {
    icon: "fa-chart-line",
    title: "Health Dashboard",
    desc: "Monitoring kesehatan karyawan secara real-time",
  },
  {
    icon: "fa-user-tie",
    title: "Account Manager",
    desc: "Dedicated support untuk kebutuhan perusahaan Anda",
  },
  {
    icon: "fa-file-contract",
    title: "Custom Package",
    desc: "Paket yang disesuaikan dengan kebutuhan dan budget",
  },
];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-building-user', text: 'Layanan Korporat' }"
        :title="{ main: 'Solusi Kesehatan', highlight: ' untuk Perusahaan Anda' }"
        description="Program kesehatan terintegrasi untuk perusahaan dan institusi. Dari MCU onsite hingga wellness program, kami siap mendukung kesehatan karyawan Anda."
        :metaItems="[
          { icon: 'fa-building', text: 'MCU Onsite' },
          { icon: 'fa-chart-line', text: 'Wellness Program' },
          { icon: 'fa-handshake', text: 'Kerja Sama' },
        ]"
        gradientFrom="from-orange-500"
        gradientVia="via-orange-600"
        gradientTo="to-orange-700"
      />

      <!-- Stats Bar -->
      <!-- <div class="bg-white border-b border-gray-100 py-6">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">{{ stat.value }}</div>
              <div class="text-xs md:text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Main Content -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-4 gap-6">
            <!-- Sidebar -->
            <ServiceSidebar />

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 mb-6 transition-colors">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>

              <!-- Benefits Cards -->
              <div class="grid sm:grid-cols-2 gap-4 mb-8">
                <div v-for="(benefit, index) in benefits" :key="index" class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group">
                  <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i :class="`fa-solid ${benefit.icon} text-orange-600 text-xl`"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h3>
                  <p class="text-sm text-gray-500">{{ benefit.desc }}</p>
                </div>
              </div>

              <!-- Category Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div>
                  <h2 class="text-lg font-bold text-gray-900">{{ currentCategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentCategory.description }}</p>
                </div>
              </div>

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredItems.length }}</span> layanan
                </p>
              </div>

              <!-- Items Grid -->
              <div v-if="filteredItems.length > 0" class="space-y-4 mb-8">
                <div v-for="item in filteredItems" :key="item.name" class="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 group hover:-translate-y-0.5">
                  <div class="flex flex-col md:flex-row md:items-center gap-4">
                    <!-- Icon -->
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i :class="`fa-solid ${item.icon} text-orange-600 text-xl`"></i>
                    </div>

                    <!-- Content -->
                    <div class="flex-1">
                      <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h4 class="font-bold text-gray-900 text-lg">{{ item.name }}</h4>
                          <p class="text-sm text-gray-500 mt-1">{{ item.description }}</p>
                        </div>
                      </div>

                      <!-- Min Participants Badge -->
                      <!-- <div v-if="item.minParticipants" class="mt-3">
                        <span class="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                          <i class="fa-solid fa-users"></i>
                          Minimal {{ item.minParticipants }} peserta
                        </span>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>



              <!-- CTA Box -->
              <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 class="text-xl font-bold mb-2">Tertarik dengan Layanan Korporat?</h3>
                    <p class="text-orange-100 text-sm">Hubungi tim kami untuk penawaran khusus sesuai kebutuhan perusahaan Anda.</p>
                  </div>
                  <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all hover:scale-105 flex-shrink-0">
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    Dapatkan Penawaran
                  </a>
                </div>
              </div>

              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Mengapa Memilih Layanan Korporat Caya?
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Pengalaman menangani MCU untuk puluhan perusahaan</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Tim medis profesional dan berpengalaman</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Laporan lengkap dengan analisis statistik kesehatan karyawan</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Fleksibel - dapat disesuaikan dengan jadwal perusahaan</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Harga kompetitif dengan kualitas terjamin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page-content {
  min-height: 100vh;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>

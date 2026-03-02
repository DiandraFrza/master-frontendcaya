<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { medicalCheckupPackages } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import { useHead } from "@vueuse/head";
import ServicesHero from "@/components/ServicesHero.vue";

const selectedSubcategory = ref("paketPersonal");

const currentSubcategory = computed(() => medicalCheckupPackages.subcategories[selectedSubcategory.value]);

const filteredPackages = computed(() => {
  return currentSubcategory.value.items;
});

const waLink = "https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU";

const benefits = [
  {
    icon: "fa-clipboard-check",
    title: "Pemeriksaan Menyeluruh",
    desc: "Medical check up komprehensif untuk semua aspek kesehatan",
  },
  {
    icon: "fa-user-doctor",
    title: "Dokter Profesional",
    desc: "Tim dokter berpengalaman dan tersertifikasi",
  },
  {
    icon: "fa-file-export",
    title: "Laporan Lengkap",
    desc: "Laporan hasil lengkap dengan rekomendasi kesehatan",
  },
  {
    icon: "fa-clock",
    title: "Hasil Cepat",
    desc: "Hasil pemeriksaan dalam waktu singkat",
  },
];

useHead({
  title: "Medical Check Up | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Medical Check Up Caya Klinik untuk personal dan perusahaan, tersedia paket Silver, Platinum, dan K3.",
    },
  ],
});

// Helper untuk mendapatkan nama yang lebih pendek
const getDisplayName = (pkg) => {
  if (pkg.shortName) return pkg.shortName;
  // Untuk K3, hapus prefix "MCU "
  if (pkg.name.startsWith("MCU ")) {
    return pkg.name.replace("MCU ", "");
  }
  return pkg.name;
};
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-flask-vial', text: 'Medical Check Up' }"
        :title="{ main: 'Komprehensif & Profesional', highlight: 'Medical Check Up' }"
        description="Medical Check Up di Caya dirancang untuk membantu memantau kondisi kesehatan individu maupun karyawan perusahaan melalui pemeriksaan yang terstandar dan profesional."
        :metaItems="[
          { icon: 'fa-clock', text: 'Pemeriksaan menyeluruh' },
          { icon: 'fa-user-doctor', text: 'Dokter profesional' },
          { icon: 'fa-file-waveform', text: 'Laporan lengkap' },
        ]"
        gradientFrom="from-orange-500"
        gradientVia="via-orange-600"
        gradientTo="to-orange-700"
      />

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
              <!-- Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Subcategory Description -->
                <div class="mb-4 pb-4 border-b border-gray-100">
                  <h2 class="text-lg font-bold text-gray-900">{{ currentSubcategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentSubcategory.description }}</p>
                </div>
                <!-- Filter button -->
                <ServiceFilter v-model="selectedSubcategory" :options="medicalCheckupPackages.subcategories" />
              </div>

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredPackages.length }}</span> paket
                </p>
              </div>

              <!-- Packages Grid -->
              <div class="grid sm:grid-cols-2 gap-4 mb-8">
                <div v-for="(benefit, index) in benefits" :key="index" class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group">
                  <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i :class="`fa-solid ${benefit.icon} text-orange-600 text-xl`"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h3>
                  <p class="text-sm text-gray-500">{{ benefit.desc }}</p>
                </div>
              </div>

              <!-- Search -->
              <!-- <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div class="mb-4 pb-4 border-b border-gray-100">
                  <h2 class="text-lg font-bold text-gray-900">{{ currentCategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentCategory.description }}</p>
                </div>

                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Cari layanan korporat..." class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                    <i class="fa-solid fa-times-circle"></i>
                  </button>
                </div>
              </div> -->

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredPackages.length }}</span> layanan
                </p>
              </div>

              <!-- Items Grid -->
              <div v-if="filteredPackages.length > 0" class="space-y-6 mb-8">
                <div v-for="item in filteredPackages" :key="item.name" class="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 group hover:-translate-y-0.5">
                  <div class="flex flex-col gap-4">
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                      <!-- Icon -->
                      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <i :class="`fa-solid ${item.icon} text-orange-600 text-xl`"></i>
                      </div>

                      <!-- Title & Description -->
                      <div class="flex-1">
                        <h4 class="font-bold text-gray-900 text-lg">{{ item.name }}</h4>
                        <p class="text-sm text-gray-500 mt-1">{{ item.description }}</p>
                      </div>
                    </div>

                    <!-- Details / Includes -->
                    <div v-if="item.details && item.details.length > 0" class="border-t border-gray-100 pt-4">
                      <h5 class="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-check-circle text-orange-500"></i>
                        Pemeriksaan Termasuk
                      </h5>
                      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li v-for="(detail, index) in item.details" :key="index" class="flex items-center gap-2 text-sm text-gray-600">
                          <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-0.5 flex-shrink-0"></span>
                          {{ detail }}
                        </li>
                      </ul>
                    </div>

                    <!-- Additional Services -->
                    <div v-if="item.additionalServices && item.additionalServices.length > 0" class="border-t border-gray-100 pt-4">
                      <h5 class="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-plus-circle text-blue-500"></i>
                        Layanan Tambahan Tersedia
                      </h5>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div v-for="service in item.additionalServices" :key="service.name" class="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
                          <span class="text-sm text-gray-700">{{ service.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div v-else class="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fa-solid fa-search text-orange-500 text-2xl"></i>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2">Tidak ditemukan</h3>
                <p class="text-sm text-gray-500">Coba kata kunci lain</p>
              </div>

              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Keunggulan Medical Check Up Caya
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Paket pemeriksaan komprehensif untuk individual dan perusahaan</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Tim medis profesional dan berpengalaman</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Laporan hasil lengkap dengan konsultasi dokter</span>
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

/* Package Card Hover Effect */
.package-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.package-card:hover {
  transform: translateY(-2px);
}

/* Smooth transitions untuk semua elemen */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button hover effects */
a:active {
  transform: scale(0.98);
}
</style>

<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { medicalCheckupPackages } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import { useHead } from "@vueuse/head";
import ServicesHero from "@/components/ServicesHero.vue";

const selectedSubcategory = ref("paketPersonal");


// Expand state untuk dropdown
const expandedPackages = ref({});

const toggleExpand = (packageKey) => {
  expandedPackages.value[packageKey] = !expandedPackages.value[packageKey];
};

const isExpanded = (packageKey) => {
  return expandedPackages.value[packageKey] || false;
};

const currentSubcategory = computed(() => medicalCheckupPackages.subcategories[selectedSubcategory.value]);

const filteredPackages = computed(() => currentSubcategory.value.items);

const waLink = "https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU";

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
              <div v-if="filteredPackages.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div v-for="(pkg, index) in filteredPackages" :key="pkg.name" class="package-card bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 cursor-pointer" :class="{ 'ring-2 ring-orange-200': isExpanded(pkg.name) }" @click="toggleExpand(pkg.name)">
                  <!-- Card Header -->
                  <div class="p-4 relative">
                    <div class="flex items-start justify-between mb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center transition-all duration-300" :class="isExpanded(pkg.name) ? 'bg-orange-100 scale-110' : 'group-hover:bg-orange-100'">
                          <i :class="`fa-solid ${pkg.icon} text-orange-600 transition-transform duration-300 ${isExpanded(pkg.name) ? 'scale-110' : ''}`"></i>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 transition-colors duration-300" :class="isExpanded(pkg.name) ? 'text-orange-600' : ''">{{ getDisplayName(pkg) }}</h4>
                          <p class="text-xs text-gray-500 mt-0.5">Klik untuk lihat rincian</p>
                        </div>
                      </div>
                      <div class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 transition-all duration-300" :class="isExpanded(pkg.name) ? 'bg-orange-100 rotate-0' : ''">
                        <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-500 ease-out" :class="isExpanded(pkg.name) ? 'rotate-180 text-orange-500' : ''"></i>
                      </div>
                    </div>

                    <!-- Preview badge -->
                    <div class="flex flex-wrap gap-2">
                      <!-- <span class="text-xs bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full transition-all duration-300" :class="isExpanded(pkg.name) ? 'bg-orange-100' : ''">
                        {{ pkg.details ? pkg.details.length : 0 }} Pemeriksaan
                      </span> -->
                      <span v-if="pkg.result" class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {{ pkg.result }}
                      </span>
                    </div>
                  </div>

                  <!-- Expandable Content -->
                  <div class="expandable-content" :class="{ expanded: isExpanded(pkg.name) }">
                    <div class="px-4 pb-4 border-t border-gray-100 pt-3">
                      <h5 class="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-list-check text-orange-500 text-xs"></i>
                        Rincian Pemeriksaan:
                      </h5>
                      <ul v-if="pkg.details" class="space-y-2 mb-4">
                        <li v-for="(detail, i) in pkg.details" :key="i" class="detail-item flex items-start gap-2" :style="{ animationDelay: `${i * 50}ms` }" :class="{ 'animate-in': isExpanded(pkg.name) }">
                          <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                            <i class="fa-solid fa-check text-green-500 text-xs"></i>
                          </div>
                          <span class="text-sm text-gray-600">{{ detail }}</span>
                        </li>
                      </ul>

                      <!-- Action Buttons -->
                      <div class="flex gap-2 pt-2 border-t border-gray-100">
                        <a :href="waLink" class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-3 rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm font-medium" @click.stop> Daftar Sekarang </a>
                        <a :href="waLink" class="flex items-center justify-center w-11 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 transition-all duration-300" @click.stop>
                          <i class="fa-brands fa-whatsapp text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Action buttons when collapsed -->
                  <div v-if="!isExpanded(pkg.name)" class="px-4 pb-4">
                    <div class="flex gap-2">
                      <a :href="waLink" class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-3 rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm font-medium" @click.stop> Daftar Sekarang </a>
                      <a :href="waLink" class="flex items-center justify-center w-11 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 transition-all duration-300" @click.stop>
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
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

/* Expandable Content Animation */
.expandable-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-content.expanded {
  max-height: 600px;
  opacity: 1;
}

/* Detail Items Stagger Animation */
.detail-item {
  opacity: 0;
  transform: translateX(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.detail-item.animate-in {
  opacity: 1;
  transform: translateX(0);
  animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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

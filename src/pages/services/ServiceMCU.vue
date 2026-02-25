<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { medicalCheckupPackages } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import { useHead } from "@vueuse/head";
import ServicesHero from "@/components/ServicesHero.vue";
const selectedSubcategory = ref("paketPersonal");
const searchQuery = ref("");

const currentSubcategory = computed(() => medicalCheckupPackages.subcategories[selectedSubcategory.value]);

const filteredPackages = computed(() => {
  if (!searchQuery.value) return currentSubcategory.value.items;
  return currentSubcategory.value.items.filter((pkg) => pkg.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

useHead({
  title: "Medical Check Up | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Medical Check Up Caya Klinik untuk personal dan perusahaan, tersedia paket Silver, Platinum, K3, serta Haji & Umrah.",
    },
  ],
});
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-flask-vial', text: '>Medical Check Up' }"
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
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 mb-6">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>
              <!-- Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Filter button -->
                <ServiceFilter v-model="selectedSubcategory" :options="medicalCheckupPackages.subcategories" />
                <!-- Search -->
                <div class="relative mt-4">
                  <input v-model="searchQuery" type="text" placeholder="Cari paket medical check up..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-900 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Packages Grid -->
              <div v-if="filteredPackages.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div v-for="pkg in filteredPackages" :key="pkg.name" class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 group">
                  <div class="flex items-start gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-100">
                      <i :class="`fa-solid ${pkg.icon} text-orange-600`"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{{ pkg.name }}</h4>
                      <p class="text-xs text-gray-500 mt-1">{{ pkg.result }}</p>
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
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>

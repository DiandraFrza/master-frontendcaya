<!-- @format -->

<script setup>
import { ref } from "vue";
import MainHero from "@/pages/MainHero.vue";
import { medicalCheckupPackages } from "../data/examinationData.js";

const waLink = "https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU";

const metaItems = [
  { icon: "fa-stethoscope", text: "Pemeriksaan Lengkap" },
  { icon: "fa-user-doctor", text: "Dokter Profesional" },
  { icon: "fa-file-medical", text: "Laporan Terperinci" },
];

// Expand state untuk dropdown
const expandedPackages = ref({});

const toggleExpand = (packageKey, itemIndex) => {
  const key = `${packageKey}-${itemIndex}`;
  expandedPackages.value[key] = !expandedPackages.value[key];
};

const isExpanded = (packageKey, itemIndex) => {
  return expandedPackages.value[`${packageKey}-${itemIndex}`] || false;
};

// Get packages data
const personalPackages = medicalCheckupPackages.subcategories.paketPersonal;
const k3Packages = medicalCheckupPackages.subcategories.paketK3;
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <MainHero
      variant="default"
      title="Produk & Layanan"
      subtitle="Medical Check Up Komprehensif"
      description="Berbagai jenis pemeriksaan kesehatan dengan teknologi terkini dan tim medis profesional untuk kebutuhan individu maupun korporat."
      eyebrow="Medical Check Up"
      eyebrowIcon="fa-heartbeat"
      :metaItems="metaItems"
    />

    <!-- Main Content -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <!-- Paket Personal -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Paket Personal</h2>
            <p class="text-slate-600">Pilih paket yang sesuai dengan kebutuhan kesehatan Anda</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div 
              v-for="(item, index) in personalPackages.items" 
              :key="index" 
              class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden group cursor-pointer"
              @click="toggleExpand('personal', index)"
            >
              <!-- Card Header -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                      <i :class="`fa-solid ${item.icon} text-orange-500 text-xl`"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800">{{ item.shortName || item.name }}</h3>
                      <p class="text-xs text-slate-500">Klik untuk lihat rincian</p>
                    </div>
                  </div>
                  <div class="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <i 
                      :class="`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${isExpanded('personal', index) ? 'rotate-180' : ''}`"
                    ></i>
                  </div>
                </div>

                <!-- Preview (always visible) -->
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">{{ item.details.length }} Pemeriksaan</span>
                </div>
              </div>

              <!-- Expandable Content -->
              <div 
                class="overflow-hidden transition-all duration-300"
                :style="{ maxHeight: isExpanded('personal', index) ? '500px' : '0px' }"
              >
                <div class="px-6 pb-6 border-t border-slate-100 pt-4">
                  <h4 class="text-sm font-semibold text-slate-700 mb-3">Rincian Pemeriksaan:</h4>
                  <ul class="space-y-2 mb-6">
                    <li v-for="(detail, i) in item.details" :key="i" class="flex items-start gap-3">
                      <i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0 text-sm"></i>
                      <span class="text-sm text-slate-700">{{ detail }}</span>
                    </li>
                  </ul>

                  <div class="flex gap-3">
                    <a 
                      :href="waLink" 
                      class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      @click.stop
                    > 
                      Daftar Sekarang 
                    </a>
                    <a 
                      :href="waLink" 
                      class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-orange-500"
                      @click.stop
                    >
                      <i class="fa-brands fa-whatsapp text-slate-600 hover:text-orange-500 transition-colors text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Show action buttons when collapsed -->
              <div v-if="!isExpanded('personal', index)" class="px-6 pb-6">
                <div class="flex gap-3">
                  <a 
                    :href="waLink" 
                    class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                    @click.stop
                  > 
                    Daftar Sekarang 
                  </a>
                  <a 
                    :href="waLink" 
                    class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-orange-500"
                    @click.stop
                  >
                    <i class="fa-brands fa-whatsapp text-slate-600 hover:text-orange-500 transition-colors text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Paket K3 -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Paket K3</h2>
            <p class="text-slate-600">Paket sesuai standar Kesehatan & Keselamatan Kerja</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="(item, index) in k3Packages.items" 
              :key="index" 
              class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden group cursor-pointer"
              @click="toggleExpand('k3', index)"
            >
              <!-- Card Header -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <i :class="`fa-solid ${item.icon} text-blue-500 text-xl`"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-slate-800">{{ item.name.replace('MCU ', '') }}</h3>
                      <p class="text-xs text-slate-500">Klik untuk lihat rincian</p>
                    </div>
                  </div>
                  <div class="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <i 
                      :class="`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${isExpanded('k3', index) ? 'rotate-180' : ''}`"
                    ></i>
                  </div>
                </div>

                <!-- Preview -->
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{{ item.details.length }} Pemeriksaan</span>
                </div>
              </div>

              <!-- Expandable Content -->
              <div 
                class="overflow-hidden transition-all duration-300"
                :style="{ maxHeight: isExpanded('k3', index) ? '600px' : '0px' }"
              >
                <div class="px-6 pb-6 border-t border-slate-100 pt-4">
                  <h4 class="text-sm font-semibold text-slate-700 mb-3">Rincian Pemeriksaan:</h4>
                  <ul class="space-y-2 mb-6">
                    <li v-for="(detail, i) in item.details" :key="i" class="flex items-start gap-3">
                      <i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0 text-sm"></i>
                      <span class="text-sm text-slate-700">{{ detail }}</span>
                    </li>
                  </ul>

                  <div class="flex gap-3">
                    <a 
                      :href="waLink" 
                      class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      @click.stop
                    > 
                      Daftar Sekarang 
                    </a>
                    <a 
                      :href="waLink" 
                      class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-blue-500"
                      @click.stop
                    >
                      <i class="fa-brands fa-whatsapp text-slate-600 hover:text-blue-500 transition-colors text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Show action buttons when collapsed -->
              <div v-if="!isExpanded('k3', index)" class="px-6 pb-6">
                <div class="flex gap-3">
                  <a 
                    :href="waLink" 
                    class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                    @click.stop
                  > 
                    Daftar Sekarang 
                  </a>
                  <a 
                    :href="waLink" 
                    class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-blue-500"
                    @click.stop
                  >
                    <i class="fa-brands fa-whatsapp text-slate-600 hover:text-blue-500 transition-colors text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Layanan Onsite -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-house-medical text-green-600 text-xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-800">Layanan Onsite / Home Service</h3>
              </div>

              <p class="text-slate-600 mb-6 leading-relaxed">Kami menyediakan layanan MCU onsite dengan tim medis profesional yang datang ke lokasi Anda. Cocok untuk perusahaan, institusi, atau individu yang membutuhkan kenyamanan ekstra.</p>

              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Pengambilan sampel darah dan urine di lokasi</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Pemeriksaan ECG dan X-ray portable (tersedia)</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Laporan terstruktur dengan interpretasi dokter</span>
                </div>
              </div>

              <a :href="waLink" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                <i class="fa-brands fa-whatsapp text-xl"></i>
                Request Layanan Onsite
              </a>
            </div>

            <div class="bg-slate-50 p-8">
              <h4 class="text-lg font-semibold text-slate-800 mb-6">Keunggulan Layanan Onsite</h4>
              <div class="grid gap-4">
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-syringe text-blue-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Mobile Phlebotomy</h5>
                    <p class="text-sm text-slate-600">Tim terlatih untuk pengambilan sampel yang aman dan nyaman</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-file-medical text-green-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Laporan Komprehensif</h5>
                    <p class="text-sm text-slate-600">Format digital dengan analisis mendalam untuk kebutuhan HR</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-user-doctor text-purple-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Tim Profesional</h5>
                    <p class="text-sm text-slate-600">Dokter dan tenaga medis bersertifikat dengan pengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>

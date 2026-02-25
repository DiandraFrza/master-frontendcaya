<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import MainHero from "@/pages/MainHero.vue";

const query = ref("");

const results = ref([
  {
    id: 1,
    name: "Andi Pratama",
    reg: "MCU-2024-001",
    date: "12 Januari 2024",
    type: "MCU Karyawan",
    branch: "Caya Lab Depok",
    status: "Selesai",
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    reg: "MCU-2024-014",
    date: "18 Januari 2024",
    type: "MCU Umum",
    branch: "Caya Lab Jakarta",
    status: "Proses",
  },
]);

const filtered = computed(() => {
  if (!query.value) return results.value;
  return results.value.filter((r) => r.name.toLowerCase().includes(query.value.toLowerCase()) || r.reg.toLowerCase().includes(query.value.toLowerCase()));
});

function waLink(item) {
  const text = encodeURIComponent(`Halo Caya, saya ingin menanyakan hasil MCU atas nama ${item.name} dengan nomor ${item.reg}`);
  return `https://wa.me/6281290007336?text=${text}`;
}
</script>

<template>
  <div>
    <!-- Hero -->
    <MainHero variant="centered" title="Hasil MCU" :showBreadcrumb="true" :showSocialSidebar="true" :showTwitter="true" eyebrow="Cek Status" eyebrowIcon="fa-file-medical" />

    <!-- MAIN CONTENT -->
    <main class="page-content">
      <!-- SEARCH -->
      <section class="py-14 bg-slate-50">
        <div class="container max-w-5xl mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-slate-800 mb-3">Cari Hasil MCU</h2>
            <p class="text-slate-600">Masukkan nama pasien atau nomor registrasi MCU</p>
          </div>

          <div class="max-w-xl mx-auto mb-12">
            <div class="relative">
              <input v-model="query" type="text" placeholder="Contoh: Andi Pratama / MCU-2024-001" class="w-full px-6 py-4 pr-14 rounded-2xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
              <i class="fa-solid fa-search absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
            </div>
          </div>

          <!-- RESULT CARDS -->
          <div v-if="filtered.length > 0" class="grid md:grid-cols-2 gap-6">
            <div v-for="item in filtered" :key="item.id" class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-lg font-bold text-slate-800">{{ item.name }}</h3>
                  <p class="text-sm text-slate-500">No. Registrasi: {{ item.reg }}</p>
                </div>

                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="item.status === 'Selesai' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'"
                >
                  {{ item.status }}
                </span>
              </div>

              <ul class="text-sm text-slate-600 space-y-2 mb-6">
                <li class="flex items-center gap-2"><i class="fa-regular fa-calendar text-orange-500"></i> Tanggal MCU: {{ item.date }}</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-vial text-orange-500"></i> Jenis: {{ item.type }}</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-hospital text-orange-500"></i> Klinik: {{ item.branch }}</li>
              </ul>

              <a :href="waLink(item)" target="_blank" class="inline-flex items-center justify-center w-full gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"> <i class="fa-brands fa-whatsapp"></i> Konsultasi via WhatsApp </a>
            </div>
          </div>

          <!-- EMPTY -->
          <div v-else class="text-center py-16 bg-white rounded-2xl">
            <i class="fa-solid fa-folder-open text-5xl text-gray-200 mb-4"></i>
            <p class="text-slate-500 text-lg">Hasil MCU tidak ditemukan</p>
            <p class="text-slate-400 text-sm mt-2">Silakan cek kembali nama atau nomor registrasi</p>
          </div>
        </div>
      </section>

      <!-- DISCLAIMER -->
      <section class="py-8 bg-amber-50">
        <div class="container max-w-4xl mx-auto px-4">
          <div class="flex items-start gap-3 text-amber-800">
            <i class="fa-solid fa-triangle-exclamation mt-1"></i>
            <p class="text-sm">Informasi hasil MCU bersifat rahasia dan hanya dapat diakses oleh pasien terkait. Interpretasi hasil sebaiknya dikonsultasikan langsung dengan dokter.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

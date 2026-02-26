<!-- @format -->

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import About from "./About.vue";
import MedicalCheckUp from "./MedicalCheckUp.vue";
import InspirasiSehat from "./home/InspirasiSehat.vue";
import Testimoni from "./home/Testimoni.vue";
import BeritaEdukasi from "./home/BeritaEdukasi.vue";
import { allSearchableItems, servicesNavigation } from "./data/examinationData.js";

const router = useRouter();
const activeTab = ref("search");
const searchQuery = ref("");
const showSuggestions = ref(false);
const selectedIndex = ref(-1);

// Filter suggestions berdasarkan query
const suggestions = computed(() => {
  if (!searchQuery.value.trim()) {
    // Return popular items jika kosong
    return [
      { name: "Cek Kolesterol", type: "popular", icon: "fa-heart", path: "/services/lab" },
      { name: "Darah Lengkap", type: "popular", icon: "fa-droplet", path: "/services/lab" },
      { name: "Medical Check Up", type: "popular", icon: "fa-stethoscope", path: "/services/mcu" },
      { name: "EKG", type: "popular", icon: "fa-heart-pulse", path: "/services/elektromedis" },
      { name: "USG Abdomen", type: "popular", icon: "fa-image", path: "/services/radiologi" },
      { name: "Home Service", type: "popular", icon: "fa-house-medical", path: "/services/home-service" },
    ];
  }

  const query = searchQuery.value.toLowerCase();
  const results = [];

  // Cari di semua layanan
  const serviceMatches = allSearchableItems.filter((item) => item.name.toLowerCase().includes(query) || (item.category && item.category.toLowerCase().includes(query)));

  results.push(
    ...serviceMatches.slice(0, 5).map((item) => ({
      name: item.name,
      category: item.category,
      type: "service",
      icon: item.icon || "fa-stethoscope",
      path: item.path,
      requiresReservation: item.requiresReservation,
    })),
  );

  // Cari di menu navigasi
  const navMatches = servicesNavigation.filter((nav) => nav.name.toLowerCase().includes(query) || nav.description.toLowerCase().includes(query));

  results.push(
    ...navMatches.slice(0, 3).map((nav) => ({
      name: nav.name,
      type: "navigation",
      icon: nav.icon,
      path: nav.path,
      description: nav.description,
    })),
  );

  return results.slice(0, 8);
});

// Handle input focus
const onSearchFocus = () => {
  showSuggestions.value = true;
};

// Handle click outside
const onSearchBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 200);
};

// Handle keyboard navigation
const onKeyDown = (e) => {
  if (!showSuggestions.value) return;

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      selectedIndex.value = (selectedIndex.value + 1) % suggestions.value.length;
      break;
    case "ArrowUp":
      e.preventDefault();
      selectedIndex.value = selectedIndex.value <= 0 ? suggestions.value.length - 1 : selectedIndex.value - 1;
      break;
    case "Enter":
      e.preventDefault();
      if (selectedIndex.value >= 0 && suggestions.value[selectedIndex.value]) {
        selectSuggestion(suggestions.value[selectedIndex.value]);
      } else if (searchQuery.value.trim()) {
        // Search dengan query
        router.push({
          path: "/services/lab",
          query: { search: searchQuery.value },
        });
        showSuggestions.value = false;
      }
      break;
    case "Escape":
      showSuggestions.value = false;
      selectedIndex.value = -1;
      break;
  }
};

// Select suggestion
const selectSuggestion = (item) => {
  if (item.path) {
    router.push(item.path);
  }
  searchQuery.value = item.name;
  showSuggestions.value = false;
  selectedIndex.value = -1;
};

// Quick action buttons
const quickActions = [
  { name: "Cek Kolesterol", icon: "fa-heart", path: "/services/lab" },
  { name: "Darah Lengkap", icon: "fa-flask", path: "/services/lab" },
  { name: "MCU", icon: "fa-stethoscope", path: "/services/mcu" },
];

// Handle cek hasil - langsung ke feature development
const handleCekHasil = () => {
  router.push("/feature-development");
};

// Reset selected index saat query berubah
watch(searchQuery, () => {
  selectedIndex.value = -1;
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="min-h-screen bg-[#FFF8ED] relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-orange-100/20 to-orange-200/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur text-orange-700 px-4 py-2 rounded-full mb-6 border border-orange-200/50 animate-fade-in">
              <i class="fa-solid fa-check-circle text-orange-600"></i>
              <span class="font-semibold text-sm">Klinik Syariah Pertama Di Indonesia</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kesehatan Anda,
              <span class="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">Prioritas Kami</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">Layanan kesehatan modern dengan nilai-nilai syariah. Pemeriksaan lengkap, hasil akurat, dan tim profesional yang peduli.</p>

            <!-- Quick Features -->
            <div class="space-y-3 mb-10">
              <div class="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Hasil Cepat & Akurat</span>
              </div>
              <div class="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Dokter Bersertifikat</span>
              </div>
              <div class="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Layanan Terpercaya</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4">
              <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-0.5">
                <i class="fa-brands fa-whatsapp"></i>
                Hubungi Kami
              </a>
              <router-link to="/services/home-service" class="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all hover:scale-105">
                <i class="fa-solid fa-house-chimney"></i>
                Ingin Home Service ?
              </router-link>
            </div>
          </div>

          <!-- Right Content - Interactive Section -->
          <div class="relative">
            <!-- TABS -->
            <div class="flex gap-2 mb-6 bg-orange-100/80 backdrop-blur p-1 rounded-lg border border-orange-100/50">
              <button @click="activeTab = 'search'" :class="['flex-1 py-2 px-4 rounded-md font-semibold transition-all text-sm', activeTab === 'search' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600']">
                <i class="fa-solid fa-magnifying-glass mr-2"></i>
                Cari Layanan
              </button>

              <button @click="activeTab = 'results'" :class="['flex-1 py-2 px-4 rounded-md font-semibold transition-all text-sm', activeTab === 'results' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600']">
                <i class="fa-solid fa-file-check mr-2"></i>
                Cek Hasil
              </button>
            </div>

            <!-- CONTENT WRAPPER -->
            <div class="relative min-h-[420px]">
              <!-- SEARCH TAB -->
              <div v-show="activeTab === 'search'" class="absolute inset-0 bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-orange-100/50 animate-in fade-in">
                <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i class="fa-solid fa-search text-orange-500"></i>
                  Apa yang Anda cari?
                </h3>

                <!-- Search Input with Suggestions -->
                <div class="relative mb-4">
                  <input v-model="searchQuery" type="text" placeholder="Cari pemeriksaan, layanan, atau keluhan..." class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" @focus="onSearchFocus" @blur="onSearchBlur" @keydown="onKeyDown" />
                  <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"></i>
                  <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                    <i class="fa-solid fa-times-circle"></i>
                  </button>

                  <!-- Suggestions Dropdown -->
                  <div v-if="showSuggestions" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-orange-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
                    <!-- Label -->
                    <div class="px-4 py-2 bg-orange-50 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                      {{ searchQuery ? "Hasil Pencarian" : "Pencarian Populer" }}
                    </div>

                    <!-- Suggestion Items -->
                    <div v-for="(item, index) in suggestions" :key="index" @click="selectSuggestion(item)" :class="['px-4 py-3 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0', selectedIndex === index ? 'bg-orange-50' : 'hover:bg-gray-50']">
                      <div :class="['w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', item.type === 'popular' ? 'bg-orange-100' : 'bg-orange-50']">
                        <i :class="`fa-solid ${item.icon} ${item.type === 'popular' ? 'text-orange-600' : 'text-orange-600'}`"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="font-medium text-gray-900 truncate">{{ item.name }}</div>
                        <div class="text-xs text-white">
                          <span v-if="item.category" class="text-orange-600">{{ item.category }}</span>
                          <span v-else-if="item.description" class="text-gray-400">{{ item.description }}</span>
                          <span v-else-if="item.type === 'popular'" class="text-orange-500">Populer</span>
                        </div>
                      </div>
                      <div v-if="item.requiresReservation" class="flex-shrink-0">
                        <span class="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full"> Reservasi </span>
                      </div>
                      <i class="fa-solid fa-chevron-right text-gray-300 text-xs flex-shrink-0"></i>
                    </div>

                    <!-- Empty State -->
                    <div v-if="suggestions.length === 0 && searchQuery" class="px-4 py-6 text-center text-white">
                      <i class="fa-solid fa-search text-3xl mb-2 text-gray-300"></i>
                      <p class="text-sm">Tidak ditemukan hasil untuk "{{ searchQuery }}"</p>
                      <router-link to="/services/lab" class="text-orange-500 text-sm hover:underline mt-1 inline-block"> Lihat semua layanan </router-link>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions -->
                <div class="space-y-2">
                  <p class="text-xs text-white font-semibold mb-3">Pencarian Cepat:</p>
                  <div class="flex flex-wrap gap-2">
                    <button v-for="action in quickActions" :key="action.name" @click="selectSuggestion(action)" class="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200 transition-colors flex items-center gap-1.5">
                      <i :class="`fa-solid ${action.icon}`"></i>
                      {{ action.name }}
                    </button>
                  </div>
                </div>

                <!-- Popular Services Grid -->
                <div class="mt-6">
                  <p class="text-xs text-white font-semibold mb-3">Layanan Unggulan:</p>
                  <div class="grid grid-cols-2 gap-2">
                    <router-link to="/services/lab" class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group">
                      <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-flask-vial text-orange-600 text-sm"></i>
                      </div>
                      <span class="text-xs font-medium text-gray-700 group-hover:text-orange-700">Laboratorium</span>
                    </router-link>
                    <router-link to="/services/radiologi" class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group">
                      <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-x-ray text-orange-600 text-sm"></i>
                      </div>
                      <span class="text-xs font-medium text-gray-700 group-hover:text-orange-700">Radiologi</span>
                    </router-link>
                    <router-link to="/services/elektromedis" class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group">
                      <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-heart-pulse text-orange-600 text-sm"></i>
                      </div>
                      <span class="text-xs font-medium text-gray-700 group-hover:text-orange-700">Elektromedis</span>
                    </router-link>
                    <router-link to="/services/mcu" class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group">
                      <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-heartbeat text-orange-600 text-sm"></i>
                      </div>
                      <span class="text-xs font-medium text-gray-700 group-hover:text-orange-700">MCU</span>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- CEK HASIL TAB -->
              <div v-show="activeTab === 'results'" class="absolute inset-0 bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-orange-100/50 animate-in fade-in">
                <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i class="fa-solid fa-file-medical text-orange-500"></i>
                  Cek Hasil Pemeriksaan
                </h3>

                <div class="space-y-3 mb-4">
                  <div>
                    <label class="text-sm font-semibold text-gray-700 mb-2 block"> No. Pendaftaran / Identitas </label>
                    <input type="text" placeholder="Masukkan nomor pendaftaran..." class="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none" />
                  </div>

                  <div>
                    <label class="text-sm font-semibold text-gray-700 mb-2 block"> Nomor HP </label>
                    <input type="tel" placeholder="Masukkan nomor HP..." class="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none" />
                  </div>
                </div>

                <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 text-xs text-orange-700">
                  <i class="fa-solid fa-shield-heart mr-2"></i>
                  Data Anda aman dan terenkripsi
                </div>

                <button @click="handleCekHasil" class="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-[1.02]">
                  <i class="fa-solid fa-check-circle mr-2"></i>
                  Cek Hasil Anda
                </button>
              </div>
            </div>

            <!-- DECORATIVE CARD -->
            <div class="mt-6 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl p-4 border border-orange-200/50 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center animate-pulse">
                  <i class="fa-solid fa-lightbulb text-white"></i>
                </div>
                <div class="text-sm">
                  <p class="font-semibold text-orange-900 mb-1">Ingin Konsultasi Gratis?</p>
                  <p class="text-orange-700">Chat dengan tim medis kami untuk rekomendasi pemeriksaan yang tepat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section>
      <About />
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#ff562c]/10 to-[#ff7d2e]/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-orange-100/20 to-red-100/10 rounded-full blur-3xl"></div>

      <MedicalCheckUp />
    </section>

    <!-- Health Inspiration Section -->
    <section class="py-20 bg-linear-to-br from-orange-50 via-white to-orange-50">
      <InspirasiSehat />
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-orange-100/20 to-orange-100/10 rounded-full blur-3xl"></div>

      <Testimoni />
    </section>

    <!-- News Section -->
    <section class="py-20 bg-linear-to-br from-amber-50 via-orange-50 to-white">
      <BeritaEdukasi />
    </section>

    <!-- Final CTA Section -->
    <section class="bg-linear-to-r from-[#ff562c] via-orange-500 to-[#ff7d2e] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center">
          <h2 class="text-3xl text-white md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">Butuh Penawaran Khusus Perusahaan?</h2>
          <p class="text-lg text-white mb-8 max-w-2xl mx-auto">Paket Pemeriksaan yang sesuai dengan Kebutuhan Anda</p>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-[#ff562c] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105">
              <i class="fa-brands fa-whatsapp"></i>
              Chat WhatsApp
            </a>
            <a href="tel:+6281290094900" class="inline-flex items-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all hover:scale-105">
              <i class="fa-solid fa-phone"></i>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.text-transparent {
  color: transparent;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.3s ease-out;
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: slideUp 0.5s ease-out;
}

/* Scrollbar styling for suggestions */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #fb923c;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #f97316;
}
</style>

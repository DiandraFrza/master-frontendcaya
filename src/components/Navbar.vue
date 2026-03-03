<!-- @format -->
<template>
  <nav id="app-navbar" :class="['fixed top-0 left-0 right-0 z-99999 transition-all duration-500', navBg ? 'backdrop-blur-md bg-[#fff5f2] border-b border-white/20 shadow-lg scrolled' : 'bg-transparent']" role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto flex items-center px-6 py-3">
      <div class="flex items-center flex-none">
        <img src="/assets/images/Logo-CMC.png" alt="Caya Text" class="h-9 sm:block object-contain nav-img" />
      </div>
      <div class="flex-1 flex justify-center">
        <div class="hidden md:flex items-center gap-12 font-medium tracking-[0.03em]">
          <router-link to="/" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/')" :style="navBg ? {} : { color: '#000' }">
            Beranda
            <span v-if="currentRoute === '/'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <router-link to="/tentang-caya" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/tentang-caya')" :style="navBg ? {} : { color: '#000' }">
            Tentang Caya
            <span v-if="currentRoute === '/tentang-caya'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <!-- Produk & Layanan - Redesain Dropdown -->
          <div class="relative" ref="layananRef" @mouseenter="openLayanan" @mouseleave="startCloseLayanan">
            <button @click="toggleLayanan" class="nav-link flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300" :class="[getNavLinkClass('/services'), isServicesActive ? 'text-[#fd543a]' : '']" :style="navBg ? {} : { color: '#000' }" :aria-expanded="layananOpen.toString()">
              Produk & Layanan
              <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': layananOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition name="dropdown-fade">
              <div v-if="layananOpen" class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-50" @mouseenter="clearCloseTimeout" @mouseleave="startCloseLayanan" role="menu" aria-label="Produk dan Layanan">
                <!-- Header dengan gradient -->
                <div class="bg-gradient-to-r from-[#fd543a]/10 to-[#fd543a]/5 px-6 py-4 border-b border-gray-100">
                  <h3 class="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#fd543a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Layanan Kami
                  </h3>
                  <p class="text-xs text-black mt-1">Pilih layanan sesuai kebutuhan kesehatan Anda</p>
                </div>

                <!-- Menu Items -->
                <div class="p-4 space-y-2">
                  <div v-for="group in layananMenu" :key="group.title" class="group">
                    <!-- Category Header -->
                    <div class="flex items-center gap-3 px-3 py-2 mb-1">
                      <div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#fd543a]/20 to-[#fd543a]/5 flex items-center justify-center group-hover:from-[#fd543a] group-hover:to-[#e67931] transition-all duration-300">
                        <svg class="w-5 h-5 text-[#fd543a] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path v-if="group.icon === 'lab'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          <path v-else-if="group.icon === 'nonlab'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          <path v-else-if="group.icon === 'corporate'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900 text-sm">{{ group.title }}</h4>
                        <p class="text-xs text-gray-400">{{ group.items.length }} layanan</p>
                      </div>
                    </div>

                    <!-- Sub Items -->
                    <ul class="space-y-1 pl-4">
                      <li v-for="item in group.items" :key="item.to">
                        <router-link :to="item.to" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:text-[#fd543a] hover:bg-[#fd543a]/5 transition-all duration-200 group/item" role="menuitem" @click="layananOpen = false">
                          <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-[#fd543a] transition-colors duration-200"></span>
                          <span class="flex-1">{{ item.label }}</span>
                          <svg class="w-4 h-4 text-gray-300 group-hover/item:text-[#fd543a] group-hover/item:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Footer CTA -->
                <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <router-link to="/services/lab" @click="layananOpen = false" class="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#fd543a] text-white rounded-xl font-medium text-sm hover:bg-[#e67931] transition-all duration-300 hover:shadow-lg hover:shadow-[#fd543a]/30">
                    <span>Lihat Semua Layanan</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <router-link to="/cabang" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/cabang')" :style="navBg ? {} : { color: '#000' }">
            Klinik Kami
            <span v-if="currentRoute === '/cabang'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <router-link to="/blog-edukasi" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/blog-edukasi')" :style="navBg ? {} : { color: '#000' }">
            Blog & Edukasi
            <span v-if="currentRoute === '/blog-edukasi'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>
        </div>
      </div>

      <!-- right: actions -->
      <div class="flex-none flex items-center gap-3">
        <!-- Tombol Reservasi - Hanya tampil di desktop -->
        <button @click="onReserve" class="hidden sm:flex group rounded-sm px-3 py-1 font-reguler text-[14px] bg-[#fd543a] shadow-lg hover:scale-[1.05] transition-all duration-300 items-center" :style="navBg ? { color: '#000000' } : { color: '#fff' }">
          Hubungi Kami
          <div class="ml-1 group-hover:translate-x-0.5 inline-block transition-transform duration-300 -rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" :style="navBg ? { color: '#000000' } : { color: '#fff' }">
              <path fill="currentColor" d="m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15z" />
            </svg>
          </div>
        </button>

        <!-- mobile toggle -->
        <button @click="toggleMobile" class="md:hidden p-2 ml-2 rounded focus:outline-none" :aria-expanded="mobileOpen.toString()">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#374151">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#374151">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="mobileOpen" class="md:hidden bg-[#fff5f2] shadow-md border-t border-gray-100">
        <div class="px-4 py-4 space-y-2">
          <router-link to="/" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/')">
            Beranda
            <span v-if="currentRoute === '/'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>
          <router-link to="/tentang-caya" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/tentang-caya')">
            Tentang Caya
            <span v-if="currentRoute === '/tentang-caya'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>

          <!-- Mobile Layanan dengan redesain -->
          <div class="border border-gray-200 rounded-xl overflow-hidden bg-white/50">
            <button @click="mobileLayananOpen = !mobileLayananOpen" class="w-full flex items-center justify-between px-4 py-3 font-medium text-[#111] hover:bg-white/80 transition-colors">
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#fd543a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Produk & Layanan
              </span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="mobileLayananOpen && 'rotate-180'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="mobileLayananOpen" class="border-t border-gray-100 bg-white">
              <div v-for="group in layananMenu" :key="group.title" class="px-4 py-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-[#fd543a]/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#fd543a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path v-if="group.icon === 'lab'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-gray-900">{{ group.title }}</p>
                </div>

                <router-link v-for="item in group.items" :key="item.to" :to="item.to" @click="closeMobile" class="flex items-center gap-2 py-2 pl-10 text-sm text-gray-600 hover:text-[#fd543a] transition-colors">
                  <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                  {{ item.label }}
                </router-link>
              </div>

              <router-link to="/services" @click="closeMobile" class="flex items-center justify-center gap-2 mx-4 mb-4 py-2.5 px-4 bg-[#fd543a] text-white rounded-lg font-medium text-sm">
                Lihat Semua Layanan
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
          </div>

          <router-link to="/cabang" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/cabang')">
            Cabang Kami
            <span v-if="currentRoute === '/cabang'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>

          <router-link to="/blog-edukasi" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/blog-edukasi')">
            Berita & Edukasi
            <span v-if="currentRoute === '/blog-edukasi'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>

          <!-- Tombol Reservasi di Mobile Menu -->
          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button class="w-full px-4 py-2 bg-[#fd543a] text-black rounded font-semibold hover:bg-[#e67931] transition-colors duration-300">Reservasi</button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mobileOpen = ref(false);
const navBg = ref(false);
const activeSection = ref("");

const currentRoute = computed(() => route.path);

const layananOpen = ref(false);
const layananRef = ref(null);
let closeTimeout = null;

// Tambah menu layanan
const layananMenu = [
  {
    title: "Tes Laboratorium",
    icon: "lab",
    items: [
      { label: "Laboratorium Klinik", to: "/services/lab" },
      { label: "Screening Penyakit", to: "/services/screening" },
    ],
  },
  {
    title: "Tes Non Laboratorium",
    icon: "nonlab",
    items: [
      { label: "Medical Check Up", to: "/services/mcu" },
      { label: "Radiologi", to: "/services/radiologi" },
    ],
  },
];

const mobileLayananOpen = ref(false);

// Check if any service route is active
const isServicesActive = computed(() => {
  return route.path.startsWith("/services");
});

function openLayanan() {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  layananOpen.value = true;
}

function startCloseLayanan() {
  if (closeTimeout) clearTimeout(closeTimeout);
  closeTimeout = setTimeout(() => {
    layananOpen.value = false;
    closeTimeout = null;
  }, 200);
}

function clearCloseTimeout() {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
}

function toggleLayanan() {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  layananOpen.value = !layananOpen.value;
}

// click outside to close
function handleClickOutside(e) {
  if (!layananRef.value) return;
  if (layananOpen.value && !layananRef.value.contains(e.target)) {
    layananOpen.value = false;
  }
}

function onScroll() {
  navBg.value = window.scrollY > 50;

  // Deteksi section aktif untuk highlight
  const blogSection = document.getElementById("blog");
  if (blogSection) {
    const rect = blogSection.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = "blog";
    }
  }
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
  document.body.style.overflow = mobileOpen.value ? "hidden" : "";
}

function closeMobile() {
  mobileOpen.value = false;
  document.body.style.overflow = "";
}

// Fungsi untuk mendapatkan class nav link berdasarkan route aktif
function getNavLinkClass(targetRoute) {
  const baseClass = navBg.value ? "text-[#374151] hover:text-[#fd543a]" : "text-white hover:text-[#fd543a]";
  const activeClass = currentRoute.value === targetRoute ? "text-[#fd543a] font-semibold" : "";
  return `${baseClass} ${activeClass}`;
}

// Fungsi untuk mobile nav link
function getMobileNavLinkClass(targetRoute) {
  const isActive = currentRoute.value === targetRoute || activeSection.value === targetRoute;
  return isActive ? "text-[#fd543a] pl-3" : "text-[#111] hover:text-[#fd543a] hover:pl-3";
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", handleClickOutside);
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", handleClickOutside);
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  document.body.style.overflow = "";
});

const navLinkStyle = computed(() => ({
  color: navBg.value ? "#374151" : "#ffffff",
}));

function onReserve() {
  window.location.href = "https://wa.me/081290094900";
}
</script>

<style scoped>
#app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
}

#app-navbar.scrolled .nav-link {
  color: #374151 !important;
}

#app-navbar.scrolled .nav-img {
  scale: 1.05;
}

#app-navbar .nav-link {
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
}

#app-navbar .nav-link:hover {
  color: #fd543a !important;
}

/* Animasi untuk mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Modern dropdown transition dengan scale */
.dropdown-fade-enter-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-12px) scale(0.96);
}
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px) scale(0.98);
}

/* dropdown item tweaks */
#app-navbar .dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ensure nav-link has smoother hover in scrolled state */
#app-navbar .nav-link {
  transition:
    color 0.18s ease,
    background 0.18s ease,
    transform 0.12s ease;
}

/* subtle backdrop on open for focus (optional) */
#app-navbar .backdrop-active::after {
  content: "";
  position: fixed;
  inset: 0;
  background: transparent;
  pointer-events: none;
}
</style>

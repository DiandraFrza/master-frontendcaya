<!-- @format -->
<template>
  <nav id="app-navbar" :class="['fixed top-0 left-0 right-0 z-99999 transition-all duration-500', navBg ? 'backdrop-blur-md bg-[#fff5f2] border-b border-white/20 shadow-lg scrolled' : 'bg-transparent']" role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto flex items-center px-6 py-3">
      <div class="flex items-center flex-none">
        <img src="/assets/images/Logo-CMC.png" alt="Caya Text" class="h-9 sm:block object-contain nav-img" />
      </div>
      <div class="flex-1 flex justify-center">
        <!-- Ganti bagian ini di template -->
        <div class="hidden md:flex items-center gap-12 font-medium tracking-[0.03em]">
          <router-link to="/" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/')" :style="navBg ? {} : { color: '#000' }">
            Beranda
            <span v-if="currentRoute === '/'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <router-link to="/about" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/about')" :style="navBg ? {} : { color: '#000' }">
            Tentang Caya
            <span v-if="currentRoute === '/about'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <!-- Produk & Layanan (modern dropdown) -->
          <div class="relative" ref="layananRef" @mouseenter="openLayanan" @mouseleave="startCloseLayanan">
            <button @click="toggleLayanan" class="nav-link flex items-center gap-2 px-3 py-2 rounded-md transition" :class="getNavLinkClass('/services')" :style="navBg ? {} : { color: '#000' }" :aria-expanded="layananOpen.toString()">
              Produk & Layanan
              <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': layananOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition name="dropdown-fade">
              <div v-if="layananOpen" class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] rounded-2xl bg-white shadow-lg border border-gray-100 p-4 grid grid-cols-2 gap-4 z-50" @mouseenter="clearCloseTimeout" @mouseleave="startCloseLayanan" role="menu" aria-label="Produk dan Layanan">
                <div v-for="group in layananMenu" :key="group.title" class="space-y-2">
                  <h4 class="font-semibold text-gray-900 text-sm flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#fd543a]"></span>
                    {{ group.title }}
                  </h4>

                  <ul class="space-y-1">
                    <li v-for="item in group.items" :key="item.to">
                      <router-link :to="item.to" class="flex items-center justify-between text-sm text-gray-600 hover:text-[#fd543a] p-2 rounded-md hover:bg-gray-50 transition" role="menuitem" @click="layananOpen = false">
                        <span class="truncate">{{ item.label }}</span>
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>

          <router-link to="/cabang" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/cabang')" :style="navBg ? {} : { color: '#000' }">
            Klinik Kami
            <span v-if="currentRoute === '/cabang'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
          </router-link>

          <router-link to="/blog" class="nav-link hover:scale-[1.05] transition-all duration-300 relative" :class="getNavLinkClass('/blog')" :style="navBg ? {} : { color: '#000' }">
            Blog & Edukasi
            <span v-if="currentRoute === '/blog'" class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fd543a] transition-all duration-300"></span>
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
          <router-link to="/about" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/about')">
            Tentang Caya
            <span v-if="currentRoute === '/about'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>
          <div>
            <button @click="mobileLayananOpen = !mobileLayananOpen" class="w-full flex items-center justify-between py-2 font-medium text-[#111]">
              Produk & Layanan
              <svg class="w-4 h-4 transition-transform" :class="mobileLayananOpen && 'rotate-180'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="mobileLayananOpen" class="pl-4 mt-2 space-y-4">
              <div v-for="group in layananMenu" :key="group.title">
                <p class="text-xs font-semibold text-gray-500 mb-1">
                  {{ group.title }}
                </p>

                <router-link v-for="item in group.items" :key="item.to" :to="item.to" @click="closeMobile" class="block py-1 text-sm text-gray-700 hover:text-[#fd543a]">
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <router-link to="/cabang" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/cabang')">
            Cabang Kami
            <span v-if="currentRoute === '/cabang'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
          </router-link>

          <router-link to="/blog" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/blog')">
            Berita & Edukasi
            <span v-if="currentRoute === '/blog'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#fd543a] rounded-full"></span>
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
      { label: "Radiologi & Penunjang", to: "/services/radiologi" },
    ],
  },
];
const mobileLayananOpen = ref(false);

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
  }, 180);
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

/* modern dropdown transition */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.995);
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

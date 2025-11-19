<template>
  <nav id="app-navbar" :class="[
    'fixed top-0 left-0 right-0 z-99999 transition-all duration-500',
    navBg ? 'backdrop-blur-md bg-white/90 border-b border-white/20 shadow-lg scrolled' : 'bg-transparent'
  ]" role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto flex items-center px-6 py-3">
      <div class="flex items-center flex-none">
        <img src="/assets/images/Logo-CMC.png" alt="Caya Text" class="h-9 sm:block object-contain nav-img" />
      </div>
      <div class="flex-1 flex justify-center">
        <div class="hidden md:flex items-center gap-12 font-medium tracking-[0.03em]">
          <router-link to="/" class="nav-link hover:scale-[1.05] transition-all duration-300 relative"
            :class="getNavLinkClass('/')">
            Home
            <span v-if="currentRoute === '/'"
              class="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF7D14] transition-all duration-300"></span>
          </router-link>
          <router-link to="/about" class="nav-link hover:scale-[1.05] transition-all duration-300 relative"
            :class="getNavLinkClass('/about')">
            About
            <span v-if="currentRoute === '/about'"
              class="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF7D14] transition-all duration-300"></span>
          </router-link>
          <router-link to="/mcu" class="nav-link hover:scale-[1.05] transition-all duration-300 relative"
            :class="getNavLinkClass('/mcu')">
            Medical Check Up
            <span v-if="currentRoute === '/mcu'"
              class="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF7D14] transition-all duration-300"></span>
          </router-link>
          <router-link to="/cabang" class="nav-link hover:scale-[1.05] transition-all duration-300 relative"
            :class="getNavLinkClass('/cabang')">
            Our Clinics
            <span v-if="currentRoute === '/cabang'"
              class="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF7D14] transition-all duration-300"></span>
          </router-link>
          <router-link to="/blog" class="nav-link hover:scale-[1.05] transition-all duration-300 relative"
            :class="getNavLinkClass('/cabang')">
            Blog
            <span v-if="currentRoute === '/blog'"
              class="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF7D14] transition-all duration-300"></span>
          </router-link>
        </div>
      </div>

      <!-- right: actions -->
      <div class="flex-none flex items-center gap-3">
        <!-- Tombol Reservasi - Hanya tampil di desktop -->
        <button @click="onReserve"
          class="hidden sm:flex group rounded-[3px] px-4 py-1 font-semibold text-sm bg-gradient-to-r from-[#FF7D14] to-[#F94327] outline-4 outline-[#f5751f] shadow-lg hover:scale-[1.05] transition-all duration-300 items-center"
          :style="navBg ? { color: '#000000' } : { color: '#fff' }">
          Reservasi
          <div class="ml-1 group-hover:translate-x-0.5 inline-block transition-transform duration-300 -rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"
              :style="navBg ? { color: '#000000' } : { color: '#fff' }">
              <path fill="currentColor" d="m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15z" />
            </svg>
          </div>
        </button>

        <!-- mobile toggle -->
        <button @click="toggleMobile" class="md:hidden p-2 ml-2 rounded focus:outline-none"
          :aria-expanded="mobileOpen.toString()">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="#374151">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none"
            stroke="#374151">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="mobileOpen" class="md:hidden bg-[#ffffffb9] shadow-md border-t border-gray-100">
        <div class="px-4 py-4 space-y-2">
          <router-link to="/" @click="closeMobile" class="block py-2 font-medium relative transition-all duration-300"
            :class="getMobileNavLinkClass('/')">
            Home
            <span v-if="currentRoute === '/'" class="absolute bottom-1 left-0 w-1 h-6 bg-[#FF7D14] rounded-full"></span>
          </router-link>
          <router-link to="/about" @click="closeMobile"
            class="block py-2 font-medium relative transition-all duration-300"
            :class="getMobileNavLinkClass('/about')">
            About
            <span v-if="currentRoute === '/about'"
              class="absolute bottom-1 left-0 w-1 h-6 bg-[#FF7D14] rounded-full"></span>
          </router-link>
          <router-link to="/mcu" @click="closeMobile"
            class="block py-2 font-medium relative transition-all duration-300" :class="getMobileNavLinkClass('/mcu')">
            Medical Check Up
            <span v-if="currentRoute === '/mcu'"
              class="absolute bottom-1 left-0 w-1 h-6 bg-[#FF7D14] rounded-full"></span>
          </router-link>
          <router-link to="/cabang" @click="closeMobile"
            class="block py-2 font-medium relative transition-all duration-300"
            :class="getMobileNavLinkClass('/cabang')">
            Our Clinics
            <span v-if="currentRoute === '/cabang'"
              class="absolute bottom-1 left-0 w-1 h-6 bg-[#FF7D14] rounded-full"></span>
          </router-link>

          <a @click="closeMobile" href="#blog" class="block py-2 font-medium relative transition-all duration-300"
            :class="getMobileNavLinkClass('blog')">
            Blog
            <span v-if="activeSection === 'blog'"
              class="absolute bottom-1 left-0 w-1 h-6 bg-[#FF7D14] rounded-full"></span>
          </a>

          <!-- Tombol Reservasi di Mobile Menu -->
          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              class="w-full px-4 py-2 bg-[#FF7D14] text-black rounded font-semibold hover:bg-[#e67931] transition-colors duration-300">
              Reservasi
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileOpen = ref(false);
const navBg = ref(false);
const activeSection = ref('');

const currentRoute = computed(() => route.path);

function onScroll() {
  navBg.value = window.scrollY > 50;

  // Deteksi section aktif untuk highlight 
  const blogSection = document.getElementById('blog');
  if (blogSection) {
    const rect = blogSection.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = 'blog';
    }
  }
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
  document.body.style.overflow = mobileOpen.value ? 'hidden' : '';
}

function closeMobile() {
  mobileOpen.value = false;
  document.body.style.overflow = '';
}

// Fungsi untuk mendapatkan class nav link berdasarkan route aktif
function getNavLinkClass(targetRoute) {
  const baseClass = navBg.value ? 'text-[#374151] hover:text-[#FF7D14]' : 'text-white hover:text-[#FF7D14]';
  const activeClass = currentRoute.value === targetRoute ? 'text-[#FF7D14] font-semibold' : '';
  return `${baseClass} ${activeClass}`;
}

// Fungsi untuk mobile nav link
function getMobileNavLinkClass(targetRoute) {
  const isActive = currentRoute.value === targetRoute || activeSection.value === targetRoute;
  return isActive ? 'text-[#FF7D14] pl-3' : 'text-[#111] hover:text-[#FF7D14] hover:pl-3';
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  document.body.style.overflow = '';
});

const navLinkStyle = computed(() => ({
  color: navBg.value ? '#374151' : '#ffffff'
}));

function onReserve() {
  window.location.href = '/appointment.html';
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
  color: #FF7D14 !important;
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
</style>
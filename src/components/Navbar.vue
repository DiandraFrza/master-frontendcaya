<template>
  <nav id="app-navbar" :class="[
    'fixed top-0 left-0 right-0 z-99999 transition-all duration-500',
    navBg ? 'backdrop-blur-md bg-white/90 border-b border-white/20 shadow-lg scrolled' : 'bg-transparent'
  ]" role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto flex items-center px-6 py-3">
      <div class="flex items-center flex-none">
        <!-- <img src="/assets/images/logo-caya.svg" alt="Caya Logo" class="w-10 h-10 object-contain nav-img" /> -->
        <img src="/assets/images/Logo-CMC.png" alt="Caya Text" class="h-9 sm:block object-contain nav-img" />
      </div>
      <div class="flex-1 flex justify-center">
        <div class="hidden md:flex items-center gap-12 font-medium tracking-[0.03em]">
          <a href="#home" class="nav-link transition-colors hover:scale-[1.05] transform-3d" :class="navLinkClass" :style="navLinkStyle">Home</a>
          <a href="#services" class="nav-link transition-colors hover:scale-[1.05] transform-3d" :class="navLinkClass" :style="navLinkStyle">About</a>
          <a href="#packages" class="nav-link transition-colors hover:scale-[1.05] transform-3d" :class="navLinkClass" :style="navLinkStyle">Medical
            Check Up</a>
          <a href="#branches" class="nav-link transition-colors hover:scale-[1.05] transform-3d" :class="navLinkClass" :style="navLinkStyle">Our
            Clinics</a>
          <a href="#blog" class="nav-link transition-colors hover:scale-[1.05] transform-3d" :class="navLinkClass" :style="navLinkStyle">Blog</a>
        </div>
      </div>

      <!-- right: actions -->
      <div class="flex-none flex items-center gap-3">
        <!-- Reservasi button (converted from JSX -> Vue template) -->
        <button @click="onReserve"
          class="sm:hidden group rounded-[3px] px-2 py-1 font-semibold text-sm bg-[#e67931] outline-4 outline-[#eb7a2ea8] text-black shadow-lg hover:scale-[1.05] transition-all duration-300 flex items-center\">
          Reservasi
          <div class="-rotate-90 group-hover:-rotate-65 inline-block transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" aria-hidden="true">
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
          <a @click="closeMobile" href="#home"
            :class="['block py-2 font-medium', navBg ? 'text-[#374151]' : 'text-[#111]']">Home</a>
          <a @click="closeMobile" href="#services"
            :class="['block py-2 font-medium', navBg ? 'text-[#374151]' : 'text-[#111]']">About</a>
          <a @click="closeMobile" href="#packages"
            :class="['block py-2 font-medium', navBg ? 'text-[#374151]' : 'text-[#111]']">Medical Check Up</a>
          <a @click="closeMobile" href="#branches"
            :class="['block py-2 font-medium', navBg ? 'text-[#374151]' : 'text-[#111]']">Our Clinics</a>
          <a @click="closeMobile" href="#blog"
            :class="['block py-2 font-medium', navBg ? 'text-[#374151]' : 'text-[#111]']">Blog</a>

          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button class="w-full px-4 py-2 bg-[#ff7a1f] text-black rounded font-semibold">Reservasi</button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const mobileOpen = ref(false);
const navBg = ref(false);

function onScroll() {
  navBg.value = window.scrollY > 50;
}
function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
  document.body.style.overflow = mobileOpen.value ? 'hidden' : '';
}
function closeMobile() {
  mobileOpen.value = false;
  document.body.style.overflow = '';
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  document.body.style.overflow = '';
});

const navLinkClass = computed(() => (navBg.value ? 'text-[#374151] hover:text-[#ff7a1f]' : 'text-white hover:text-[#ff7a1f]'));
const navLinkStyle = computed(() => ({ color: navBg.value ? '#374151' : '#ffffff' }));

function onReserve() {
  window.location.href = '/appointment.html';
}
</script>

<style>
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
}

#app-navbar .nav-link:hover {
  color: #ff7a1f !important;
}
</style>

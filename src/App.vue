<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './pages/Hero.vue';
import About from './pages/About.vue';
import MedicalCheckUp from './pages/MedicalCheckUp.vue';
import Footer from './components/Footer.vue';

const showPreloader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showPreloader.value = false;
  }, 1000);
});
</script>

<template>
  <div>
    <div v-if="showPreloader" class="fixed inset-0 z-9999 flex items-center justify-center bg-light" id="dzPreloader">
      <div
        class="block w-32.5 h-1 rounded-3xl bg-white relative before:absolute before:bg-primary before:top-0 before:left-0 before:w-0 before:h-full before:rounded-3xl before:animate-dzMoving">
      </div>
    </div>
    <teleport to="body">
      <Navbar />
    </teleport>
    
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="page-content">
          <div id="main-content">
            <Hero />
            <About />
            <MedicalCheckUp />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

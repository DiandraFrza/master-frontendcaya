<!-- src/App.vue -->
<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app-root">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>

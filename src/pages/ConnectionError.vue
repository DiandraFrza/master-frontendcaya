<!-- @format -->

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-2xl">
      <!-- Header Section -->
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-3xl px-8 py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Koneksi Tidak Stabil</h1>
      </div>

      <!-- Content Section -->
      <div class="bg-white rounded-b-3xl px-8 py-12 shadow-lg text-center">
        <p class="text-gray-700 text-lg mb-8">Silakan refresh halaman atau cek jaringan Anda.</p>

        <!-- Buttons -->
        <div class="space-y-3 md:space-y-0 md:flex md:gap-4 md:justify-center">
          <button @click="refreshPage" class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300">Refresh Halaman</button>
          <router-link to="/" class="block w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 text-center"> Kembali ke Beranda </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const refreshPage = () => {
  window.location.reload();
};
</script>

<style scoped></style>

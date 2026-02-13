<!-- @format -->
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  primaryButtonText: {
    type: String,
    default: "Konsultasi via WhatsApp",
  },
  secondaryButtonText: {
    type: String,
    required: true,
  },
  secondaryButtonTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="m-12 md:m-16 text-center">
    <div class="bg-white rounded-3xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{{ title }}</h3>
      <p class="text-sm md:text-base text-gray-600 mb-6">{{ description }}</p>

      <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <a href="https://wa.me/081290094900" class="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:shadow-lg transition-all">
          <i class="fa-brands fa-whatsapp"></i>
          {{ primaryButtonText }}
        </a>
        <router-link :to="secondaryButtonTo" class="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-gray-50 transition-colors">
          <i class="fa-solid fa-angle-up"></i>
          {{ secondaryButtonText }}
        </router-link>
      </div>
    </div>
  </div>
</template>

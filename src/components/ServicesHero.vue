<!-- @format -->

<script setup>
/**
 * ServicesHero - Dynamic Hero Component for Service Pages
 *
 * Usage:
 * <ServicesHero
 *   :eyebrow="{ icon: 'fa-flask-vial', text: 'Laboratorium Klinik' }"
 *   :title="{ main: 'Pemeriksaan Laboratorium', highlight: 'Akurat & Terpercaya' }"
 *   description="Pemeriksaan darah, urin, dan parameter klinis dengan standar mutu laboratorium terkini untuk hasil yang akurat dan dapat dipercaya."
 *   :metaItems="[
 *     { icon: 'fa-clock', text: 'Hasil cepat' },
 *     { icon: 'fa-user-doctor', text: 'Analis profesional' },
 *     { icon: 'fa-file-waveform', text: 'Hasil digital' }
 *   ]"
 * />
 */

defineProps({
  eyebrow: {
    type: Object,
    required: true,
    validator: (value) => value.icon && value.text,
  },
  title: {
    type: Object,
    required: true,
    validator: (value) => value.main && value.highlight,
  },
  description: {
    type: String,
    required: true,
  },
  metaItems: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0 && value.every((item) => item.icon && item.text),
  },
  // Optional: customize gradient colors (default: orange theme)
  gradientFrom: {
    type: String,
    default: "from-orange-600",
  },
  gradientVia: {
    type: String,
    default: "via-orange-500",
  },
  gradientTo: {
    type: String,
    default: "to-orange-700",
  },
});
</script>

<template>
  <section class="relative overflow-hidden bg-linear-to-br" :class="[gradientFrom, gradientVia, gradientTo]">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-15">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-white rounded-full blur-3xl"></div>
    </div>

    <div class="relative container mx-auto px-4 max-w-7xl py-16 text-white">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
          <i :class="`fa-solid ${eyebrow.icon}`"></i>
          <span>{{ eyebrow.text }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
          {{ title.main }}<br />
          <span class="text-orange-200">{{ title.highlight }}</span>
        </h1>

        <!-- Description -->
        <p class="text-orange-100 text-base md:text-lg leading-relaxed max-w-2xl">{{ description }}</p>

        <!-- Meta info -->
        <div class="flex flex-wrap items-center gap-6 mt-6 text-sm text-orange-100">
          <div v-for="(item, index) in metaItems" :key="index" class="flex items-center gap-2">
            <i :class="`fa-solid ${item.icon}`"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

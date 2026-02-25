<!-- @format -->

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white" :class="{ 'min-h-[400px] flex items-center': variant === 'centered', 'py-16': variant === 'default' }">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-15 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div v-if="variant === 'default'" class="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
    </div>
    <!-- Main Content -->
    <div class="container relative z-1 mx-auto px-4 max-w-7xl" :class="{ 'text-center': variant === 'centered' }">
      <div :class="{ 'max-w-3xl': variant === 'default', 'mx-auto': variant === 'centered' }">
        <!-- Eyebrow -->
        <div v-if="eyebrow" class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur">
          <i v-if="eyebrowIcon" :class="`fa-solid ${eyebrowIcon}`"></i>
          <span>{{ eyebrow }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" :class="{ 'text-white': true }">
          {{ title }}
          <span v-if="subtitle" class="text-orange-100 block mt-1">{{ subtitle }}</span>
        </h1>

        <!-- Description -->
        <p v-if="description" class="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl" :class="{ 'mx-auto': variant === 'centered' }">
          {{ description }}
        </p>

        <!-- Meta info -->
        <div v-if="metaItems && metaItems.length > 0" class="flex flex-wrap items-center gap-6 mt-6 text-sm text-white/90" :class="{ 'justify-center': variant === 'centered' }">
          <div v-for="(item, index) in metaItems" :key="index" class="flex items-center gap-2">
            <i v-if="item.icon" :class="`fa-solid ${item.icon}`"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>

        <!-- Breadcrumb (for centered variant) -->
        <nav v-if="showBreadcrumb && variant === 'centered'" class="mt-6">
          <ul class="inline-flex items-center gap-2 rounded-full py-2 px-6 bg-white/10 backdrop-blur-sm">
            <li class="text-sm font-normal text-white/90">
              <router-link to="/" class="hover:text-white transition-colors">Beranda</router-link>
            </li>
            <li class="text-sm font-normal text-white/70">
              <i class="fa-solid fa-chevron-right text-xs mx-2"></i>
            </li>
            <li class="text-sm font-normal text-white">{{ title }}</li>
          </ul>
        </nav>

        <!-- Extra info (e.g., last updated) -->
        <p v-if="extraInfo" class="text-white/80 text-sm mt-4">
          {{ extraInfo.label }}: <strong class="text-white">{{ extraInfo.value }}</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  // Variant: 'default' (left-aligned with eyebrow, desc, meta) or 'centered' (breadcrumb style)
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "centered"].includes(value),
  },
  // Title
  title: {
    type: String,
    required: true,
  },
  // Subtitle (shown in orange-100 color)
  subtitle: {
    type: String,
    default: "",
  },
  // Eyebrow text
  eyebrow: {
    type: String,
    default: "",
  },
  // Eyebrow icon (FontAwesome class)
  eyebrowIcon: {
    type: String,
    default: "",
  },
  // Description
  description: {
    type: String,
    default: "",
  },
  // Meta items array [{ icon: 'fa-icon', text: 'Label' }]
  metaItems: {
    type: Array,
    default: () => [],
  },
  // Show breadcrumb
  showBreadcrumb: {
    type: Boolean,
    default: false,
  },
  // Show social sidebar
  showSocialSidebar: {
    type: Boolean,
    default: false,
  },
  // Show Twitter in social sidebar
  showTwitter: {
    type: Boolean,
    default: true,
  },
  // Extra info (e.g., last updated)
  extraInfo: {
    type: Object,
    default: null,
    // { label: 'Pembaruan Terakhir', value: 'Januari 2026' }
  },
});
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>

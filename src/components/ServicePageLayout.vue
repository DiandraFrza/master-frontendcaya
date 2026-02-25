<!-- @format -->
<!-- Layout umum untuk halaman layanan -->

<script setup>
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServicesHero from "@/components/ServicesHero.vue";

defineProps({
  // Hero props
  eyebrowIcon: { type: String, default: "fa-stethoscope" },
  eyebrowText: { type: String, required: true },
  titleMain: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  metaItems: { type: Array, default: () => [] },
  gradientFrom: { type: String, default: "from-orange-500" },
  gradientVia: { type: String, default: "via-orange-600" },
  gradientTo: { type: String, default: "to-orange-700" },

  // Content
  showBackButton: { type: Boolean, default: true },
  showFilter: { type: Boolean, default: false },
  filterComponent: { type: Object, default: null },
  filterProps: { type: Object, default: () => ({}) },
  showSearch: { type: Boolean, default: false },
  searchQuery: { type: String, default: "" },
  searchPlaceholder: { type: String, default: "Cari..." },

  // Info box
  infoTitle: { type: String, default: "" },
  infoItems: { type: Array, default: () => [] },

  // Stats
  stats: { type: Array, default: () => [] },
});

defineEmits(["update:searchQuery", "search"));
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero :eyebrow="{ icon: eyebrowIcon, text: eyebrowText }" :title="{ main: titleMain, highlight: titleHighlight }" :description="description" :metaItems="metaItems" :gradientFrom="gradientFrom" :gradientVia="gradientVia" :gradientTo="gradientTo" />

      <!-- Stats Bar (optional) -->
      <div v-if="stats.length" class="bg-white border-b border-gray-100 py-6">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">{{ stat.value }}</div>
              <div class="text-xs md:text-sm text-white">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-4 gap-6">
            <!-- Sidebar -->
            <ServiceSidebar />

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <!-- Back Button -->
              <button v-if="showBackButton" @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-white hover:text-orange-600 mb-6 transition-colors">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>

              <!-- Header with Filter/Search -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <slot name="header">
                  <!-- Filter -->
                  <component v-if="showFilter && filterComponent" :is="filterComponent" v-bind="filterProps" />

                  <!-- Search -->
                  <div v-if="showSearch" class="relative mt-4">
                    <input :value="searchQuery" @input="$emit('update:searchQuery', $event.target.value)" type="text" :placeholder="searchPlaceholder" class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                    <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <button v-if="searchQuery" @click="$emit('update:searchQuery', '')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                      <i class="fa-solid fa-times-circle"></i>
                    </button>
                  </div>
                </slot>
              </div>

              <!-- Main Content Slot -->
              <slot name="content" />

              <!-- Info Box (optional) -->
              <div v-if="infoTitle && infoItems.length" class="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-8">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  {{ infoTitle }}
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li v-for="(item, index) in infoItems" :key="index" class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Extra slot for custom content below -->
              <slot name="extra" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page-content {
  min-height: 100vh;
}
</style>

<!-- @format -->

<script setup>
defineProps({
  modelValue: String,
  title: String,
  subtitle: String,
  placeholder: {
    type: String,
    default: "Cari pemeriksaan...",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
        <p v-if="subtitle" class="text-gray-600 text-sm mt-1">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div class="relative">
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" type="text" class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
      <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
    </div>
  </div>
</template>

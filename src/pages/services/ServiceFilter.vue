<!-- @format -->

<!-- components/services/ServiceFilter.vue -->
<script setup>
defineProps({
  options: Object,
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="mb-6">
    <div class="flex flex-wrap gap-2">
      <button v-for="(item, key) in options" :key="key" @click="$emit('update:modelValue', key)" :class="['px-4 py-2 rounded-full text-sm transition', modelValue === key ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100']">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

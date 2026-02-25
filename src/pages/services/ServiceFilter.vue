<!-- @format -->
<!-- Komponen filter untuk halaman services -->

<script setup>
defineProps({
  options: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "orange", // orange, blue, cyan, indigo, green, purple, teal, rose
  },
});

defineEmits(["update:modelValue"]);

const colorClasses = {
  orange: {
    inactive: "bg-orange-50 text-orange-700 hover:bg-orange-100",
    active: "bg-orange-600 text-white shadow-md",
  },
  blue: {
    inactive: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    active: "bg-blue-600 text-white shadow-md",
  },
  cyan: {
    inactive: "bg-cyan-50 text-cyan-700 hover:bg-cyan-100",
    active: "bg-cyan-600 text-white shadow-md",
  },
  indigo: {
    inactive: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    active: "bg-indigo-600 text-white shadow-md",
  },
  green: {
    inactive: "bg-green-50 text-green-700 hover:bg-green-100",
    active: "bg-green-600 text-white shadow-md",
  },
  purple: {
    inactive: "bg-purple-50 text-purple-700 hover:bg-purple-100",
    active: "bg-purple-600 text-white shadow-md",
  },
  teal: {
    inactive: "bg-teal-50 text-teal-700 hover:bg-teal-100",
    active: "bg-teal-600 text-white shadow-md",
  },
  rose: {
    inactive: "bg-rose-50 text-rose-700 hover:bg-rose-100",
    active: "bg-rose-600 text-white shadow-md",
  },
};
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="(item, key) in options"
      :key="key"
      @click="$emit('update:modelValue', key)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        modelValue === key
          ? (colorClasses[color]?.active ?? colorClasses.orange.active)
          : (colorClasses[color]?.inactive ?? colorClasses.orange.inactive),
      ]"
    >
      <span class="flex items-center gap-2">
        <i v-if="item.icon" :class="`fa-solid ${item.icon}`"></i>
        {{ item.name }}
      </span>
    </button>
  </div>
</template>

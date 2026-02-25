<!-- @format -->
<!-- Komponen Card untuk menampilkan item pemeriksaan -->

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "fa-stethoscope",
  },
  result: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    default: "",
  },
  requiresReservation: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "orange",
  },
});

const colorClasses = {
  orange: {
    bg: "bg-orange-50",
    bgHover: "group-hover:bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    badge: "bg-amber-100 text-amber-700",
  },
  blue: {
    bg: "bg-blue-50",
    bgHover: "group-hover:bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  cyan: {
    bg: "bg-cyan-50",
    bgHover: "group-hover:bg-cyan-100",
    text: "text-cyan-600",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-700",
  },
  indigo: {
    bg: "bg-indigo-50",
    bgHover: "group-hover:bg-indigo-100",
    text: "text-indigo-600",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
  green: {
    bg: "bg-green-50",
    bgHover: "group-hover:bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  purple: {
    bg: "bg-purple-50",
    bgHover: "group-hover:bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  teal: {
    bg: "bg-teal-50",
    bgHover: "group-hover:bg-teal-100",
    text: "text-teal-600",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
  rose: {
    bg: "bg-rose-50",
    bgHover: "group-hover:bg-rose-100",
    text: "text-rose-600",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-4 transition-all duration-300 group hover:-translate-y-1">
    <div class="flex items-start gap-3">
      <!-- Icon -->
      <div :class="['w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110', colorClasses[color].bg, colorClasses[color].bgHover]">
        <i :class="`fa-solid ${icon} text-xl ${colorClasses[color].text}`"></i>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <h4 class="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
            {{ name }}
          </h4>
          <span v-if="requiresReservation" class="flex-shrink-0 px-2 py-0.5 text-[10px] font-bold rounded-full animate-pulse" :class="colorClasses[color].badge">
            <i class="fa-solid fa-calendar-check mr-1"></i>
            Reservasi
          </span>
        </div>

        <p v-if="description" class="text-xs text-white mt-1 line-clamp-2">
          {{ description }}
        </p>

        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center gap-1.5 text-xs text-white">
            <i class="fa-regular fa-clock"></i>
            <span>{{ result || "-" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

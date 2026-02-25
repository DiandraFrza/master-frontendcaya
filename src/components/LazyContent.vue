<!-- @format -->

<template>
  <div class="lazy-content-wrapper" ref="contentElement">
    <div v-if="isVisible" class="lazy-content" :class="animationClass">
      <slot />
    </div>
    <div v-else class="lazy-content-placeholder">
      <div class="placeholder-shimmer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  animation: {
    type: String,
    default: "fade-in",
    validator: (value) => ["fade-in", "slide-up", "scale-in"].includes(value),
  },
  threshold: {
    type: Number,
    default: 0.1,
  },
});

const isVisible = ref(false);
const contentElement = ref(null);

onMounted(() => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: props.threshold,
        rootMargin: "50px 0px",
      },
    );

    observer.observe(contentElement.value);
  } else {
    // Fallback
    isVisible.value = true;
  }
});

const animationClass = () => {
  return `animate-${props.animation}`;
};
</script>

<style scoped>
.lazy-content-wrapper {
  width: 100%;
}

.lazy-content {
  animation: v-bind("animationClass") 0.6s ease-out forwards;
}

.lazy-content-placeholder {
  width: 100%;
  min-height: 100px;
  background: linear-gradient(90deg, #f0f0f0 0%, #e8e8e8 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: shimmer 2s infinite;
}

.placeholder-shimmer {
  width: 100%;
  height: 100%;
  background: inherit;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation class bindings */
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
}
</style>

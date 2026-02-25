<!-- @format -->

<template>
  <div class="lazy-image-wrapper" :style="{ aspectRatio: aspectRatio }">
    <img v-if="isLoaded" :src="src" :alt="alt" :class="['lazy-image', { 'fade-in': isLoaded }]" @load="onImageLoad" @error="onImageError" />
    <div v-else class="lazy-image-placeholder">
      <svg viewBox="0 0 50 50" class="placeholder-icon">
        <circle cx="25" cy="25" r="20" class="placeholder-circle" />
      </svg>
    </div>
    <noscript>
      <img :src="src" :alt="alt" />
    </noscript>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
  aspectRatio: {
    type: String,
    default: "16 / 9",
  },
});

const isLoaded = ref(false);
const imageElement = ref(null);

onMounted(() => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isLoaded.value = true;
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "50px",
      },
    );

    observer.observe(imageElement.value);
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    isLoaded.value = true;
  }
});

const onImageLoad = () => {
  // Image loaded successfully
};

const onImageError = () => {
  console.error("Failed to load image:", props.src);
};
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 8px;
}

.lazy-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.lazy-image.fade-in {
  opacity: 1;
}

.lazy-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  animation: pulse 1.5s ease-in-out infinite;
}

.placeholder-icon {
  width: 40px;
  height: 40px;
  opacity: 0.3;
}

.placeholder-circle {
  fill: none;
  stroke: var(--primary, #00bde0);
  stroke-width: 2;
}

@keyframes pulse {
  0%,
  100% {
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  }
  50% {
    background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%);
  }
}
</style>

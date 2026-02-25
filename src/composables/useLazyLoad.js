/** @format */

import { ref } from "vue";

export function useLazyLoad(options = {}) {
  const { threshold = 0.1, rootMargin = "50px" } = options;

  const isVisible = ref(false);
  let observer = null;

  const createObserver = (element, callback) => {
    if (!("IntersectionObserver" in window)) {
      // Fallback for browsers without IntersectionObserver support
      isVisible.value = true;
      callback?.();
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          callback?.();
          if (observer) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
    }
  };

  return {
    isVisible,
    createObserver,
    cleanup,
  };
}

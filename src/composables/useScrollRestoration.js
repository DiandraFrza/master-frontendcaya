/** @format */

/**
 * useScrollRestoration Composable
 *
 * Advanced scroll management for complex UI scenarios:
 * - Manage scroll position for individual containers (not just window)
 * - Programmatic scroll to specific elements
 * - Scroll state debugging
 * - Performance monitoring
 *
 * USAGE EXAMPLES:
 *
 * 1. Basic scroll restoration:
 *    const { saveScroll, restoreScroll } = useScrollRestoration()
 *    onBeforeUnmount(() => saveScroll())
 *    onMounted(() => restoreScroll())
 *
 * 2. Scroll to element by ID:
 *    const { scrollToElement } = useScrollRestoration()
 *    scrollToElement('section-id')
 *
 * 3. Monitor scroll events:
 *    const { isScrolling, scrollPosition } = useScrollRestoration()
 *    watch(scrollPosition, (pos) => console.log('Scrolled to:', pos))
 */

import { ref, onMounted, onUnmounted, watch } from "vue";

export const useScrollRestoration = () => {
  // State management
  const scrollPosition = ref({ x: 0, y: 0 });
  const isScrolling = ref(false);
  const scrollHistory = ref(new Map()); // Store scroll positions per route
  let scrollTimeout;

  /**
   * Save current scroll position to history
   * Called before navigation away from a page
   */
  const saveScroll = () => {
    scrollPosition.value = {
      x: window.scrollX || window.pageXOffset,
      y: window.scrollY || window.pageYOffset,
    };
    scrollHistory.value.set(window.location.pathname, scrollPosition.value);
  };

  /**
   * Restore scroll position
   * Called after navigation to a page
   */
  const restoreScroll = async () => {
    // Use nextTick to wait for DOM rendering
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const { x, y } = scrollPosition.value;
        window.scrollTo({
          left: x,
          top: y,
          behavior: "smooth",
        });
        resolve();
      });
    });
  };

  /**
   * Scroll to specific element by ID
   * Useful for anchor navigation
   */
  const scrollToElement = async (elementId, offset = 80) => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
          resolve();
        } else {
          console.warn(`Element with ID "${elementId}" not found`);
          resolve();
        }
      });
    });
  };

  /**
   * Scroll to top of page
   */
  const scrollToTop = async () => {
    return new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Wait for animation to complete
      setTimeout(resolve, 1000);
    });
  };

  /**
   * Listen to scroll events
   */
  const handleScroll = () => {
    isScrolling.value = true;

    // Update position
    scrollPosition.value = {
      x: window.scrollX || window.pageXOffset,
      y: window.scrollY || window.pageYOffset,
    };

    // Debounce scroll end detection
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false;
    }, 150);
  };

  /**
   * Get scroll history for debugging
   */
  const getScrollHistory = () => {
    return Object.fromEntries(scrollHistory.value);
  };

  /**
   * Clear scroll history
   */
  const clearScrollHistory = () => {
    scrollHistory.value.clear();
  };

  /**
   * Setup: attach scroll listener
   */
  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  /**
   * Cleanup: remove scroll listener
   */
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(scrollTimeout);
  });

  return {
    // State
    scrollPosition,
    isScrolling,
    scrollHistory,

    // Methods
    saveScroll,
    restoreScroll,
    scrollToElement,
    scrollToTop,
    getScrollHistory,
    clearScrollHistory,
  };
};

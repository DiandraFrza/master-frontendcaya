<!-- @format -->

# Scroll Position Preservation - Implementation Guide

## Executive Summary

This document outlines the production-ready approach to preserve scroll position and section context in the Vue 3 SPA without using cookies or localStorage. The solution leverages Vue Router's `scrollBehavior` hook and the browser's native history state API.

---

## Architecture Overview

```
User Navigation
      ↓
Vue Router Navigation Guard
      ↓
scrollBehavior Hook (router/index.js)
      ├─ Detect Navigation Type
      ├─ Retrieve Saved Position (if back/forward)
      ├─ Process Hash Navigation (if #section)
      └─ Default to Top (for new navigation)
      ↓
Browser Window Scroll
      ↓
Component Mounted → Optional: useScrollRestoration composable
```

---

## Implementation Scenarios

### Scenario 1: Back/Forward Navigation (Browser History)

**What happens:**

- User scrolls down the services page to 900px
- User clicks a link to privacy policy
- User clicks browser back button

**How it works:**

```javascript
// When leaving services page:
// Browser automatically saves: history.state = { position: { x: 0, y: 900 } }

// When clicking back:
scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return { ...savedPosition, behavior: 'smooth' }
    // ↑ Returns to scroll position 900px
  }
}
```

**Result:** User returns to exact scroll position where they left

---

### Scenario 2: Hash-Based Navigation

**What happens:**

- User clicks link to `/kebijakan-privasi#keamanan-data`
- Page should scroll to the section with id="keamanan-data"

**How it works:**

```javascript
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,           // Finds #keamanan-data
      behavior: 'smooth',    // Smooth scrolling animation
      top: 80                // Offset for fixed header
    }
  }
}
```

**HTML requirement:**

```html
<section id="keamanan-data">
  <h3>Keamanan Data</h3>
  <!-- content -->
</section>
```

**Result:** Page scrolls smoothly to the section with proper header offset

---

### Scenario 3: New Page Navigation

**What happens:**

- User clicks link to a different page
- No saved position, no hash navigation
- Page should scroll to top

**How it works:**

```javascript
scrollBehavior(to, from, savedPosition) {
  // Neither back/forward nor hash navigation
  return {
    top: 0,
    behavior: 'smooth'  // Smooth animation instead of instant jump
  }
}
```

**Result:** Page smoothly scrolls to top

---

## Advanced Usage: useScrollRestoration Composable

For component-level scroll management:

```vue
<script setup>
import { useScrollRestoration } from "@/composables/useScrollRestoration";
import { onBeforeUnmount } from "vue";

const { saveScroll, scrollToElement, scrollPosition, isScrolling } = useScrollRestoration();

// Save scroll position when leaving component
onBeforeUnmount(() => {
  saveScroll();
});

// Scroll to section on button click
const handleSectionClick = async () => {
  await scrollToElement("privacy-section");
};

// Monitor scroll state
watch(isScrolling, (value) => {
  console.log("User is scrolling:", value);
});
</script>

<template>
  <div>
    <button @click="handleSectionClick">Go to Privacy Section</button>
    <p>Current scroll position: {{ scrollPosition }}</p>
  </div>
</template>
```

---

## Best Practices

### 1. **Header Offset for Anchor Navigation**

```javascript
// If navbar has height: 80px
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 80  // ← Offset so content isn't hidden under navbar
    }
  }
}
```

### 2. **Performance Optimization**

```javascript
// ✅ GOOD: Uses passive event listener (useScrollRestoration.js)
window.addEventListener("scroll", handleScroll, { passive: true });

// ❌ BAD: Synchronous handler can block scrolling
window.addEventListener("scroll", handleScroll); // blocks rendering
```

### 3. **Handle Dynamic Content**

```javascript
// When content loads dynamically (images, data), scroll position may shift
// Use requestAnimationFrame to wait for rendering:

const scrollToElement = async (elementId) => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: "smooth" });
      resolve();
    });
  });
};
```

### 4. **Avoid Common Pitfalls**

```javascript
// ❌ DON'T: Save position in localStorage (bloats it unnecessarily)
// ✅ DO: Use history.state (browser native, auto-managed)

// ❌ DON'T: Instant scroll to top (jarring UX)
// ✅ DO: Smooth scroll (better perceived performance)

// ❌ DON'T: Scroll before component DOM is ready
// ✅ DO: Use nextTick or requestAnimationFrame
```

---

## Testing Scroll Behavior

```javascript
// Test 1: Back navigation preserves position
1. Navigate to /services/lab
2. Scroll down to 1000px
3. Navigate to /about
4. Click browser back
5. Expect: scroll position ~1000px

// Test 2: Hash navigation works
1. Navigate to /kebijakan-privasi#keamanan-data
2. Expect: page scrolls to #keamanan-data element

// Test 3: New navigation scrolls to top
1. Navigate between different pages
2. Expect: each page starts at top (but smoothly)

// Test 4: Mobile responsiveness
1. Test on mobile browser (touch scrolling)
2. Expect: smooth behavior on iOS/Android
```

---

## Current Implementation

The router is configured in `src/router/index.js`:

```javascript
scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return {
      ...savedPosition,
      behavior: 'smooth'
    }
  }

  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      top: 80  // Adjust based on your navbar height
    }
  }

  return {
    top: 0,
    behavior: 'smooth'
  }
}
```

**To customize:**

- Adjust `top: 80` based on your navbar height (check `navbar` component)
- Add scroll animation timing if needed
- Use composable for component-level control

---

## Browser Support

| Browser        | Support | Notes                     |
| -------------- | ------- | ------------------------- |
| Chrome 85+     | ✅ Full | Native support            |
| Firefox 77+    | ✅ Full | Native support            |
| Safari 13+     | ✅ Full | Native support            |
| Edge 85+       | ✅ Full | Native support            |
| iOS Safari 12+ | ✅ Full | Smooth behavior supported |
| Android Chrome | ✅ Full | Smooth behavior supported |

---

## Performance Considerations

- **Memory:** History state is auto-managed by browser (no manual cleanup needed)
- **CPU:** Scroll listeners use passive events (0 blocking cost)
- **GPU:** Smooth scrolling uses CSS animations (hardware accelerated)
- **Bundle:** No additional dependencies required

---

## Troubleshooting

### Scroll position not restoring

**Problem:** User navigates back but scroll doesn't restore
**Solution:**

1. Ensure router `scrollBehavior` is properly configured
2. Check if page height changes after load (images, API data)
3. Use `await nextTick()` before scrolling in components

### Hash navigation not working

**Problem:** Clicking anchor links (#section) doesn't scroll
**Solution:**

1. Verify element ID exists: `<section id="section-name">`
2. Check navbar height offset: adjust `top: 80` value
3. Ensure hash is URL-encoded if it contains special chars

### Jarring page jumps

**Problem:** Scrolling feels instant instead of smooth
**Solution:**

1. Check CSS: ensure no `scroll-behavior: auto` overrides
2. Use `behavior: 'smooth'` in scrollBehavior
3. Disable if browser doesn't support (fallback to auto)

---

## Files Modified/Created

- `src/router/index.js` - Production configuration
- `src/router/index_enhanced.js` - Documented reference
- `src/composables/useScrollRestoration.js` - Advanced composable
- `SCROLL_BEHAVIOR_GUIDE.md` - This documentation

---

## Next Steps

1. **Verify:** Test back/forward, hash, and new navigation
2. **Customize:** Adjust navbar height offset if needed
3. **Monitor:** Check browser DevTools for scroll performance
4. **Extend:** Use composable for component-specific needs if required

---

**Questions?** Review the code comments in `scrollBehavior` hook or composable source.

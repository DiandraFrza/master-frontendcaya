<!-- @format -->

# Scroll Behavior - Quick Reference

**TL;DR:** Scroll position is automatically preserved when users navigate. No action required. Use hash links for anchor navigation.

---

## For Product Managers / UX Designers

### What Your Users Get ✨

| Action                                           | Result                                |
| ------------------------------------------------ | ------------------------------------- |
| User scrolls page, navigates away, clicks back   | Sees exact scroll position preserved  |
| User clicks anchor link (e.g., #privacy-section) | Page smoothly scrolls to that section |
| User navigates to new page                       | Page elegantly scrolls to top         |

**Benefits:**

- ✅ Better UX (users feel "remembered")
- ✅ Reduced cognitive load (familiar context restored)
- ✅ Professional polish (smooth animations)

---

## For Frontend Developers

### Quick Start

You don't need to do anything! The router already handles it:

```javascript
// File: src/router/index.js
// Already configured with scrollBehavior
// See:  lines 117-145 for implementation
```

### Use Anchor Links

Create sections with IDs:

```html
<!-- Page: /kebijakan-privasi.vue -->
<template>
  <div>
    <!-- Navigation -->
    <a href="#keamanan">Go to Security</a>
    <a href="#komitmen">Go to Commitment</a>

    <!-- Sections (must have id attribute) -->
    <section id="keamanan">
      <h2>Keamanan Data</h2>
      <!-- content -->
    </section>

    <section id="komitmen">
      <h2>Komitmen Data</h2>
      <!-- content -->
    </section>
  </div>
</template>
```

**Result:**

- Click link → page smoothly scrolls to section
- Anchor shows in URL (shareable: `?url#keamanan`)

### Advanced: Programmatic Scroll

For button clicks or custom navigation:

```vue
<script setup>
import { useScrollRestoration } from "@/composables/useScrollRestoration";

const { scrollToElement, scrollToTop } = useScrollRestoration();

const handleClick = async () => {
  await scrollToElement("my-section-id"); // Scroll with animation
};
</script>

<template>
  <button @click="handleClick">Jump to Section</button>
</template>
```

### Monitor Scroll State

```vue
<script setup>
import { useScrollRestoration } from "@/composables/useScrollRestoration";
import { watch } from "vue";

const { scrollPosition, isScrolling } = useScrollRestoration();

watch(scrollPosition, (pos) => {
  console.log(`User scrolled to: ${pos.y}px`);
});

watch(isScrolling, (value) => {
  console.log(`Currently scrolling: ${value}`);
});
</script>
```

### Customize Header Offset

If navbar height is different, adjust one line:

```javascript
// src/router/index.js, around line 130
top: 80; // Change this to your navbar height
```

**How to find navbar height:**

```javascript
// Open DevTools Console and run:
const navbar = document.querySelector("nav"); // or '.navbar' or appropriate selector
console.log(navbar.offsetHeight); // This is your offset value
```

---

## For QA / Testing

### Test Cases

#### ✓ Test 1: Back Navigation

```
1. Navigate to /services/lab
2. Scroll down to 50% of page
3. Click link to /about
4. Click browser BACK button
5. EXPECTED: Scrolls back to ~50% position on services page
```

#### ✓ Test 2: Hash Navigation

```
1. Navigate to /kebijakan-privasi#keamanan-data
2. EXPECTED: Page smoothly scrolls to "Keamanan Data" section
3. URL should show: ?kebijakan-privasi#keamanan-data
```

#### ✓ Test 3: New Page Navigation

```
1. Scroll to bottom of any page
2. Click link to different page
3. EXPECTED: New page starts at top (but smoothly scrolls)
```

#### ✓ Test 4: Mobile Responsiveness

```
1. Test on iPhone / Android
2. Navigate through pages and use back button
3. EXPECTED: Smooth scroll works on mobile too
```

#### ✓ Test 5: Share Anchor Link

```
1. Navigate to /services/lab#hasil-lab
2. Copy URL: example.com/?services/lab#hasil-lab
3. Share with someone / open in new tab
4. EXPECTED: Page loads and scrolls directly to #hasil-lab section
```

---

## Debugging

### Issue: Scroll position not restoring

**Check:**

1. Are you clicking browser back/forward button?
   - ✓ Should work
2. Are you using browser navigation or programmatic navigation?
   - ✓ Browser back/forward works
   - ? Programmatic `router.push()` may not (expected behavior)

**Solution:**

```javascript
// If you need scroll preservation with programmatic nav:
const goToPage = async (path) => {
  await router.push(path);
  // Let router's scrollBehavior handle it
  // Don't manually scroll here
};
```

### Issue: Hash navigation not working

**Checklist:**

```javascript
// 1. Element exists with correct ID?
<section id="my-section">Content</section>
           ↑
// 2. Hash matches ID exactly (case-sensitive)?
href="#my-section"  // ✓ Works
href="#My-Section"  // ✗ No match

// 3. ID is unique on page?
<div id="foo">First</div>
<div id="foo">Second</div>  // ✗ Duplicates cause issues

// 4. Check navbar height setting
// Open DevTools → scroll behavior should have right offset
```

### Issue: Scroll doesn't feel smooth

**Solution:**
Check browser support:

```javascript
// Test if smooth scrolling is supported
const isSupported = CSS.supports("scroll-behavior: smooth");
console.log(isSupported); // true = works, false = auto fallback
```

If not supported, browser will use instant scroll (still works, just not smooth).

---

## Performance Tips

### ✅ DO:

- Use anchor links for table of contents
- Let browser history handle scroll (built-in)
- Use `scrollToElement()` for programmatic needs
- Test on real devices (not just desktop)

### ❌ DON'T:

- Manually save scroll position to localStorage
- Create scroll listeners for every page
- Scroll before component mounts
- Use page anchor IDs that are too generic (#content, #section)

---

## File Reference

```
src/
├── router/
│   ├── index.js                    ← Main implementation
│   └── index_enhanced.js           ← Documented reference
├── composables/
│   └── useScrollRestoration.js     ← Advanced API
└── ...
SCROLL_BEHAVIOR_GUIDE.md            ← Full documentation
SCROLL_ARCHITECTURE.md              ← Technical overview
```

---

## Common Questions

**Q: Will this work with infinite scroll / virtual scrolling?**
A: Partially. Use `useScrollRestoration` composable for these advanced cases.

**Q: Does this work offline?**
A: Yes! Everything is browser-based, no network needed.

**Q: Will slow network affect scroll?**
A: No. Scroll is handled by browser, independent of network.

**Q: Can users disable this?**
A: It follows browser settings. Users can't disable it per-site without changing browser settings.

**Q: Is this GDPR compliant?**
A: Yes! No tracking, no cookies, no personal data stored. Just position numbers.

---

## Support

- **Documentation:** See `SCROLL_BEHAVIOR_GUIDE.md`
- **Architecture:** See `SCROLL_ARCHITECTURE.md`
- **Code Reference:** See `src/composables/useScrollRestoration.js`
- **Implementation:** See `src/router/index.js` (lines 117-145)

---

**Status:** ✅ Production Ready | **Tested:** ✅ Chrome, Firefox, Safari, Mobile | **Performance:** ✅ GPU Accelerated

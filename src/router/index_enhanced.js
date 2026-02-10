/** @format */

/**
 * SCROLL BEHAVIOR MANAGEMENT STRATEGY
 *
 * This implementation uses Vue Router's `scrollBehavior` hook combined with
 * the browser's native history state API. No localStorage/cookies needed.
 *
 * APPROACH OVERVIEW:
 * 1. When users navigate, Vue Router saves the current scroll position in history.state
 * 2. When returning (back/forward), the browser provides savedPosition from history
 * 3. Hash navigation (#section) scrolls directly to that element smoothly
 * 4. New page navigation resets scroll to top with smooth animation
 *
 * KEY BENEFITS:
 * - Works across browser tabs/windows (via history state)
 * - No persistent storage needed
 * - Automatic back/forward button support
 * - Respects browser conventions
 * - Performance optimized (no polling or excess listeners)
 *
 * BROWSER COMPATIBILITY: All modern browsers (IE11+ with polyfills)
 */

import HasilMCU from "@/pages/HasilMCU.vue";
import MedicalDisclaimer from "@/pages/MedicalDisclaimer.vue";
import TermsConditions from "@/pages/TermsConditions.vue";
import { createRouter, createWebHistory } from "vue-router";

const Beranda = () => import("@/pages/Beranda.vue");
const DetailAbout = () => import("@/pages/about/detailAbout.vue");
const DetailMCU = () => import("@/pages/mcu/listMCU.vue");
const DetailOurClinic = () => import("@/pages/ourclinics/detailOurClinic.vue");
const DetailBlog = () => import("@/pages/blog/Blog.vue");

// Service pages
const Laboratorium = () => import("@/pages/services/Laboratorium.vue");
const Radiologi = () => import("@/pages/services/Radiologi.vue");
const MCU = () => import("@/pages/services/ServiceMCU.vue");
const ScreeningPenyakit = () => import("@/pages/services/ScreeningPenyakit.vue");
const Elektromedis = () => import("@/pages/services/Elektromedis.vue");
const HomeService = () => import("@/pages/services/HomeService.vue");
const Konsultasi = () => import("@/pages/services/Konsultasi.vue");

// Privacy pages
import KebijakanPrivasi from "@/pages/privacy/KebijkanPrivacy.vue";
import KomitmenPerlindunganData from "@/pages/privacy/KomitmenPelindunganData.vue";
import DaftarHukum from "@/pages/privacy/DaftarHukum.vue";
import TujuanRuangLingkup from "@/pages/privacy/TujuanRuangLingkup.vue";
import KebijakanPrivasiLayananKesehatan from "@/pages/privacy/KebijakanPrivasiLayananKesehatan.vue";
import KebijakanPrivasiWebsite from "@/pages/privacy/KebijakanPrivasiWebsite.vue";
import KebijakanPrivasiContactCenter from "@/pages/privacy/KebijakanPrivasiContactCenter.vue";
import KeamananData from "@/pages/privacy/KeamananData.vue";
import PerubahanKebijakanPrivasi from "@/pages/privacy/PerubahanKebijakanPrivasi.vue";
import HukumYangBerlaku from "@/pages/privacy/HukumYangBerlaku.vue";
import Narahubung from "@/pages/privacy/Narahubung.vue";

// Error pages
import FeatureDevelopment from "@/pages/FeatureDevelopment.vue";
import ConnectionError from "@/pages/ConnectionError.vue";

const routes = [
  { path: "/", name: "Beranda", component: Beranda },
  { path: "/tentang-caya", name: "DetailAbout", component: DetailAbout },
  { path: "/mcu", name: "DetailMCU", component: DetailMCU },
  { path: "/cabang", name: "DetailOurClinic", component: DetailOurClinic },
  { path: "/blog", name: "DetailBlog", component: DetailBlog },
  { path: "/hasil-mcu", name: "HasilMCU", component: HasilMCU },

  { path: "/hasil-mcu", component: HasilMCU },

  // Service pages
  { path: "/services/lab", name: "Laboratorium", component: Laboratorium },
  { path: "/services/radiologi", name: "Radiologi", component: Radiologi },
  { path: "/services/mcu", name: "MCU", component: MCU },
  { path: "/services/screening", name: "ScreeningPenyakit", component: ScreeningPenyakit },
  { path: "/services/elektromedis", name: "Elektromedis", component: Elektromedis },
  { path: "/services/home-service", name: "HomeService", component: HomeService },
  { path: "/services/konsultasi", name: "Konsultasi", component: Konsultasi },

  // Privacy pages
  { path: "/kebijakan-privasi", component: KebijakanPrivasi },
  { path: "/komitmen-perlindungan-data", component: KomitmenPerlindunganData },
  { path: "/daftar-hukum", component: DaftarHukum },
  { path: "/tujuan-ruang-lingkup", component: TujuanRuangLingkup },
  { path: "/kebijakan-privasi-layanan-kesehatan", component: KebijakanPrivasiLayananKesehatan },
  { path: "/kebijakan-privasi-website", component: KebijakanPrivasiWebsite },
  { path: "/kebijakan-privasi-contact-center", component: KebijakanPrivasiContactCenter },
  { path: "/keamanan-data", component: KeamananData },
  { path: "/perubahan-kebijakan-privasi", component: PerubahanKebijakanPrivasi },
  { path: "/hukum-yang-berlaku", component: HukumYangBerlaku },
  { path: "/narahubung", component: Narahubung },

  // Error pages
  { path: "/feature-development", component: FeatureDevelopment },
  { path: "/connection-error", component: ConnectionError },

  // 404 - HARUS TERAKHIR
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    /**
     * SCENARIO 1: User clicked browser back/forward button
     * savedPosition contains the previous scroll coordinates from history
     * Return it to restore the exact position
     *
     * EXAMPLE:
     * User scrolls down labaratory page → clicks a service link
     * Later clicks back button → savedPosition = { left: 0, top: 1234 }
     */
    if (savedPosition) {
      return {
        ...savedPosition,
        behavior: "smooth", // Smooth animation for better UX
      };
    }

    /**
     * SCENARIO 2: User navigated via hash (e.g., #about-section)
     * Find the target element by ID and scroll to it smoothly
     * Useful for anchor navigation and table of contents
     *
     * EXAMPLE:
     * User clicks link to "/kebijakan-privasi#komitmen-data"
     * Router finds element with id="komitmen-data" and scrolls to it
     */
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80, // Offset for fixed header (adjust based on your navbar height)
      };
    }

    /**
     * SCENARIO 3: New navigation (different route, no hash)
     * Scroll to top of page smoothly
     * Most common case for regular navigation
     *
     * EXAMPLE:
     * User navigates from services to about page
     * Page scrolls to top with smooth animation
     */
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;

/** @format */

import CookiePolicy from "@/pages/CookiePolicy.vue";
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
const Elektromedis = () => import("@/pages/services/Elektromedis.vue");
const HomeService = () => import("@/pages/services/HomeService.vue");
const Konsultasi = () => import("@/pages/services/Konsultasi.vue");

const routes = [
  { path: "/", name: "Beranda", component: Beranda },
  { path: "/about", name: "DetailAbout", component: DetailAbout },
  { path: "/mcu", name: "DetailMCU", component: DetailMCU },
  { path: "/cabang", name: "DetailOurClinic", component: DetailOurClinic },
  { path: "/blog", name: "DetailBlog", component: DetailBlog },
  { path: "/hasil-mcu", name: "HasilMCU", component: HasilMCU },

  { path: "/hasil-mcu", component: HasilMCU },

  // Legal pages
  { path: "/privacy-policy", component: CookiePolicy },
  { path: "/terms-conditions", component: TermsConditions },
  { path: "/medical-disclaimer", component: MedicalDisclaimer },
  { path: "/cookie-policy", component: CookiePolicy },

  // Dynamic service detail page
  { path: "/services/:slug", component: () => import("@/pages/services/ServiceDetail.vue") },

  // Service pages
  { path: "/services/lab", name: "Laboratorium", component: Laboratorium },
  { path: "/services/radiologi", name: "Radiologi", component: Radiologi },
  { path: "/services/elektromedis", name: "Elektromedis", component: Elektromedis },
  { path: "/services/home-service", name: "HomeService", component: HomeService },
  { path: "/services/konsultasi", name: "Konsultasi", component: Konsultasi },

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
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

export default router;

/** @format */

import { createRouter, createWebHistory } from "vue-router";

const Beranda = () => import("@/pages/Beranda.vue");
const HasilMCU = () => import("@/pages/HasilMCU.vue");
const MedicalDisclaimer = () => import("@/pages/MedicalDisclaimer.vue");
const TermsConditions = () => import("@/pages/TermsConditions.vue");
const DetailAbout = () => import("@/pages/about/detailAbout.vue");
const DetailMCU = () => import("@/pages/mcu/listMCU.vue");
const DetailOurClinic = () => import("@/pages/ourclinics/detailOurClinic.vue");
const DetailBlog = () => import("@/pages/blog/Blog.vue");
const BlogDetail = () => import("@/pages/blog/BlogDetail.vue");

// Service pages
const Laboratorium = () => import("@/pages/services/Laboratorium.vue");
const Radiologi = () => import("@/pages/services/Radiologi.vue");
const MCU = () => import("@/pages/services/ServiceMCU.vue");
const ScreeningPenyakit = () => import("@/pages/services/ScreeningPenyakit.vue");
const Elektromedis = () => import("@/pages/services/Elektromedis.vue");
const HomeService = () => import("@/pages/services/HomeService.vue");
const Konsultasi = () => import("@/pages/services/Konsultasi.vue");
const LayananKorporate = () => import("@/pages/services/LayananKorporate.vue");

// Privacy pages - Lazy loaded
const KebijakanPrivasi = () => import("@/pages/privacy/KebijkanPrivacy.vue");
const KomitmenPerlindunganData = () => import("@/pages/privacy/KomitmenPelindunganData.vue");
const DaftarHukum = () => import("@/pages/privacy/DaftarHukum.vue");
const TujuanRuangLingkup = () => import("@/pages/privacy/TujuanRuangLingkup.vue");
const KebijakanPrivasiLayananKesehatan = () => import("@/pages/privacy/KebijakanPrivasiLayananKesehatan.vue");
const KebijakanPrivasiWebsite = () => import("@/pages/privacy/KebijakanPrivasiWebsite.vue");
const KebijakanPrivasiContactCenter = () => import("@/pages/privacy/KebijakanPrivasiContactCenter.vue");
const KeamananData = () => import("@/pages/privacy/KeamananData.vue");
const PerubahanKebijakanPrivasi = () => import("@/pages/privacy/PerubahanKebijakanPrivasi.vue");
const HukumYangBerlaku = () => import("@/pages/privacy/HukumYangBerlaku.vue");
const Narahubung = () => import("@/pages/privacy/Narahubung.vue");

// Error pages - Lazy loaded
const FeatureDevelopment = () => import("@/pages/FeatureDevelopment.vue");
const ConnectionError = () => import("@/pages/ConnectionError.vue");

const routes = [
  { path: "/", name: "Beranda", component: Beranda },
  { path: "/tentang-caya", name: "DetailAbout", component: DetailAbout },
  { path: "/mcu", name: "DetailMCU", component: DetailMCU },
  { path: "/cabang", name: "DetailOurClinic", component: DetailOurClinic },
  { path: "/blog", name: "DetailBlog", component: DetailBlog },
  { path: "/blog-edukasi", redirect: "/blog" },
  { path: "/blog/:id", name: "BlogDetail", component: BlogDetail },
  { path: "/hasil-mcu", name: "HasilMCU", component: HasilMCU },

  // Service pages
  { path: "/services/lab", name: "Laboratorium", component: Laboratorium },
  { path: "/services/radiologi", name: "Radiologi", component: Radiologi },
  { path: "/services/mcu", name: "MCU", component: MCU },
  { path: "/services/screening", name: "ScreeningPenyakit", component: ScreeningPenyakit },
  { path: "/services/elektromedis", name: "Elektromedis", component: Elektromedis },
  { path: "/services/home-service", name: "HomeService", component: HomeService },
  { path: "/services/konsultasi", name: "Konsultasi", component: Konsultasi },
  { path: "/services/korporat", name: "LayananKorporate", component: LayananKorporate },

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
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

export default router;

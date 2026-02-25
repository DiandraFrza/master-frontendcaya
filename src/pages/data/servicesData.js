/** @format */

/**
 * Comprehensive services data for Medicine Caya
 * Items with requiresReservation: true need appointment booking
 */

export const servicesCategories = [
  {
    id: "lab",
    name: "Laboratorium",
    icon: "fa-flask-vial",
    path: "/services/lab",
    color: "from-orange-500 to-orange-600",
    description: "Pemeriksaan laboratorium lengkap dengan hasil akurat",
    requiresReservation: false,
  },
  {
    id: "radiologi",
    name: "Radiologi",
    icon: "fa-x-ray",
    path: "/services/radiologi",
    color: "from-blue-500 to-blue-600",
    description: "Pemeriksaan radiologi dan imaging terkini",
    requiresReservation: true,
  },
  {
    id: "elektromedis",
    name: "Elektromedis",
    icon: "fa-heart-pulse",
    path: "/services/elektromedis",
    color: "from-cyan-500 to-cyan-600",
    description: "Pemeriksaan EKG, audiometri, dan spirometri",
    requiresReservation: true,
  },
  {
    id: "konsultasi",
    name: "Konsultasi Dokter",
    icon: "fa-stethoscope",
    path: "/services/konsultasi",
    color: "from-indigo-500 to-indigo-600",
    description: "Konsultasi dengan dokter umum dan spesialis",
    requiresReservation: true,
  },
  {
    id: "mcu",
    name: "Medical Checkup",
    icon: "fa-heartbeat",
    path: "/services/mcu",
    color: "from-green-500 to-green-600",
    description: "Paket MCU personal dan K3 perusahaan",
    requiresReservation: true,
  },
  {
    id: "home-service",
    name: "Home Service",
    icon: "fa-truck-medical",
    path: "/services/home-service",
    color: "from-teal-500 to-teal-600",
    description: "Layanan pemeriksaan ke rumah Anda",
    requiresReservation: true,
  },
  {
    id: "screening",
    name: "Screening Penyakit",
    icon: "fa-magnifying-glass-chart",
    path: "/services/screening",
    color: "from-purple-500 to-purple-600",
    description: "Screening komprehensif berbagai penyakit",
    requiresReservation: true,
  },
  {
    id: "corporate",
    name: "Layanan Korporate",
    icon: "fa-building",
    path: "/services/corporate",
    color: "from-rose-500 to-rose-600",
    description: "Program K3 dan wellness untuk perusahaan",
    requiresReservation: true,
  },
];

/**
 * Items that specifically require appointment/reservation
 */
export const reservationRequiredItems = ["USG Upper Abdomen", "USG Lower Abdomen", "Treadmill", "EKG", "Autospirometri", "Audiometri", "Konsultasi Dokter Umum", "Konsultasi Spesialis", "Konsultasi Online", "Screening Hipertensi", "Screening Diabetes", "Screening Sindrom Metabolik", "Screening Penyakit Jantung", "Screening PPOK", "Screening Asma", "Screening Tuberkulosis", "Screening Kanker Paru", "Screening Penyakit Ginjal Kronis", "Screening Batu Ginjal", "Screening Infeksi Saluran Kemih", "Screening Nefropati Diabetik", "Screening Hepatitis Viral", "Screening Penyakit Hati Lemak", "Screening Sirosis Hati", "Screening Gastritis & GERD", "Screening Kanker Payudara", "Screening Kanker Serviks", "Screening Kanker Kolorektal", "Screening Kanker Prostat"];

/**
 * Searchable items for autocomplete
 */
export const searchableItems = [
  {
    name: "USG",
    category: "Radiologi",
    icon: "fa-image",
    requiresReservation: true,
  },
  {
    name: "Treadmill",
    category: "Radiologi",
    icon: "fa-person-running",
    requiresReservation: true,
  },
  {
    name: "Darah Lengkap",
    category: "Laboratorium",
    icon: "fa-flask-vial",
    requiresReservation: false,
  },
  {
    name: "EKG",
    category: "Elektromedis",
    icon: "fa-heart-pulse",
    requiresReservation: true,
  },
  {
    name: "Rontgen Thorax",
    category: "Radiologi",
    icon: "fa-lungs",
    requiresReservation: true,
  },
  {
    name: "MCU",
    category: "Medical Checkup",
    icon: "fa-heartbeat",
    requiresReservation: true,
  },
  {
    name: "Konsultasi Dokter",
    category: "Konsultasi Dokter",
    icon: "fa-stethoscope",
    requiresReservation: true,
  },
  {
    name: "Screening Diabetes",
    category: "Screening Penyakit",
    icon: "fa-chart-line",
    requiresReservation: true,
  },
  {
    name: "Home Service",
    category: "Home Service",
    icon: "fa-truck-medical",
    requiresReservation: true,
  },
  {
    name: "Cek Kolesterol",
    category: "Laboratorium",
    icon: "fa-heart",
    requiresReservation: false,
  },
  {
    name: "HbA1c",
    category: "Laboratorium",
    icon: "fa-percent",
    requiresReservation: false,
  },
  {
    name: "Gula Darah Puasa",
    category: "Laboratorium",
    icon: "fa-moon",
    requiresReservation: false,
  },
  {
    name: "Audiometri",
    category: "Elektromedis",
    icon: "fa-headphones",
    requiresReservation: true,
  },
  {
    name: "Spirometri",
    category: "Elektromedis",
    icon: "fa-lungs",
    requiresReservation: true,
  },
  {
    name: "Profil Lemak",
    category: "Laboratorium",
    icon: "fa-vial",
    requiresReservation: false,
  },
  {
    name: "Tes HIV",
    category: "Laboratorium",
    icon: "fa-shield",
    requiresReservation: false,
  },
  {
    name: "Screening Kanker",
    category: "Screening Penyakit",
    icon: "fa-shield-virus",
    requiresReservation: true,
  },
  {
    name: "Pemeriksaan Ginjal",
    category: "Screening Penyakit",
    icon: "fa-droplet",
    requiresReservation: false,
  },
  {
    name: "Tes Kehamilan",
    category: "Laboratorium",
    icon: "fa-heart",
    requiresReservation: false,
  },
  {
    name: "Pemeriksaan Jantung",
    category: "Screening Penyakit",
    icon: "fa-heart-pulse",
    requiresReservation: true,
  },
];

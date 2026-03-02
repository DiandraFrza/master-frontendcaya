/** @format */

// ============================================================
// DATA LAYANAN KLINIK CAYA
// ============================================================
// File ini berisi seluruh data layanan klinik untuk memudahkan maintenance
// Setiap layanan memiliki: name, price, icon, result, dan requiresReservation (opsional)
// ============================================================

/**
 * Helper function untuk menandai pemeriksaan yang perlu reservasi
 * @param {Array} items - Array item pemeriksaan
 * @param {Array} reservationKeywords - Keywords yang menandakan perlu reservasi
 */
const markReservationRequired = (items, reservationKeywords = []) => {
  return items.map((item) => ({
    ...item,
    requiresReservation: item.requiresReservation || reservationKeywords.some((keyword) => item.name.toLowerCase().includes(keyword.toLowerCase())),
  }));
};

// Keywords umum untuk pemeriksaan yang memerlukan reservasi
const RESERVATION_KEYWORDS = ["usg", "treadmill", "treadmill", "ekg", "elektrokardiogram", "eeg", "audiometri", "spirometri", "rontgen", "x-ray", "xray", "mammografi", "ct scan", "mri", "fluoroscopy", "dental", "panoramic", "cephalometri", "thorax", "abdominal"];

// ============================================================
// 1. LABORATORIUM
// ============================================================

export const laboratoryExams = {
  category: "Laboratorium Klinik",
  icon: "fa-flask-vial",
  color: "from-orange-500 to-orange-600",
  description: "Pemeriksaan laboratorium lengkap dengan standar mutu internasional",
  features: ["Hasil 1-3 jam untuk pemeriksaan darah rutin", "Alat analyzer terkini dan terkalibrasi", "Tenaga analis berpengalaman & bersertifikat", "Hasil digital dengan interpretasi medis"],
  subcategories: {
    kimiaDarah: {
      name: "Kimia Darah",
      icon: "fa-flask-vial",
      description: "Pemeriksaan fungsi organ dan metabolisme tubuh",
      items: markReservationRequired(
        [
          { name: "Gamma GT", icon: "fa-flask", result: "3 jam" },
          { name: "SGOT", icon: "fa-flask", result: "3 jam" },
          { name: "SGPT", icon: "fa-flask", result: "3 jam" },
          {
            name: "Cholesterol Total",
            icon: "fa-heart",
            result: "3 jam",
          },
          { name: "HDL", icon: "fa-arrow-up", result: "3 jam" },
          { name: "LDL", icon: "fa-arrow-down", result: "3 jam" },
          {
            name: "Trigliserida",
            icon: "fa-chart-line",
            result: "3 jam",
          },
          { name: "Asam Urat", icon: "fa-flask", result: "3 jam" },
          { name: "Ureum", icon: "fa-dna", result: "3 jam" },
          { name: "Kreatinin", icon: "fa-microscope", result: "3 jam" },
          { name: "E-GFR", icon: "fa-calculator", result: "3 jam" },
          {
            name: "Gula Darah Sewaktu",
            icon: "fa-chart-line",
            result: "3 jam",
          },
          {
            name: "Gula Darah Puasa",
            icon: "fa-moon",
            result: "3 jam",
          },
          {
            name: "Gula Darah 2 Jam Post Prandial",
            icon: "fa-sun",
            result: "3 jam",
          },
          { name: "HbA1c", icon: "fa-percent", result: "1 - 2 Jam" },
          {
            name: "Vitamin D 25OH",
            icon: "fa-sun",
            result: "1 - 2 Jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    hematologi: {
      name: "Hematologi",
      icon: "fa-droplet",
      description: "Pemeriksaan komponen darah lengkap",
      items: markReservationRequired(
        [
          {
            name: "Hemoglobin",
            icon: "fa-droplet",
            result: "1 - 2 Jam",
          },
          {
            name: "Hematokrit",
            icon: "fa-percent",
            result: "1 - 2 Jam",
          },
          {
            name: "Leukosit",
            icon: "fa-microscope",
            result: "1 - 2 Jam",
          },
          {
            name: "Trombosit",
            icon: "fa-square",
            result: "1 - 2 Jam",
          },
          {
            name: "Eritrosit",
            icon: "fa-circle",
            result: "1 - 2 Jam",
          },
          {
            name: "LED",
            icon: "fa-stopwatch",
            result: "1 - 2 Jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    urinalisa: {
      name: "Urinalisa",
      icon: "fa-flask",
      description: "Pemeriksaan urine untuk deteksi berbagai kondisi",
      items: markReservationRequired(
        [
          {
            name: "Urine Lengkap",
            icon: "fa-flask",
            result: "1 - 2 Jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    imunoserologi: {
      name: "Imunoserologi",
      icon: "fa-shield",
      description: "Pemeriksaan antigen, antibodi, dan imunitas",
      items: markReservationRequired(
        [
          {
            name: "Drugtest (6 Parameter)",
            icon: "fa-flask-vial",
            result: "30 menit - 1 jam",
          },
          {
            name: "HCG (Rapid Test)",
            icon: "fa-heart",
            result: "15 - 30 menit",
          },
          {
            name: "HIV (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "HCV (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "HbsAg (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "HAV (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "Syphilis (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "NS1 (Rapid Test)",
            icon: "fa-shield",
            result: "30 - 1 jam",
          },
          {
            name: "Dengue (IgG, IgM)",
            icon: "fa-virus",
            result: "30 - 1 jam",
          },
          { name: "Widal", icon: "fa-flask", result: "1 - 2 jam" },
          {
            name: "Golongan Darah",
            icon: "fa-droplet",
            result: "30 menit - 1 jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    tumorMarker: {
      name: "Tumor Marker",
      icon: "fa-shield-virus",
      description: "Skrining awal untuk deteksi kanker",
      items: markReservationRequired(
        [
          {
            name: "AFP",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
          {
            name: "CEA",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
          {
            name: "Ca 125 (Ovarium)",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
          {
            name: "Ca 15-3 (Breast)",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
          {
            name: "Ca 19-9 (Pancreas)",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
          {
            name: "PSA (Prostate)",
            icon: "fa-shield-virus",
            result: "Hari yang sama",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    hormonal: {
      name: "Hormon & Fertilitas",
      icon: "fa-dna",
      description: "Pemeriksaan kadar hormon dan kesehatan reproduksi",
      items: markReservationRequired(
        [
          { name: "TSH", icon: "fa-dna", result: "Hari yang sama" },
          { name: "Free T3", icon: "fa-dna", result: "Hari yang sama" },
          { name: "Free T4", icon: "fa-dna", result: "Hari yang sama" },
          { name: "Estradiol", icon: "fa-dna", result: "Hari yang sama" },
          { name: "FSH", icon: "fa-dna", result: "Hari yang sama" },
          { name: "LH", icon: "fa-dna", result: "Hari yang sama" },
          {
            name: "Progesteron",
            icon: "fa-dna",
            result: "Hari yang sama",
          },
          {
            name: "Prolactin",
            icon: "fa-dna",
            result: "Hari yang sama",
          },
          {
            name: "Testosteron",
            icon: "fa-dna",
            result: "Hari yang sama",
          },
          { name: "Cortisol", icon: "fa-dna", result: "Hari yang sama" },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
  },
};

// ============================================================
// 2. RADIOLOGI
// ============================================================

export const radiologyExams = {
  category: "Radiologi",
  icon: "fa-x-ray",
  color: "from-blue-500 to-blue-600",
  description: "Pemeriksaan pencitraan medis dengan teknologi digital terkini",
  features: ["Peralatan radiologi digital terkini", "Radiografer bersertifikat kompetensi", "Interpretasi dokter spesialis radiologi", "Dosis radiasi minimal (ALARA principle)"],
  subcategories: {
    dental: {
      name: "Radiologi Gigi",
      icon: "fa-tooth",
      description: "Pemeriksaan gigi dan struktur rahang",
      items: markReservationRequired(
        [
          {
            name: "Dental",
            icon: "fa-tooth",
            result: "5 - 15 menit",
            requiresReservation: true,
          },
          {
            name: "Panoramic",
            icon: "fa-image",
            result: "5 - 15 menit",
            requiresReservation: true,
          },
          {
            name: "Cephalometri",
            icon: "fa-image",
            result: "5 - 15 menit",
            requiresReservation: true,
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    thorax: {
      name: "Dada & Paru",
      icon: "fa-lungs",
      description: "Pemeriksaan thorax untuk deteksi penyakit paru dan jantung",
      items: markReservationRequired(
        [
          {
            name: "Thorax PA/AP",
            icon: "fa-lungs",
            result: "1 x 24 jam",
            requiresReservation: true,
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    extremitas: {
      name: "Extremitas",
      icon: "fa-bone",
      description: "Pemeriksaan tulang lengan dan kaki",
      items: markReservationRequired(
        [
          {
            name: "Manus AP/Oblique",
            icon: "fa-hand",
            result: "1 x 24 jam",
          },
          {
            name: "Wrist Joint AP/Lat",
            icon: "fa-hand",
            result: "1 x 24 jam",
          },
          {
            name: "Antebrachi AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Elbow AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Humerus AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Shoulder",
            icon: "fa-person",
            result: "1 x 24 jam",
          },
          {
            name: "Clavicula AP",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Pedis AP/Lat",
            icon: "fa-shoe-prints",
            result: "1 x 24 jam",
          },
          {
            name: "Ankle Joint AP/Lat",
            icon: "fa-shoe-prints",
            result: "1 x 24 jam",
          },
          {
            name: "Cruris AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Genu AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
          {
            name: "Femur AP/Lat",
            icon: "fa-bone",
            result: "1 x 24 jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    spinal: {
      name: "Tulang Belakang",
      icon: "fa-spine",
      description: "Pemeriksaan tulang belakang servikal, torakal, dan lumbal",
      items: markReservationRequired(
        [
          {
            name: "Cervical AP/Lat",
            icon: "fa-spine",
            result: "1 x 24 jam",
          },
          {
            name: "Thoracal AP/Lat",
            icon: "fa-spine",
            result: "1 x 24 jam",
          },
          {
            name: "Lumbal AP/Lat",
            icon: "fa-spine",
            result: "1 x 24 jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
    other: {
      name: "Pemeriksaan Khusus",
      icon: "fa-image",
      description: "Pemeriksaan radiologi khusus dengan reservasi",
      items: markReservationRequired(
        [
          {
            name: "USG Upper/Lower Abdomen",
            icon: "fa-image",
            result: "1 - 2 hari",
            requiresReservation: true,
          },
          {
            name: "Treadmill",
            icon: "fa-person-running",
            result: "1 - 2 hari",
            requiresReservation: true,
            note: "Pemeriksaan fungsi jantung saat beraktivitas",
          },
          {
            name: "Pelvis AP/Lat",
            icon: "fa-image",
            result: "1 x 24 jam",
          },
          {
            name: "Cranium AP/Lat",
            icon: "fa-head-side-virus",
            result: "1 x 24 jam",
          },
          {
            name: "SPN (Sinus Paranassal)",
            icon: "fa-head-side-virus",
            result: "1 x 24 jam",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
  },
};

// ============================================================
// 3. ELEKTROMEDIS
// ============================================================

export const electromedicalExams = {
  category: "Elektromedis",
  icon: "fa-heart-pulse",
  color: "from-cyan-500 to-cyan-600",
  description: "Pemeriksaan fungsi jantung, paru, dan saraf dengan alat elektronik",
  features: ["Alat elektromedis modern & terkalibrasi", "Pemeriksaan non-invasif & aman", "Interpretasi dokter spesialis", "Semua pemeriksaan perlu reservasi"],
  items: markReservationRequired(
    [
      {
        name: "Autospirometri",
        icon: "fa-lungs",
        result: "1 - 2 hari",
        requiresReservation: true,
        description: "Pemeriksaan fungsi paru-paru untuk mendeteksi gangguan pernapasan",
      },
      {
        name: "EKG",
        icon: "fa-heart-pulse",
        result: "1 - 2 hari",
        requiresReservation: true,
        description: "Rekam jantung untuk mendeteksi gangguan irama dan fungsi jantung",
      },
      {
        name: "Audiometri",
        icon: "fa-headphones",
        result: "1 - 2 hari",
        requiresReservation: true,
        description: "Pemeriksaan ketajaman pendengaran dan gangguan telinga",
      },
    ],
    RESERVATION_KEYWORDS,
  ),
};

// ============================================================
// 4. KONSULTASI DOKTER
// ============================================================

export const consultationServices = {
  category: "Konsultasi Dokter",
  icon: "fa-user-doctor",
  color: "from-indigo-500 to-indigo-600",
  description: "Konsultasi medis dengan dokter umum berpengalaman",
  features: ["Dokter bersertifikat STR & SIP", "Jadwal fleksibel sesuai kebutuhan", "Resep digital yang sah", "Tersedia online & home visit"],
  items: [
    {
      name: "Konsultasi Dokter Umum",
      icon: "fa-user-doctor",
      result: "Langsung",
      desc: "Pemeriksaan dan konsultasi kesehatan umum",
    },
    // {
    //   name: "Konsultasi Spesialis",
    //   icon: "fa-user-md",
    //   result: "By Appointment",
    //   desc: "Konsultasi dengan dokter spesialis (Jantung, Paru, dll)",
    //   requiresReservation: true,
    // },
    {
      name: "Konsultasi Online",
      icon: "fa-video",
      result: "By Appointment",
      desc: "Konsultasi via video call dari mana saja",
      requiresReservation: true,
    },
    // {
    //   name: "Home Visit Dokter",
    //   icon: "fa-house-medical",
    //   result: "By Appointment",
    //   desc: "Dokter datang ke rumah/kantor Anda",
    //   requiresReservation: true,
    // },
  ],
};

// ============================================================
// 5. MEDICAL CHECK UP
// ============================================================

export const medicalCheckupPackages = {
  category: "Medical Check Up",
  icon: "fa-heartbeat",
  color: "from-green-500 to-green-600",
  description: "Paket pemeriksaan kesehatan komprehensif untuk individu & perusahaan",
  features: ["Paket lengkap & customizable", "Laporan medis detail", "Interpretasi dokter", "Sertifikat kesehatan"],
  subcategories: {
    paketPersonal: {
      name: "Paket Personal",
      icon: "fa-user",
      description: "Paket MCU untuk kebutuhan pribadi",
      items: [
        {
          name: "PAKET MEDICAL CHECK UP SILVER",
          icon: "fa-star",
          shortName: "Paket Silver",
          result: "",
          details: ["Darah Lengkap", "SGOT", "Cholesterol Total", "Glukosa Puasa / Sewaktu", "Asam Urat", "Urine Lengkap"],
        },
        {
          name: "PAKET MEDICAL CHECK UP PLATINUM",
          icon: "fa-gem",
          shortName: "Paket Platinum",
          result: "",
          details: ["Darah Lengkap", "SGOT", "SGPT", "Cholesterol Total", "Trigliserdia", "HDL & LDL", "Creatinin", "Ureum", "Asam Urat", "Glukosa Puasa & 2 Jam PP", "Urine Lengkap", "HbA1C", "Rontgen Thorax", "EKG"],
        },
      ],
    },
    paketK3: {
      name: "Paket K3",
      icon: "fa-building",
      description: "Paket sesuai standar Kesehatan & Keselamatan Kerja",
      items: [
        {
          name: "MCU K3 Dasar",
          icon: "fa-building",
          result: "",
          details: ["Fisik Dokter", "Darah Lengkap", "Urine Lengkap", "Rontgen Thorax"],
        },
        {
          name: "MCU K3 Standar",
          icon: "fa-clipboard",
          result: "",
          details: ["Fisik Dokter", "Darah Lengkap", "Urine Lengkap", "SGOT & SGPT", "Asam Urat", "Glukosa Darah Puasa", "Cholesterol Total", "Rontgen Thorax"],
        },
        {
          name: "MCU K3 Lengkap",
          icon: "fa-circle-check",
          result: "",
          details: ["Fisik Dokter", "Darah Lengkap", "Urine Lengkap", "SGOT & SGPT", "Creatinin, Ureum & Asam Urat", "Glukosa Darah Puasa & 2 Jam PP", "Cholesterol Total, HDL & LDL", "Rontgen Thorax", "EKG"],
        },
      ],
    },
    additionalK3: {
      name: "Additional K3",
      icon: "fa-plus-circle",
      description: "Pemeriksaan tambahan untuk kebutuhan K3",
      items: markReservationRequired(
        [
          {
            name: "Autospirometri",
            icon: "fa-lungs",
            result: "",
            requiresReservation: true,
          },
          {
            name: "Audiometri",
            icon: "fa-headphones",
            result: "",
            requiresReservation: true,
          },
          {
            name: "Treadmill",
            icon: "fa-person-running",
            result: "",
            requiresReservation: true,
          },
          {
            name: "Rectal Swab",
            icon: "fa-vial",
            result: "",
          },
          {
            name: "Faeces Rutin",
            icon: "fa-flask",
            result: "",
          },
        ],
        RESERVATION_KEYWORDS,
      ),
    },
  },
};

// ============================================================
// 6. SCREENING PENYAKIT
// ============================================================

export const screeningPenyakit = {
  category: "Screening Penyakit",
  icon: "fa-stethoscope",
  color: "from-purple-500 to-purple-600",
  description: "Program skrining dini untuk deteksi dan pencegahan penyakit",
  features: ["Skrining berbasis risiko", "Interpretasi hasil oleh dokter", "Rekomendasi tindak lanjut", "Riwayat screening tersimpan"],
  subcategories: {
    screeningKardiometabolik: {
      name: "Screening Kardiometabolik",
      icon: "fa-heart-pulse",
      description: "Deteksi dini penyakit jantung, diabetes, dan metabolik",
      items: [
        {
          name: "Screening Hipertensi",
          icon: "fa-heart-pulse",
          result: "30 - 60 menit",
        },
        {
          name: "Screening Diabetes",
          icon: "fa-chart-line",
          result: "1 - 2 jam",
        },
        {
          name: "Screening Dyslipidemia",
          icon: "fa-vial",
          result: "1 - 2 jam",
        },
        {
          name: "Screening Sindrom Metabolik",
          icon: "fa-flask",
          result: "2 - 3 jam",
        },
        {
          name: "Screening Penyakit Jantung",
          icon: "fa-heart",
          result: "1 - 2 jam",
          requiresReservation: true,
        },
      ],
    },
    screeningRespirator: {
      name: "Screening Respirator",
      icon: "fa-lungs",
      description: "Deteksi dini gangguan pernapasan dan paru-paru",
      items: [
        {
          name: "Screening PPOK",
          icon: "fa-lungs",
          result: "1 jam",
        },
        {
          name: "Screening Asma",
          icon: "fa-wind",
          result: "1 jam",
        },
        {
          name: "Screening Tuberkulosis",
          icon: "fa-x-ray",
          result: "1 x 24 jam",
          requiresReservation: true,
        },
        {
          name: "Screening Kanker Paru",
          icon: "fa-lung",
          result: "2 - 3 jam",
          requiresReservation: true,
        },
      ],
    },
    screeningGinjal: {
      name: "Screening Ginjal & Urinaria",
      icon: "fa-droplet",
      description: "Deteksi dini gangguan ginjal dan saluran kemih",
      items: [
        {
          name: "Screening Penyakit Ginjal Kronis",
          icon: "fa-droplet",
          result: "1 - 2 jam",
        },
        {
          name: "Screening Batu Ginjal",
          icon: "fa-stone",
          result: "1 - 2 jam",
          requiresReservation: true,
        },
        {
          name: "Screening Infeksi Saluran Kemih",
          icon: "fa-flask",
          result: "1 - 2 jam",
        },
        {
          name: "Screening Nefropati Diabetik",
          icon: "fa-vial",
          result: "1 - 2 jam",
        },
      ],
    },
    screeningHepar: {
      name: "Screening Liver & Pencernaan",
      icon: "fa-liver",
      description: "Deteksi dini gangguan hati dan sistem pencernaan",
      items: [
        {
          name: "Screening Hepatitis Viral",
          icon: "fa-shield",
          result: "1 - 2 hari",
        },
        {
          name: "Screening Penyakit Hati Lemak",
          icon: "fa-flask",
          result: "1 - 2 jam",
        },
        {
          name: "Screening Sirosis Hati",
          icon: "fa-vial",
          result: "1 - 2 hari",
          requiresReservation: true,
        },
        {
          name: "Screening Gastritis & GERD",
          icon: "fa-stomach",
          result: "1 - 2 jam",
        },
      ],
    },
    screeningOnkologi: {
      name: "Screening Kanker",
      icon: "fa-shield-virus",
      description: "Skrining awal untuk deteksi dini berbagai jenis kanker",
      items: [
        {
          name: "Screening Kanker Payudara",
          icon: "fa-breast",
          result: "1 - 2 hari",
          requiresReservation: true,
        },
        {
          name: "Screening Kanker Serviks",
          icon: "fa-shield",
          result: "3 - 7 hari",
        },
        {
          name: "Screening Kanker Kolorektal",
          icon: "fa-microscope",
          result: "3 - 5 hari",
        },
        {
          name: "Screening Kanker Prostat",
          icon: "fa-shield-virus",
          result: "Hari yang sama",
        },
      ],
    },
    screeningInfeksi: {
      name: "Screening Infeksi Menular",
      icon: "fa-virus",
      description: "Deteksi infeksi menular seksual dan penyakit menular lainnya",
      items: [
        {
          name: "Screening HIV",
          icon: "fa-shield",
          result: "30 - 1 jam",
        },
        {
          name: "Screening Hepatitis B & C",
          icon: "fa-virus",
          result: "1 - 2 hari",
        },
        {
          name: "Screening Syphilis",
          icon: "fa-flask",
          result: "30 - 1 jam",
        },
        {
          name: "Screening COVID-19",
          icon: "fa-virus",
          result: "15 - 30 menit",
        },
      ],
    },
  },
};

// ============================================================
// 7. HOME SERVICE
// ============================================================

export const homeServices = {
  category: "Home Service",
  icon: "fa-truck-medical",
  color: "from-teal-500 to-teal-600",
  description: "Layanan pemeriksaan kesehatan di rumah atau kantor Anda",
  features: ["Tenaga medis profesional", "Jadwal fleksibel", "Hasil sama dengan pemeriksaan di klinik", "Minimal booking H-1"],
  items: [
    {
      name: "Home Service Pemeriksaan Darah",
      icon: "fa-droplet",
      result: "By Appointment",
      desc: "Pengambilan sampel darah ke rumah/kantor Anda",
      requiresReservation: true,
    },
    {
      name: "Home Service Paket Profil Lemak",
      icon: "fa-heart",
      result: "By Appointment",
      desc: "Cholesterol total, HDL, LDL, Trigliserida",
      requiresReservation: true,
    },
    {
      name: "Home Service Paket Diabetes",
      icon: "fa-chart-line",
      result: "By Appointment",
      desc: "Gula darah puasa, HbA1c",
      requiresReservation: true,
    },
    {
      name: "Home Service Paket Ginjal",
      icon: "fa-droplet-slash",
      result: "By Appointment",
      desc: "Ureum, Kreatinin, Asam Urat, Urine lengkap",
      requiresReservation: true,
    },
    {
      name: "Home Service Paket Jantung",
      icon: "fa-heart-pulse",
      result: "By Appointment",
      desc: "EKG + pemeriksaan darah jantung",
      requiresReservation: true,
    },
    {
      name: "Home Service MCU Dasar",
      icon: "fa-clipboard-check",
      result: "By Appointment",
      desc: "Paket MCU lengkap di lokasi Anda",
      requiresReservation: true,
    },
  ],
};

// ============================================================
// 8. LAYANAN KORPORAT
// ============================================================

export const layananKorporat = {
  category: "Layanan Korporat",
  icon: "fa-building-user",
  color: "from-rose-500 to-rose-600",
  description: "Solusi kesehatan terintegrasi untuk perusahaan dan institusi",
  features: ["MCU onsite di perusahaan", "Customized health program", "Corporate health dashboard", "Dedicated account manager"],
  subcategories: {
    mcuOnsite: {
      name: "MCU Onsite",
      icon: "fa-building",
      description: "Pemeriksaan kesehatan di lokasi perusahaan Anda",
      items: [
        {
          name: "MCU K3 Dasar",
          icon: "fa-users",
          result: "Min. 50 peserta",
          minParticipants: 50,
          description: "MCU K3 dengan pemeriksaan dasar di lokasi",
        },
        {
          name: "MCU K3 Standar",
          icon: "fa-users-gear",
          result: "Min. 30 peserta",
          minParticipants: 30,
          description: "MCU K3 dengan pemeriksaan lengkap & EKG",
        },
        {
          name: "MCU K3 Lengkap",
          icon: "fa-user-tie",
          result: "Min. 20 peserta",
          minParticipants: 20,
          description: "Paket premium untuk level manajerial",
        },
      ],
    },
    wellnessProgram: {
      name: "Wellness Program",
      icon: "fa-heart-pulse",
      description: "Program kesehatan karyawan berkelanjutan",
      items: [
        {
          name: "Health Talk / Seminar",
          icon: "fa-presentation-screen",
          result: "Per sesi",
          description: "Seminar kesehatan dengan dokter spesialis",
        },
        {
          name: "Medical Coaching",
          icon: "fa-user-doctor",
          result: "Per bulan",
          description: "Coaching kesehatan untuk karyawan",
        },
        {
          name: "Health Screening Event",
          icon: "fa-stethoscope",
          result: "Per event",
          description: "Event skrining kesehatan massal di perusahaan",
        },
      ],
    },
    partnership: {
      name: "Kerja Sama Kesehatan",
      icon: "fa-handshake",
      description: "Program kerja sama jangka panjang",
      items: [
        {
          name: "Corporate Partnership",
          icon: "fa-building-columns",
          result: "Custom",
          description: "Kerja sama dengan benefit khusus untuk karyawan",
        },
        {
          name: "Asuransi Panel",
          icon: "fa-id-card",
          result: "Custom",
          description: "Kerja sama dengan provider asuransi",
        },
        {
          name: "Employee Benefit Program",
          icon: "fa-gift",
          result: "Custom",
          description: "Program benefit kesehatan untuk karyawan",
        },
      ],
    },
  },
};

// ============================================================
// DATA TERINTEGRASI UNTUK PENCARIAN
// ============================================================

export const allSearchableItems = [
  // Laboratorium
  ...Object.values(laboratoryExams.subcategories).flatMap((sub) =>
    sub.items.map((item) => ({
      ...item,
      category: "Laboratorium",
      subcategory: sub.name,
      path: "/services/lab",
    })),
  ),
  // Radiologi
  ...Object.values(radiologyExams.subcategories).flatMap((sub) =>
    sub.items.map((item) => ({
      ...item,
      category: "Radiologi",
      subcategory: sub.name,
      path: "/services/radiologi",
    })),
  ),
  // Elektromedis
  ...electromedicalExams.items.map((item) => ({
    ...item,
    category: "Elektromedis",
    subcategory: "Elektromedis",
    path: "/services/elektromedis",
  })),
  // Konsultasi
  ...consultationServices.items.map((item) => ({
    ...item,
    category: "Konsultasi Dokter",
    subcategory: "Konsultasi",
    path: "/services/konsultasi",
  })),
  // MCU
  ...Object.values(medicalCheckupPackages.subcategories).flatMap((sub) =>
    sub.items.map((item) => ({
      ...item,
      category: "Medical Check Up",
      subcategory: sub.name,
      path: "/services/mcu",
    })),
  ),
  // Screening
  ...Object.values(screeningPenyakit.subcategories).flatMap((sub) =>
    sub.items.map((item) => ({
      ...item,
      category: "Screening Penyakit",
      subcategory: sub.name,
      path: "/services/screening",
    })),
  ),
  // Home Service
  ...homeServices.items.map((item) => ({
    ...item,
    category: "Home Service",
    subcategory: "Home Service",
    path: "/services/home-service",
  })),
];

// ============================================================
// NAVIGATION DATA
// ============================================================

export const servicesNavigation = [
  {
    id: "lab",
    name: "Laboratorium",
    path: "/services/lab",
    icon: "fa-flask-vial",
    color: "orange",
    description: "Pemeriksaan darah, urine, dan tes laboratorium lengkap",
  },
  {
    id: "radiologi",
    name: "Radiologi",
    path: "/services/radiologi",
    icon: "fa-x-ray",
    color: "blue",
    description: "X-ray, USG, dan pemeriksaan pencitraan medis",
  },
  {
    id: "elektromedis",
    name: "Elektromedis",
    path: "/services/elektromedis",
    icon: "fa-heart-pulse",
    color: "cyan",
    description: "EKG, audiometri, dan spirometri",
  },
  {
    id: "konsultasi",
    name: "Konsultasi Dokter",
    path: "/services/konsultasi",
    icon: "fa-user-doctor",
    color: "indigo",
    description: "Konsultasi umum, spesialis, dan online",
  },
  {
    id: "mcu",
    name: "Medical Check Up",
    path: "/services/mcu",
    icon: "fa-heartbeat",
    color: "green",
    description: "Paket pemeriksaan kesehatan personal & K3",
  },
  {
    id: "home-service",
    name: "Home Service",
    path: "/services/home-service",
    icon: "fa-truck-medical",
    color: "teal",
    description: "Pemeriksaan kesehatan di rumah atau kantor",
  },
  {
    id: "screening",
    name: "Screening Penyakit",
    path: "/services/screening",
    icon: "fa-stethoscope",
    color: "purple",
    description: "Program skrining untuk deteksi dini penyakit",
  },
  {
    id: "korporat",
    name: "Layanan Korporat",
    path: "/services/korporat",
    icon: "fa-building-user",
    color: "rose",
    description: "Solusi kesehatan untuk perusahaan dan institusi",
  },
];

export default {
  laboratoryExams,
  radiologyExams,
  electromedicalExams,
  consultationServices,
  medicalCheckupPackages,
  screeningPenyakit,
  homeServices,
  layananKorporat,
  allSearchableItems,
  servicesNavigation,
};

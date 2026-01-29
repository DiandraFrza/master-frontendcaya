/** @format */

export const laboratoryExams = {
  kimiaDarah: {
    category: "Kimia Darah",
    icon: "fa-flask-vial",
    color: "from-blue-500 to-blue-600",
    result: "1 - 3 Jam",
    items: [
      { name: "Gamma GT", price: 129000, icon: "fa-flask" },
      { name: "SGOT", price: 60000, icon: "fa-flask" },
      { name: "SGPT", price: 60000, icon: "fa-flask" },
      { name: "Cholesterol Total", price: 50000, icon: "fa-heart" },
      { name: "HDL", price: 85000, icon: "fa-arrow-up" },
      { name: "LDL", price: 125000, icon: "fa-arrow-down" },
      { name: "Trigliserida", price: 75000, icon: "fa-chart-line" },
      { name: "Asam Urat", price: 60000, icon: "fa-flask" },
      { name: "Ureum", price: 60000, icon: "fa-dna" },
      { name: "Kreatinin", price: 66000, icon: "fa-microscope" },
      { name: "E-GFR", price: 175000, icon: "fa-calculator" },
      { name: "Gula Darah Sewaktu", price: 50000, icon: "fa-chart-line" },
      { name: "Gula Darah Puasa", price: 50000, icon: "fa-moon" },
      { name: "Gula Darah 2 Jam Post Prandial", price: 50000, icon: "fa-sun" },
      { name: "HbA1c", price: 250000, icon: "fa-percent", result: "1 - 2 jam" },
      { name: "Vitamin D 25OH", price: 405000, icon: "fa-sun", result: "1 - 2 jam" },
    ],
  },
  hematologi: {
    category: "Hematologi",
    icon: "fa-droplet",
    color: "from-red-500 to-red-600",
    result: "1 - 2 Jam",
    items: [
      { name: "Hemoglobin", price: 83000, icon: "fa-droplet" },
      { name: "Hematokrit", price: 65000, icon: "fa-percent" },
      { name: "Leukosit", price: 77000, icon: "fa-microscope" },
      { name: "Trombosit", price: 83000, icon: "fa-square" },
      { name: "Eritrosit", price: 65000, icon: "fa-circle" },
      { name: "LED", price: 65000, icon: "fa-stopwatch" },
    ],
  },
  urinalisa: {
    category: "Urinalisa",
    icon: "fa-flask",
    color: "from-yellow-500 to-yellow-600",
    result: "1 - 2 Jam",
    items: [{ name: "Urine Lengkap", price: 75000, icon: "fa-flask" }],
  },
  imunoserologi: {
    category: "Imunoserologi",
    icon: "fa-shield",
    color: "from-purple-500 to-purple-600",
    result: "30 menit - 2 hari",
    items: [
      { name: "Drugtest (6 Parameter)", price: 540000, icon: "fa-flask-vial", result: "30 menit - 1 jam" },
      { name: "HCG (Rapid Test)", price: 105000, icon: "fa-heart", result: "15 - 30 menit" },
      { name: "HIV (Rapid Test)", price: 470000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "HCV (Rapid Test)", price: 495000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "HbsAg (Rapid Test)", price: 230000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "HAV (Rapid Test)", price: 517000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "Syphilis (Rapid Test)", price: 440000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "NS1 (Rapid Test)", price: 440000, icon: "fa-shield", result: "30 - 1 jam" },
      { name: "Dengue (IgG, IgM)", price: 480000, icon: "fa-virus", result: "30 - 1 jam" },
      { name: "Widal", price: 175000, icon: "fa-flask", result: "1 - 2 jam" },
      { name: "Golongan Darah", price: 85000, icon: "fa-droplet", result: "30 menit - 1 jam" },
    ],
  },
  tumorMarker: {
    category: "Tumor Marker",
    icon: "fa-shield-virus",
    color: "from-pink-500 to-pink-600",
    result: "1 - 4 hari",
    items: [
      { name: "AFP", price: 535000, icon: "fa-shield-virus", result: "Hari yang sama" },
      { name: "CEA", price: 500000, icon: "fa-shield-virus", result: "Hari yang sama" },
      { name: "Ca 125 (Ovarium)", price: 749000, icon: "fa-shield-virus", result: "Hari yang sama" },
      { name: "Ca 15-3 (Breast)", price: 873000, icon: "fa-shield-virus", result: "Hari yang sama" },
      { name: "Ca 19-9 (Pancreas)", price: 883000, icon: "fa-shield-virus", result: "Hari yang sama" },
      { name: "PSA (Prostate)", price: 540000, icon: "fa-shield-virus", result: "Hari yang sama" },
    ],
  },
  hormonal: {
    category: "Hormon & Fertilitas",
    icon: "fa-dna",
    color: "from-green-500 to-green-600",
    result: "1 - 2 hari",
    items: [
      { name: "TSH", price: 378000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Free T3", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Free T4", price: 431000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Estradiol", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "FSH", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "LH", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Progesteron", price: 641000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Prolactin", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Testosteron", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
      { name: "Cortisol", price: 730000, icon: "fa-dna", result: "Hari yang sama" },
    ],
  },
};

export const radiologyExams = {
  category: "Radiologi & Penunjang",
  icon: "fa-x-ray",
  color: "from-orange-500 to-orange-600",
  subcategories: {
    dental: {
      name: "Gigi (Dental)",
      icon: "fa-tooth",
      items: [
        { name: "Dental", price: 160000, icon: "fa-tooth", result: "5 menit" },
        { name: "Panoramic", price: 300000, icon: "fa-image", result: "5 - 15 menit" },
        { name: "Cephalometri", price: 325000, icon: "fa-image", result: "5 - 15 menit" },
      ],
    },
    thorax: {
      name: "Dada & Paru",
      icon: "fa-lungs",
      items: [{ name: "Thorax PA/AP", price: 250000, icon: "fa-lungs", result: "1 x 24 jam" }],
    },
    extremitas: {
      name: "Extremitas",
      icon: "fa-bone",
      items: [
        { name: "Manus AP/Oblique", price: 275000, icon: "fa-hand", result: "1 x 24 jam" },
        { name: "Wrist Joint AP/Lat", price: 250000, icon: "fa-hand", result: "1 x 24 jam" },
        { name: "Antebrachi AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Elbow AP/Lat", price: 250000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Humerus AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Shoulder", price: 275000, icon: "fa-person", result: "1 x 24 jam" },
        { name: "Clavicula AP", price: 225000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Pedis AP/Lat", price: 275000, icon: "fa-shoe-prints", result: "1 x 24 jam" },
        { name: "Ankle Joint AP/Lat", price: 250000, icon: "fa-shoe-prints", result: "1 x 24 jam" },
        { name: "Cruris AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Genu AP/Lat", price: 250000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Femur AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
      ],
    },
    spinal: {
      name: "Tulang Belakang",
      icon: "fa-spine",
      items: [
        { name: "Cervical AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
        { name: "Thoracal AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
        { name: "Lumbal AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
      ],
    },
    other: {
      name: "Lainnya",
      icon: "fa-image",
      items: [
        { name: "Pelvis AP/Lat", price: 275000, icon: "fa-image", result: "1 x 24 jam" },
        { name: "Cranium AP/Lat", price: 350000, icon: "fa-head-side-virus", result: "1 x 24 jam" },
        { name: "SPN (Sinus Paranassal)", price: 475000, icon: "fa-head-side-virus", result: "1 x 24 jam" },
      ],
    },
  },
};

export const electromedicalExams = {
  category: "Elektromedis",
  icon: "fa-heart-pulse",
  color: "from-cyan-500 to-cyan-600",
  items: [
    { name: "Autospirometri", price: 130000, icon: "fa-lungs", result: "1 - 2 hari" },
    { name: "EKG", price: 150000, icon: "fa-heart-pulse", result: "1 - 2 hari" },
    { name: "USG Upper/Lower Abdomen", price: 500000, icon: "fa-image", result: "1 - 2 hari" },
    { name: "Treadmill", price: 1000000, icon: "fa-person-running", result: "1 - 2 hari" },
    { name: "Audiometri", price: 150000, icon: "fa-ear", result: "1 - 2 hari" },
  ],
};

export const consultationServices = {
  category: "Konsultasi Dokter",
  icon: "fa-stethoscope",
  color: "from-indigo-500 to-indigo-600",
  items: [
    {
      name: "Konsultasi Dokter Umum",
      price: 75000,
      icon: "fa-user-doctor",
      desc: "Pemeriksaan dan konsultasi dengan dokter umum",
    },
    {
      name: "Konsultasi Spesialis",
      price: 200000,
      icon: "fa-user-md",
      desc: "Konsultasi dengan dokter spesialis",
    },
    {
      name: "Konsultasi Online",
      price: 50000,
      icon: "fa-video",
      desc: "Konsultasi via video call dengan dokter",
    },
  ],
};

export const homeServices = {
  category: "Layanan Rumah (Home Service)",
  icon: "fa-house-medical",
  color: "from-teal-500 to-teal-600",
  items: [
    {
      name: "Home Service Pemeriksaan Darah",
      price: 150000,
      icon: "fa-droplet",
      desc: "Pengambilan sampel darah ke rumah Anda",
    },
    {
      name: "Home Service Paket Profil Lemak",
      price: 300000,
      icon: "fa-heart",
      desc: "Pemeriksaan profil lemak lengkap di rumah",
    },
    {
      name: "Home Service Paket Diabetes",
      price: 200000,
      icon: "fa-chart-line",
      desc: "Screening diabetes lengkap di rumah",
    },
    {
      name: "Home Service Paket Ginjal",
      price: 250000,
      icon: "fa-droplet-slash",
      desc: "Pemeriksaan fungsi ginjal lengkap di rumah",
    },
    {
      name: "Home Service Paket Jantung",
      price: 500000,
      icon: "fa-heart-pulse",
      desc: "Screening jantung lengkap di rumah",
    },
  ],
};

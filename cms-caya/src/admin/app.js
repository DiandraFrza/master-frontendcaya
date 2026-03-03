import Logo from "./extension/logo-caya.svg";
import Favicon from "./extension/logo-caya.svg";
// Import file CSS kustom untuk menyembunyikan elemen tertentu
import './custom.css'; 

const config = {
  // Tambahkan 'id' ke dalam array locales untuk mengaktifkan Bahasa Indonesia
  locales: ['id'],

  translations: {
    id: {
      "app.components.LeftMenu.navbrand.title": "Caya Medical Center",
      "app.components.LeftMenu.navbrand.workplace": "Content Management",
      "Auth.form.welcome.title": "Selamat Datang!",
      "Auth.form.welcome.subtitle": "Masuk ke panel admin Caya CMS",
      "HomePage.helmet.title": "Dashboard | Caya CMS",
    },
    en: {
      "app.components.LeftMenu.navbrand.title": "Caya Medical Center",
      "app.components.LeftMenu.navbrand.workplace": "Content Management",
    }
  },

  // Custom menu logo & auth logo
  auth: {
    logo: Logo,
  },
  menu: {
    logo: Logo,
  },
  head: {
    favicon: Favicon,
  },

  theme: {
    light: {
      colors: {
        primary100: "#FFF4ED",
        primary200: "#FFD6B8",
        primary500: "#FF6B2C",
        primary600: "#FF562C",
        primary700: "#E84D27",
        buttonPrimary500: "#FF562C",
        buttonPrimary600: "#E84D27",
      },
    },
    dark: {
      colors: {
        primary100: "#3D1F0D",
        primary200: "#5C2E14",
        primary500: "#FF6B2C",
        primary600: "#FF562C",
        primary700: "#FF8C52",
        buttonPrimary500: "#FF562C",
        buttonPrimary600: "#FF8C52",
      },
    },
  },
};

const bootstrap = (app) => {
  // Set default document title secara global
  document.title = "Caya CMS";
};

export default {
  config,
  bootstrap,
};
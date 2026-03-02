import Logo from "./Logo-CMC.png";

const config = {
  // Bahasa Indonesia
  locales: ["id"],

  // Custom translations Indonesia
  translations: {
    id: {
      "app.components.LeftMenu.navbrand.title": "Caya Medical Center",
      "app.components.LeftMenu.navbrand.workplace": "Content Management",
      "Auth.form.welcome.title": "Selamat Datang!",
      "Auth.form.welcome.subtitle": "Masuk ke panel admin Caya Medical Center",
      "HomePage.helmet.title": "Dashboard | Caya CMS",
    },
  },

  // Custom menu logo & auth logo
  auth: {
    logo: Logo,
  },
  menu: {
    logo: Logo,
  },
  head: {
    favicon: Logo,
  },

  // Custom theme - Caya orange brand colors
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
  // Set document title
  document.title = "Caya CMS";
};

export default {
  config,
  bootstrap,
};

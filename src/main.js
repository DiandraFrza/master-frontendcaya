/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import lazy loading styles
import "./assets/lazy-loading.css";
createApp(App).use(router).mount("#app");

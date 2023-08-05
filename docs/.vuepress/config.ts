import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "VueInteract",
  description: "VueInteract is a Vue 3 wrapper for Interact.js",
  theme: defaultTheme({
    logo: '/assets/VueInteract.svg',
  }),
});


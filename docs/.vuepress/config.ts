import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: "en-US",
  title: "VueInteract",
  description: "VueInteract is a Vue 3 wrapper for Interact.js",
  theme: defaultTheme(),
  bundler: viteBundler(),
});


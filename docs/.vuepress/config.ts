import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';
import navbar from './navbar';
import sidebar from './sidebar';

export default defineUserConfig({
  lang: "en-US",
  title: "VueInteract",
  description: "VueInteract is a Vue 3 wrapper for Interact.js",
  theme: defaultTheme({
    navbar,
    sidebar,
    repo: 'https://github.com/kimuraz/vue-interact',
  }),
  bundler: viteBundler(),
});


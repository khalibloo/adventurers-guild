import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import pages from "vite-plugin-react-pages";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";
import lessToJS from "less-vars-to-js";
import fs from "fs";

const themeOverride = lessToJS(fs.readFileSync("./src/styles/theme.less", "utf8"));

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: themeOverride,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      mode: process.env.NODE_ENV === "production" ? "production" : "development",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "icons/android-chrome-192x192.png",
        "icons/android-chrome-512x512.png",
      ],
      manifest: {
        background_color: "#8E42D3",
        theme_color: "#8E42D3",
        description: "Find your next adventure",
        display: "standalone",
        icons: [
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        name: "Adventurers Guild",
        short_name: "Adventurers Guild",
        start_url: "./",
        scope: "/",
      },
    }),
    pages({
      pagesDir: path.join(__dirname, "src", "pages"),
    }),
  ],
});

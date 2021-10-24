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
    VitePWA(),
    pages({
      pagesDir: path.join(__dirname, "src", "pages"),
    }),
  ],
});

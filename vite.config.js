import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginRequire from "vite-plugin-require";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default(), VitePWA()],
});

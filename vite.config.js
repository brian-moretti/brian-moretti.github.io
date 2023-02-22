// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        progettiStar2impact: resolve(
          __dirname,
          "progetti-star2impact/index.html"
        ),
        studiosetecoservice: resolve(
          __dirname,
          "portfolio/studio-seteco-service/index.html"
        ),
        ambulatorioaura: resolve(
          __dirname,
          "portfolio/ambulatorio-aura/index.html"
        ),
        cogescaAppalti: resolve(
          __dirname,
          "portfolio/cogesca-appalti/index.html"
        ),
        mtp: resolve(
          __dirname,
          "portfolio/mtp-ambulatorio-odontoiatrico/index.html"
        ),
        odontoiatriaProgresso: resolve(
          __dirname,
          "portfolio/odontoiatria-progresso/index.html"
        ),
        studioTassi: resolve(__dirname, "portfolio/studio-tassi/index.html"),
      },
    },
  },
  assetsInclude: ["**/*.gltf"],
});

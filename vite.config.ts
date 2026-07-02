import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [
      reactRouter(),
      tsconfigPaths(),
    ],
    ssr: {
      external: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore"],
    },
  };
});

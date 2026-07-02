import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // Inject VITE_* env vars into process.env for SSR builds
  const ssrDefine: Record<string, string> = {};
  for (const key of Object.keys(env)) {
    if (key.startsWith("VITE_")) {
      ssrDefine[`process.env.${key}`] = JSON.stringify(env[key]);
    }
  }

  return {
    define: ssrDefine,
    plugins: [
      reactRouter(),
      tsconfigPaths(),
    ],
    ssr: {
      external: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore"],
    },
  };
});

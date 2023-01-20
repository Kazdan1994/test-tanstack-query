import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitest.dev/guide/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
});

import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: {
    // These must be included when running tests or the first test run on an
    // uncached build will fail
    include: [
      // "assert",
    ],
  },
})

// https://vitejs.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    server: {
        port: 80,
        host: true,
        hmr: {
            host:"localhost",
        }
    },
    plugins: [
        react()
    ]
});
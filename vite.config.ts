
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'copy-cname',
      writeBundle() {
        // Copy CNAME file to dist folder during build
        if (fs.existsSync('./CNAME')) {
          fs.copyFileSync('./CNAME', './dist/CNAME');
          console.log('CNAME file copied to dist folder');
        } else {
          console.log('CNAME file not found');
          // Create CNAME file if it doesn't exist
          fs.writeFileSync('./dist/CNAME', 'myas.world');
          console.log('CNAME file created in dist folder');
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip', 'framer-motion'],
        },
      },
    },
    minify: true,
    sourcemap: false,
  }
}));

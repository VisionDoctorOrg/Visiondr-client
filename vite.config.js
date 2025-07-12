import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "./", // 👈 VERY IMPORTANT
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });


// export default {
//   base: './',  // Relative paths for static deployment
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true
//   }
// }



// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     outDir: 'dist',               // Output directory for built files
//     emptyOutDir: true,            // Clear dist folder before build
//     assetsDir: 'assets',          // Where to place assets
//     rollupOptions: {
//       output: {
//         assetFileNames: 'assets/[name]-[hash][extname]',
//         chunkFileNames: 'assets/[name]-[hash].js',
//         entryFileNames: 'assets/[name]-[hash].js'
//       }
//     }
//   },
//   server: {
//     port: 5173                    // Development server port
//   }
// })
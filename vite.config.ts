import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintplugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintplugin({
      emitWarning: true,
      emitError: true,
      failOnError: true
    })
  ],
  server: {
    host: '0.0.0.0'
  }
})

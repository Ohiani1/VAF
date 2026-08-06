import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ("./") so the build works whether the site is
// served from the repo root (username.github.io) or a project page
// (username.github.io/repo-name/) without any extra configuration.
export default defineConfig({
  plugins: [react()],
  base: './',
})

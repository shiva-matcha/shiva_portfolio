
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // Replace with your GitHub repo name
  plugins: [react()]
})

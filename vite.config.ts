import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/<repo-name>/' for a GitHub project page,
// or keep '/' for a custom domain or <username>.github.io root repo.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

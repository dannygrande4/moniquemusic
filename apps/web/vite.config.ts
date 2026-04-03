import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env from both the app dir and repo root (Vercel runs from root)
  const appEnv = loadEnv(mode, __dirname, '')
  const rootEnv = loadEnv(mode, path.resolve(__dirname, '../..'), '')
  const env = { ...rootEnv, ...appEnv }

  // Default to '/' — only use '/music' if explicitly set
  const basePath = env.VITE_BASE_PATH || '/'

  return {
    plugins: [react()],
    base: basePath.endsWith('/') ? basePath : `${basePath}/`,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: ['tone'],
    },
    server: {
      port: 5173,
    },
  }
})

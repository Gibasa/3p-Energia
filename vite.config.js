import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    loader: 'jsx',
    jsxInject: 'import React from "react"'
  }
})

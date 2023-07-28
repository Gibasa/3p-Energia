import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  base:"/3p-Energia",
  esbuild: {
    loader: 'jsx',
    jsxInject: 'import React from "react"'
  }
})

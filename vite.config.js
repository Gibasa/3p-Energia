import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  base:"/",
  esbuild: {
    loader: 'jsx',
    jsxInject: 'import React from "react"'
  },
  assetsInclude:['**/*.png', '**/*.jpg', '**/*.svg']
})

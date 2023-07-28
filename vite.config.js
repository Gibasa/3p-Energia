import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  base: '/3p-Energia/site/', // define o caminho base do site
  plugins: [reactRefresh()], // usa o plugin react-refresh para hot reload
  build: {
    outDir: 'dist', // define o diretório de saída dos arquivos estáticos
  }
})

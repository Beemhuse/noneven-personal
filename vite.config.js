import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/flutterwave': {
        target: 'https://flw-events-ge.myflutterwave.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/flutterwave/, ''),
      },
    },
  },
})

// export default {
  
// };

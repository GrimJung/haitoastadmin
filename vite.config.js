import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: '/admin_toast_content_mgmt_v5.html',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin_toast_content_mgmt_v5.html',
      },
    },
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [
      react(),
    ],
    root: 'src',
    base: './',
    publicDir: resolve(__dirname, 'src/images'),
    server: {
      port: 9005,
      open: true,
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: isDev,
      rollupOptions: {
        input: {
          app: resolve(__dirname, 'src/index.html'),
        },
        external: [
          'firebase/compat/app',
          'firebase/compat/firestore',
          '@firebase/firestore-types'
        ],
        output: {
          manualChunks: undefined,
        },
      },
    },
    worker: {
      format: 'es',
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'react': resolve(__dirname, '../../node_modules/react'),
        'react-dom': resolve(__dirname, '../../node_modules/react-dom'),
        '@aics/vole-app': resolve(__dirname, '../vole-app/src'),
        'nouislider/distribute/nouislider.css': resolve(__dirname, '../../node_modules/nouislider/dist/nouislider.css'),
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]--[hash:base64:5]',
      },
    },
  };
});

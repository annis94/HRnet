import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'shallowequal': path.resolve(__dirname, './node_modules/shallowequal'),
      'react-is': path.resolve(__dirname, './node_modules/react-is'),
      'hoist-non-react-statics': path.resolve(__dirname, './node_modules/hoist-non-react-statics'),
      'styled-components': path.resolve(__dirname, './node_modules/styled-components')
    },
    dedupe: ['react', 'react-dom']
  },
  optimizeDeps: {
    include: [
      'shallowequal',
      'react-is',
      'hoist-non-react-statics'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});

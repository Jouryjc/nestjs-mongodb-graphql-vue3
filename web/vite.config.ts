import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IduxResolver()],
      // 可以通过指定 `importStyle` 来按需加载 css 或 less 代码
      // 别忘了移除掉 idux.ts 中的样式导入代码
      // resolvers: [IduxResolver({ importStyle: 'css' })],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});

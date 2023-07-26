import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'modules',
    minify: true, // 开启代码压缩
    rollupOptions: {
      input: ['src/index.ts'], // 打包的入口文件
      output: [
        {
          format: 'es', // 指定模块化类型
          entryFileNames: '[name].js', // 入口文件名
          preserveModules: true, // 使用原始模块名作为文件名
          dir: 'es', // 输出目录
          preserveModulesRoot: 'src' // 确保输出的目录和输入时的一致
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: './index.ts', // 库的入口文件
    }
  }
});

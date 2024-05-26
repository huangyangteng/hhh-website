///<reference types="vitest"/>
const {defineConfig}=require('vitest/config')
const react=require('@vitejs/plugin-react')


module.exports=defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      globals:true,  //支持全局导入
        alias:{
            '@/': new URL('./src/', import.meta.url).pathname,
        }
    },

  })

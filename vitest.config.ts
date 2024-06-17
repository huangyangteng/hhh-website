const { defineConfig } = require('vitest/config')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
        },
    },
})

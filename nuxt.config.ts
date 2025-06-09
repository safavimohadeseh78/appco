// https://nuxt.com/docs/api/configuration/nuxt-config
import {loadGlobalCss} from "./scripts/load-css";

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    imports: {
        autoImport: true,
        // dirs: ['utils', 'components', 'store', 'assets', 'models']
    },
    modules: [
        // '@vant/nuxt',
        // '@pinia/nuxt',
        '@unocss/nuxt',
        // '@ant-design-vue/nuxt',
        // 'nuxt-lazy-load',
        '@nuxtjs/sitemap',
        '@vueuse/nuxt',
        // '@vite-pwa/nuxt',
        // '@nuxt/image',
        'dayjs-nuxt'
    ],
/*    css: [
/!*        '~/rtl/assets/css/style.css',
        '~/rtl/assets/css/module-css/banner.css'*!/
    ],*/
    css: loadGlobalCss(),
    app: {
        head: {
            script: [
                {src: '/rtl/assets/js/main.js', defer: true},
            ],
        }
    }
})
export default {

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },

  privateRuntimeConfig: {

  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FE_NUXTJS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    "vue-sweetalert2/nuxt"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
  generate: {
    fallback: true,
    routes: [
      '/'
    ]
  },
  
  axios: {
    baseURL: process.env.BASE_URL_BACKEND+':'+process.env.PORT_BACKEND+'/api/v1'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/user/me', method: 'get', propertyName: 'data.users' },
          logout: { url: '/user/logout', method: 'post' }
        }
      }
    }
  },

  server: {
    port: process.env.PORT // default: 3000
  },
}

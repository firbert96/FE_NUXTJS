export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          name: 'Main',
          component: resolve(__dirname, 'components/Layout/Main.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: resolve(__dirname, 'components/Auth/Login.vue')
        },
        {
          path: '/register',
          name: 'Register',
          component: resolve(__dirname, 'components/Auth/Register.vue')
        },
      )
    }
  },

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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  generate: {
    fallback: true,
    routes: [
      '/'
    ]
  },
  
  axios: {
    baseURL: process.env.BASE_URL+':'+process.env.PORT+'/'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/user/me', method: 'get', propertyName: 'data.users' },
          logout: { url: '/user/get/id', method: 'post', propertyName: 'data' }
        }
      }
    }
  },

  server: {
    port: process.env.PORT // default: 3000
  },
}

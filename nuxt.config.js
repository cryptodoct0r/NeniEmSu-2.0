export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Corben:400,700|Muli|Nobile:400i,500|Roboto:300,400,500,700,900&display=swap'
    }, {
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/normalize.css',
    'aos/dist/aos.css',
    '@/assets/scss/styles.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/aos.js',
      mode: 'client'
    },
    {
      src: '~/plugins/cursor.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  i18n: {
    defaultLocale: "en",
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: "en"
    },
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        uk: {
          "links": {
            "home": "Головна",
            "menu": "Меню",
            "delivery": "Доставка їжі",
            "reserveAPlace": "Резервація місця",
            "reservation": "Резервація",
            "aboutUs": "Про нас",
            "atmosphere": "Атмосфера",
            "vacancy": "Ваканції",
            "contact": "Контакти",
          },
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
        },
        en: {
          "links": {
            "home": "Home",
            "menu": "Menu",
            "delivery": "Food delivery",
            "reserveAPlace": "Reservation of place",
            "reservation": "Reservation",
            "aboutUs": "About us",
            "atmosphere": "Atmosphere",
            "vacancy": "Vacancies",
            "contact": "Contacts"
          },
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
        },
        ru: {
          "links": {
            "home": "Главная",
            "menu": "Меню",
            "delivery": "Доставка еды",
            "reserveAPlace": "Резервация места",
            "reservation": "Резервация",
            "aboutUs": "О нас",
            "atmosphere": "Атмосфера",
            "vacancy": "Вакансии",
            "contact": "Контакты"
          },
          "ukrainian": "Українська",
          "english": "English",
          "russian": "Русский"
        }

      }
    }
  },

  modules: [

    'bootstrap-vue/nuxt',

    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      seo: true,
      baseUrl: 'https://barbaresco.netlify.com',
      locales: [{
          iso: 'uk-Uk',
          code: 'uk',
          name: 'Українська'
        },
        {
          iso: 'en-US',
          code: 'en',
          name: 'English'
        },
        {
          iso: 'ru-RU',
          code: 'ru',
          name: 'Русский'
        }
      ]
    }],

  ],

  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:8000'
    }
  },

  netlifyFiles: {
    existingFilesDirectory: "./netlify/"
  },


  styleResources: {
    scss: [
      '~/assets/scss/_config.scss'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

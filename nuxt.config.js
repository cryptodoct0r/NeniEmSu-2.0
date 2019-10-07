const builtAt = new Date().toISOString()

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
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:site',
      content: '@NeniEmmanuel'
    },
    {
      property: 'og:type',
      content: 'profile'
    },
    {
      property: 'og:updated_time',
      content: builtAt
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/icon.png'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Corben:400,700|Muli|Nobile:400i,500|Roboto:300,400,500,700,900&display=swap'
    }],
    script: [{
      src: 'https://kit.fontawesome.com/41fc25a21c.js'
    }]
  },

  manifest: {
    name: 'Neni Emmanuel',
    short_name: 'NeniEmsu',
    description: 'Blog and Portfolio, Making the web awesome one pixel at a time.',
    theme_color: '#000000',
    background_color: '#0A0A0A',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
    lang: 'en',
    icons: [{
      src: '/icon.png',
      sizes: '512x512',
      type: 'image/png'
    }],
    categories: ['blog', 'productivity', 'education', 'portfolio']
  },

  loading: {
    color: '#fff'
  },

  router: {
    middleware: [
      'animation'
    ]
  },

  css: ['normalize.css/normalize.css',
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
  },
  {
    src: '~/plugins/vue-page-transition',
    ssr: true
  }
    // '~/plugins/lazyload', '~/plugins/globalComponents'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  i18n: {
    defaultLocale: 'en',
    vueI18nLoader: true,
    lazy: false,
    langDir: null,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        uk: {
          'links': {
            'home': 'Головна',
            'menu': 'Меню',
            'delivery': 'Доставка їжі',
            'reserveAPlace': 'Резервація місця',
            'reservation': 'Резервація',
            'aboutUs': 'Про нас',
            'atmosphere': 'Атмосфера',
            'vacancy': 'Ваканції',
            'contact': 'Контакти'
          },
          'ukrainian': 'Українська',
          'english': 'English',
          'russian': 'Русский'
        },
        en: {
          'links': {
            'home': 'Home',
            'menu': 'Menu',
            'delivery': 'Food delivery',
            'reserveAPlace': 'Reservation of place',
            'reservation': 'Reservation',
            'aboutUs': 'About us',
            'atmosphere': 'Atmosphere',
            'vacancy': 'Vacancies',
            'contact': 'Contacts'
          },
          'ukrainian': 'Українська',
          'english': 'English',
          'russian': 'Русский'
        },
        ru: {
          'links': {
            'home': 'Главная',
            'menu': 'Меню',
            'delivery': 'Доставка еды',
            'reserveAPlace': 'Резервация места',
            'reservation': 'Резервация',
            'aboutUs': 'О нас',
            'atmosphere': 'Атмосфера',
            'vacancy': 'Вакансии',
            'contact': 'Контакты'
          },
          'ukrainian': 'Українська',
          'english': 'English',
          'russian': 'Русский'
        }

      }
    }
  },

  modules: [
    '@nuxtjs/markdownit',
    'nuxt-rfg-icon',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-149373590-1'
      }
    ],
    ['vue-scrollto/nuxt', {
      container: 'body',
      duration: 500,
      easing: 'ease-in-out',
      offset: 0,
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true
    }],
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
    }]

  ],

  markdownit: {
    injected: true
  },

  proxy: {
    '/.netlify/functions/': {
      target: 'https://localhost:3000'
    }
  },

  netlifyFiles: {
    existingFilesDirectory: './netlify/'
  },

  styleResources: {
    scss: [
      '~/assets/scss/_config.scss'
    ]
  },

  generate: {
    routes () {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map((file) => {
        return {
          route: `/blog/${file.slice(2, -5)}`, // Remove the .json from the end of the filename
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },

  axios: {},

  build: {

  }
}

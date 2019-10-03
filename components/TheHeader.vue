<i18n>
{
  "uk": {
    "language": "Мова",
    "portfolio": "Портфоліо",
    "home": "Головна",
    "contact": "Контакти",
    "blog": "Блог"
  },
  "en": {
   "language": "Language",
   "portfolio": "Portfolio",
   "home": "Home",
   "contact": "Contacts",
   "blog": "Blog"
  },
  "ru": {
    "language": "язык",
    "portfolio": "Портфолио",
    "home": "Главная",
     "contact": "Контакты",
     "blog": "Блог"
  }
}
</i18n>

<template>
  <div id="headerComponent">
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="dark"
    >
      <div class="container">
        <b-navbar-brand
          class="font-family-headings"
          :to="localePath({name: 'index'},$i18n.locale)"
        >
          <b-img-lazy
            src="~/assets/img/neniemsu-logo.svg"
            class="img-fluid"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="localePath({name: 'index'},$i18n.locale)">
              {{ $t('home') }}
            </b-nav-item>

            <b-nav-item :to="localePath({name: 'portfolio'},$i18n.locale)">
              {{ $t('portfolio') }}
            </b-nav-item>

            <b-nav-item
              v-scroll-to="'#contacts'"
              to="#contact"
            >
              {{ $t('contact') }}
            </b-nav-item>

            <b-nav-item :to="localePath({name: 'blog'},$i18n.locale)">
              {{ $t('blog') }}
            </b-nav-item>

            <b-nav-item-dropdown
              :text="$t('language')"
              right
            >
              <b-dropdown-item
                v-if="$i18n.locale !== 'en'"
                :to="switchLocalePath('en')"
              >
                English
              </b-dropdown-item>
              <b-dropdown-item
                v-if="$i18n.locale !== 'uk'"
                :to="switchLocalePath('uk')"
              >
                Українська
              </b-dropdown-item>
              <b-dropdown-item
                v-if="$i18n.locale !== 'ru'"
                :to="switchLocalePath('ru')"
              >
                Русский
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.font-family-headings {
  color: #568203;
}

.nav-link,
.nuxt-link-active {
  transition: all 500ms ease-in-out;
  line-height: 1.5rem;

  &:hover {
    text-decoration: overline lime;
  }
}

.nuxt-link-exact-active {
  text-decoration: overline lime;
}

nav.navbar {
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;

  // background-color: rgba(34, 34, 34, 0.8);
  background-color: rgba(49, 56, 64, 0.8);
}

nav.navbar .navbar-toggler,
nav.navbar .navbar-toggler:focus {
  border: 0;
}

@media screen and (max-width: 991px) {
  .navbar-collapse {
    text-align: right;
  }
}
</style>

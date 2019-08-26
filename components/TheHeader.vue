<template>
  <div id="headerComponent">
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="dark"
      data-aos="fade-down"
    >
      <div class="container">
        <b-navbar-brand
          class="font-family-headings"
          to="/"
        >NeniEmSu</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
        >

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item href="#">Portfolio</b-nav-item>

            <b-nav-item
              href="#"
              disabled
            >Timeline</b-nav-item>
            <b-nav-item href="#">Contact</b-nav-item>

            <b-nav-item to="blog">Blog</b-nav-item>

            <b-nav-item-dropdown
              text="Language"
              right
            >
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">Uk</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
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
  },
}
</script>

<style lang="scss" scoped>
.font-family-headings {
  color: #568203;
}

.nuxt-link {
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

  background-color: rgba(34, 34, 34, 0.8);
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

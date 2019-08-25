<template>
  <div id="headerComponent">
    <b-navbar
      toggleable="md"
      fixed="top"
      type="dark"
      variant="dark"
    >
      <div class="container">
        <b-navbar-brand
          class="font-family-headings"
          to="/"
        >🥑 NeniEmSu</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
        >

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item
              data-aos="fade-down"
              href="#"
            >Portfolio</b-nav-item>

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
.font-family-headings,
.b-navbar-brand {
  color: #568203;
}
</style>

<template>
  <div id="headerComponent">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand to="/">NeniEmSu</b-navbar-brand>

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
            text="Lang"
            right
          >
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">Uk</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
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

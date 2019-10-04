<template>
  <aside>
    <h2 class="mb-3 font-family-sans-serif h4">
      Categories
    </h2>
    <ul>
      <li
        v-for="Category in Categories"
        :key="Category.slug"
      >
        <nuxt-link :to="Category.path">
          {{ Category.title }} ({{ Category.count }})
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    Categories () {
      return this.$store.state.Categories
    }
  }
}
</script>

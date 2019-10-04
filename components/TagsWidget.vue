<template>
  <aside class="mb-5">
    <h2 class="mb-3 font-family-sans-serif h4">
      All Tags
    </h2>
    <ul class="list-inline">
      <li
        v-for="tag in tags"
        :key="tag.slug"
        class="list-inline-item mb-2"
      >
        <b-button
          variant="primary"
          size="sm"
          :to="tag.path"
        >
          {{ tag.title }} ({{ tag.count }})
        </b-button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    tags () {
      return this.$store.state.tags
    }
  }
}
</script>

<template>
  <b-col
    lg="3"
    class="bg-light mt-4 mt-lg-5 p-4 rounded"
  >
    <aside class="mb-5">
      <h2 class="mb-3 font-family-sans-serif h4">
        About
      </h2>
      <p>Medical Student by 🌞 Full Stack Developer by 🌙, ❤️ to learn new stuff from all calls of life, 👍 to go on walks/bike rides & a proponent of self Development.</p>
    </aside>
    <tags-widget class="mb-5" />
    <categories-widget class="mb-5" />
  </b-col>
</template>

<script>
import TagsWidget from '~/components/TagsWidget.vue'
import CategoriesWidget from '~/components/CategoriesWidget.vue'
export default {
  components: {
    TagsWidget,
    CategoriesWidget
  }
}
</script>

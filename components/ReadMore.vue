<template>
  <b-button
    class="read-more border-0 mb-5"
    variant="primary"
    :to="`/blog/${post.slug}`"
  >
    <span><b class="text-uppercase">Read More</b><span v-html="readingTime" /></span>
  </b-button>
</template>

<script>
export default {
  components: {

  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    readingTime () {
      const wordsCountApprox = this.post.body.split(' ').filter(e => e.length > 2).length
      const timeInMins = Math.round(wordsCountApprox / 200)
      return ` &asymp;${Math.max(1, timeInMins)}min`
    }
  }
}
</script>

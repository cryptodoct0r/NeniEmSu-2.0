<template>
  <div style="margin-top: 100px">
    <h1 class="pt-5 text-center">
      Portfolio
    </h1>

    <topProject />
  </div>
</template>

<script>
import topProject from '~/components/topProjects.vue'
export default {
  scrollToTop: true,
  components: {
    topProject
  },
  head () {
    return {
      title: 'Portfolio - NeniEmsu',
      meta: [
        { hid: 'robots', name: 'robots', content: 'index' }
      ]
    }
  }

}

</script>

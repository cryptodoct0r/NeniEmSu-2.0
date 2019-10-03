<template>
  <div>
    <TheLandingSection />
    <TheAbout />
    <TheSkills />
    <topProject />
  </div>
</template>

<script>
import TheLandingSection from '~/components/TheLandingSection.vue'
import TheAbout from '~/components/TheAbout.vue'
import TheSkills from '~/components/TheSkills.vue'
// import TheContact from '~/components/TheContact.vue'
import topProject from '~/components/topProjects.vue'
export default {
  components: {
    TheLandingSection,
    TheAbout,
    TheSkills,

    topProject
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>

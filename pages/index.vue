<template>
  <div>

    <TheLandingSection />
    <TheAbout />
    <TechStack />
    <topProject />
    <TheContact />
  </div>
</template>

<script>
import TheLandingSection from '~/components/TheLandingSection.vue'
import TheAbout from '~/components/TheAbout.vue'
import TechStack from '~/components/TechStack copy.vue'
import TheContact from '~/components/TheContact.vue'
import topProject from '~/components/topProjects.vue'
export default {
  components: {
    TheLandingSection,
    TheAbout,
    TechStack,
    TheContact,
    topProject
  }
}
</script>

<style>
</style>

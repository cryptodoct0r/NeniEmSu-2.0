<template>
  <div>

    <TheLandingSection />
    <TheAbout />
    <TechStack />
    <TheContact />
  </div>
</template>

<script>
import TheLandingSection from '~/components/TheLandingSection.vue'
import TheAbout from '~/components/TheAbout.vue'
import TechStack from '~/components/TechStack.vue'
import TheContact from '~/components/TheContact.vue'
export default {
  components: {
    TheLandingSection,
    TheAbout,
    TechStack,
    TheContact
  }
}
</script>

<style>
</style>

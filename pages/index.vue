<template>
  <div>

    <TheLandingSection />
    <TheAbout />
    <TechStack />
  </div>
</template>

<script>
import TheLandingSection from '~/components/TheLandingSection.vue'
import TheAbout from '~/components/TheAbout.vue'
import TechStack from '~/components/TechStack.vue'
export default {
  components: {
    TheLandingSection,
    TheAbout,
    TechStack
  }
}
</script>

<style>
</style>

<template>
  <section
    class="jumbotron pt-100 pb-50"
    data-scroll-index="2"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <h2
              data-aos="fade"
              class="mb-3"
            >
              Technologies i currently use
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div>
          <b-card-group deck>
            <b-card
              data-aos="fade-up"
              bg-variant="primary"
              text-variant="white"
              header="Programing Languages"
              class="text-center"
            >
              <b-card-text>HTML5, CSS3, JavaScript, Php </b-card-text>
            </b-card>

            <b-card
              data-aos="fade-up"
              bg-variant="secondary"
              text-variant="white"
              header="FrameWorks/Libraries"
              class="text-center"
            >
              <b-card-text>VueJs, Nuxtjs, Bootstrap/BootstrapVue, Vuetify, Scss, Laravel </b-card-text>
            </b-card>

            <b-card
              data-aos="fade-up"
              bg-variant="success"
              text-variant="white"
              header="Dev-Tools/Version Control"
              class="text-center"
            >
              <b-card-text>Chrome Dev tools, Vue Dev tools, Git, Github, Bash/Cmd </b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div class="mt-3">
          <b-card-group deck>
            <b-card
              data-aos="fade-up"
              bg-variant="info"
              text-variant="white"
              header="Testing/Debugging"
              class="text-center"
            >
              <b-card-text>under Construction!</b-card-text>
            </b-card>

            <b-card
              data-aos="fade-up"
              bg-variant="warning"
              text-variant="white"
              header="Spoken Languages"
              class="text-center"
            >
              <b-card-text>English, Ukrainian, Hausa, Tula & Pigeon English</b-card-text>
            </b-card>

            <b-card
              data-aos="fade-up"
              bg-variant="danger"
              text-variant="white"
              header="Design Tools/Tools"
              class="text-center"
            >
              <b-card-text>Vs-code, Figma, Adobe XD, Gimp</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.pb-50 {
  padding-bottom: 50px !important;
}

.pt-100 {
  padding-top: 100px !important;
}
</style>

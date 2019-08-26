<template>

  <section
    class="about pt-100 pb-100"
    data-scroll-index="1"
  >
    <div
      class="container"
      data-aos="fade-up"
    >
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <!--About Image-->
          <div
            class="about-img"
            data-aos="fade-right"
          >
            <img
              src="~/assets/img/neniEmsu.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <!--About Content-->
          <div class="about-content">
            <div
              class="about-heading"
              data-aos="fade-left"
            >
              <h2>About Me.</h2>
              <span>Mostly Full-Stack Web Developer 🏗️</span>
            </div>
            <p data-aos="fade-up">I'm <b>Neni Emmanuel</b> a Med student studying at Ternopil state medical university by Day and a Mostly full-stack web developer by night.</p>
            <p data-aos="fade-up">I started to code with a Html and Css book a lifetime ago and resently needed an exchange to change bitcoin for the local currency but found none so, i decided to build one. Still underconstruction by the way. So i code to <span class="text-primary">Solve proplems.</span></p>

          </div>
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
section.about .about-img {
  position: relative;
}

section.about .about-img img {
  position: relative;
  width: 100%;
  z-index: 1;
  -webkit-box-shadow: 0 0 85px 0 rgba(0, 0, 0, 0.14);
  box-shadow: 0 0 85px 0 rgba(0, 0, 0, 0.14);
}
img {
  width: 100%;
  height: auto;
}
img {
  vertical-align: middle;
  border-style: none;
}

.pb-100 {
  padding-bottom: 100px !important;
}
.pt-100 {
  padding-top: 100px !important;
}
</style>

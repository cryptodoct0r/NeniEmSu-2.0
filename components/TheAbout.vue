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
            <tilt
              class="cols"
              max=30
              perspective=500
            >
              <a
                href="#"
                class="tilter tilter--2"
              >
                <figure class="tilter__figure">
                  <img
                    class="tilter__image"
                    src="~/assets/img/neniEmsu.jpg"
                    alt="img03"
                  />
                  <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                  </div>
                  <div class="tilter__deco tilter__deco--overlay"></div>
                  <figcaption class="tilter__caption">
                    <h3 class="tilter__title">Neni Emmanuel</h3>
                    <p class="tilter__description">Mostly Full-Stack Dev 🏗️</p>
                  </figcaption>
                  <svg
                    class="tilter__deco tilter__deco--lines"
                    viewBox="0 0 300 415"
                  >
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                  </svg>
                </figure>
              </a>
            </tilt>
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <!--About Content-->
          <div class="about-content">
            <div
              class="about-heading"
              data-aos="fade"
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
import tilt from '~/components/Tilt'
export default {
  components: {
    tilt
  }
}
</script>


<style lang="scss" scoped>
section.about .about-img {
  position: relative;
}

// section.about .about-img img {
//   position: relative;
//   width: 100%;
//   z-index: 1;
//   -webkit-box-shadow: 0 0 85px 0 rgba(0, 0, 0, 0.14);
//   box-shadow: 0 0 85px 0 rgba(0, 0, 0, 0.14);
// }
// img {
//   width: 100%;
//   height: auto;
// }
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

<style scoped>
.tilter {
  position: relative;
  display: block;
  flex: none;
  width: 300px;
  height: 415px;
  margin: auto;
  color: #fff;
  perspective: 1000px;
}

.tilter * {
  pointer-events: none;
}

.tilter:hover,
.tilter:focus {
  color: #f6f6f6;
  outline: none;
}

.tilter__figure,
.tilter__image {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
}

.tilter__figure > * {
  transform: translateZ(0px); /* Force correct stacking order */
}

.tilter__figure {
  position: relative;
}

.tilter__figure::before {
  content: "";
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  box-shadow: 0 30px 20px rgba(86, 130, 3, 0.5);
}

.tilter__deco {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.tilter__deco--overlay {
  background-image: linear-gradient(
    45deg,
    rgba(226, 187, 60, 0.3),
    rgba(86, 130, 3, 0.3),
    rgba(11, 180, 192, 0.3)
  );
}

.tilter__deco--shine div {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 100%
  );
}

.tilter__deco--lines {
  fill: none;
  stroke: #fff;
  stroke-width: 1.5px;
}

.tilter__caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 4em;
}

.tilter__title {
  font-family: "Abril Fatface", serif;
  font-size: 2.5em;
  font-weight: normal;
  line-height: 1;
  margin: 0;
}

.tilter__description {
  font-size: 0.85em;
  margin: 1em 0 0 0;
  letter-spacing: 0.15em;
}
</style>


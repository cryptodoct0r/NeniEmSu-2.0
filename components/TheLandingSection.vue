<template>
  <section
    id="landing"
    class="banner banner-centered waveWrapper waveAnimation"
    data-stellar-background-ratio=".7"
    data-scroll-index="0"
  >
    <div class="container">
      <div class="banner-caption">
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >Neni Emmanuel</h1>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <p class="cd-headline clip mt-30">
            <span>FullStack developer &amp; Medical student!</span><br>
            <q>The Way To Get Started Is To Quit Talking And Begin Doing.</q><br>
            <span class="author">Walt Disney</span>

          </p>

          <div class="social-icons">
            <b-button
              variant="dark"
              class="btn read-more border-0 btn-primary"
            >Download Cv</b-button>
            <a
              href="https://github.com/cryptodoct0r"
              target="_blank"
              rel="no-referal"
            ><i class="fab fa-github"></i></a>
            <a
              href="https://twitter.com/NeniEmmanuel"
              target="_blank"
              rel="no-referal"
            ><i class="fab fa-twitter"></i></a>
            <a
              href="https://www.linkedin.com/in/emmanuel-neni-a67060152/"
              target="_blank"
              rel="no-referal"
            ><i class="fab fa-linkedin-in"></i></a>

          </div>
        </div>

      </div>

    </div>

    <div class="chevron-container mx-auto">
      <nuxt-link
        to="#about"
        v-scroll-to="'#about'"
      >
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text">Scroll down</span>
      </nuxt-link>
    </div>

    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
      ></div>
    </div>
  </section>

</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  // background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}

q {
  color: lightgrey;
  text-align: justify;
}

.author {
  color: darken(hsl(50, 5, 97), 15%);

  &:before {
    content: "\2015";
  }
}

.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}

#landing {
  background-image: linear-gradient(
      to top,
      /* rgba(159, 90, 253, 0.52), */ rgba(86, 130, 3, 0.25),
      rgba(27, 27, 27, 0.52)
    ),
    url("~assets/img/backgroudImagef.jpg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 90vh;
  width: 100vw;
}

.banner {
  width: 100vw;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.banner-centered .banner-caption,
.banner-centered .banner-caption p {
  text-align: left;
}

.banner .banner-caption {
  top: 50%;
  position: absolute;
  color: #fff;
  z-index: 16;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  display: inline-block;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  margin-right: 10px;
  background-color: #222;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 2px solid #222;
  width: 30px;
  height: 30px;
  -webkit-transition: 0.2s all ease;
  -o-transition: 0.2s all ease;
  transition: 0.2s all ease;
}
a,
a:hover,
a:focus {
  color: inherit;
}

.links {
  padding-top: 15px;
}

.chevron-container {
  position: relative;
  width: 24px;
  height: 24px;

  top: 60vh;
  z-index: 16;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  z-index: 100;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: whitesmoke;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

p {
  font-family: "Nobile", Helvetica, Arial, sans-serif;
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: whitesmoke;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 425px) {
  #landing {
    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0% 85%, 0 0);
    height: 90vh;
  }

  .wave {
    display: none;
  }

  .chevron-container {
    position: relative;
    width: 24px;
    height: 24px;

    cursor: pointer;
    top: 68vh;
    z-index: 16;
  }
}
</style>

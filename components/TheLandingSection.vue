<template>
  <section
    id="landing"
    class="banner banner-centered"
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
        <p
          class="cd-headline clip mt-30"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <span>FullStack developer &amp; Medical student!</span><br>
          <q>The Way Get Started Is To Quit Talking And Begin Doing.</q><br>
          <span class="text-italic">Walt Disney</span>

        </p>

        <b-button
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          variant="dark"
          class="btn read-more border-0 btn-primary"
        >Download Cv</b-button>

        <div
          class="social-icons"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <a
            href="https://github.com/cryptodoct0r"
            target="_blank"
            rel="no-referal"
          ><i class="fa fa-github"></i></a>
          <a
            href="https://twitter.com/NeniEmmanuel"
            target="_blank"
            rel="no-referal"
          ><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-google-plus"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
        </div>

      </div>

    </div>
    <div class="chevron-container mx-auto">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <span class="text">Scroll down</span>

    </div>
  </section>

</template>


<script>
export default {

}
</script>

<style lang="scss" scoped>
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
}

.banner {
  width: 100%;
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
  z-index: 11;
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

  cursor: pointer;
  top: 65vh;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  cursor: pointer;
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

@media screen and (max-width: 990px) {
  #landing {
    clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
  }
}
</style>

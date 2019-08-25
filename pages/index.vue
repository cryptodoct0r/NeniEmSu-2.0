<template>
  <div>

    <div class="intro">
      <div class="container my-auto">
        <div class="col-md-8">

          <h1
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            class="title"
          >
            Neni Emmmanuel
          </h1>
          <p
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            class="subtitle"
          >
            <span class="text-primary">Medical Student</span> by 🌞 <span class="text-primary">Full Stack Developer</span> by 🌙, ❤️ to learn new stuff from all calls of life, 👍 to go on walks/bike rides & a proponent of <span class="text-primary">Self Development</span>.

          </p>

          <p class="subtitle"> <q>Some ransome quote from the internet goes here!</q> <br><span class="text-primary text-right">Neni emsu</span> </p>
          <div class="links my-3">
            <button
              href="#"
              target="_blank"
              class="button--green no-touchevents"
            >
              Download Cv
            </button>
            <button
              href="#"
              target="_blank"
              class="button--grey"
            >
              Projects
            </button>

          </div>

        </div>

        <div class="chevron-container mx-auto">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>

        </div>

      </div>

    </div>

    <div class="container">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorum iure delectus corrupti beatae atque cum accusamus quos. Totam praesentium molestiae placeat numquam impedit. Minus quas numquam eos odio repellendus vel tempora obcaecati assumenda aperiam cupiditate exercitationem inventore, tempore quam sint quo, suscipit, temporibus praesentium quisquam recusandae cum laudantium? Minima atque alias quas voluptas deleniti numquam, maiores, quam dolor ad, libero odit quo excepturi ipsa. Consequuntur voluptate nemo laudantium facilis temporibus minima explicabo magni esse odio ipsam, debitis, molestias sequi delectus, cum dolor. Dolorum eaque alias asperiores vel, dolores corporis id aliquam placeat. Maiores molestiae iure, incidunt quae doloremque dignissimos.</p>
      <p
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorum iure delectus corrupti beatae atque cum accusamus quos. Totam praesentium molestiae placeat numquam impedit. Minus quas numquam eos odio repellendus vel tempora obcaecati assumenda aperiam cupiditate exercitationem inventore, tempore quam sint quo, suscipit, temporibus praesentium quisquam recusandae cum laudantium? Minima atque alias quas voluptas deleniti numquam, maiores, quam dolor ad, libero odit quo excepturi ipsa. Consequuntur voluptate nemo laudantium facilis temporibus minima explicabo magni esse odio ipsam, debitis, molestias sequi delectus, cum dolor. Dolorum eaque alias asperiores vel, dolores corporis id aliquam placeat. Maiores molestiae iure, incidunt quae doloremque dignissimos.</p>

    </div>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.intro {
  background-image: linear-gradient(
      to top,
      /* rgba(159, 90, 253, 0.52), */ rgba(86, 130, 3, 0.25),
      rgba(27, 27, 27, 0.52)
    ),
    url("~assets/img/backgroudImagef.jpg");

  background-color: #0a0a0a;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;

  display: flex;
  justify-content: center;
}

.title {
  display: block;
  font-weight: 700;
  font-size: 2.3rem;
  color: #ffffff;
  letter-spacing: 1px;
  opacity: 1;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5rem;
  color: #d8d881;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: left;
  opacity: 1;
}

.links {
  padding-top: 15px;
}

.chevron-container {
  position: relative;
  width: 24px;
  height: 24px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
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
  background: #0a0a0a;
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
  color: #0a0a0a;
  font-family: "Nobile", Helvetica, Arial, sans-serif;
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #0a0a0a;
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
</style>

<template>

  <div id="app">

    <div class="grid">

      <tilt
        class="cols"
        max="30"
        :reverse="true"
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
              <p class="tilter__description">Mostly Full-Stack Dev</p>
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

      <tilt
        class="cols"
        max="30"
        perspective="500"
      >
        <img
          src="https://images.unsplash.com/photo-1453787817889-57ec065fa4a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6bcf80837ea7b83130591ef0bfe51994&auto=format&fit=crop&w=500&q=80"
          alt=""
        >
      </tilt>

    </div>

  </div>

</template>

<script>
import tilt from '~/components/Tilt'
export default {
  components: {
    tilt
  }
}
</script>

<style lang="sass" scoped>


.grid
  display: flex
  max-width: 800px
  margin: auto
  overflow: hidden

.cols
  width: 50%
  margin: 30px

img
  max-width: 100%
  object-fit: cover
  height: auto
  display: block
</style>

<style scoped>
.tilter {
  position: relative;
  display: block;
  flex: none;
  width: 300px;
  height: 415px;
  margin: 1.5em 2.5em;
  color: #fff;
  perspective: 1000px;
}

.tilter * {
  pointer-events: none;
}

.tilter:hover,
.tilter:focus {
  color: #fff;
  outline: none;
}

.tilter__figure,
.tilter__image {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
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


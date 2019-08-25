<template>
  <div>
    <div class="cursor"></div>

    <TheHeader />
    <nuxt />

  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader"
export default {

  components: {
    TheHeader
  }

}
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body {
  margin: 0;
  height: 100vh;
  cursor: none;
  background: rgb(27, 27, 27);
  overflow-x: hidden;
}

.cursor {
  width: 10px;
  height: 10px;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  position: absolute;
  z-index: 10000;
  // transition-duration: 200ms;
  // transition-timing-function: ease-out;
  // animation: cursorAnim 0.5s infinite alternate;
  pointer-events: none;
}

.cursor::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 4px solid greenyellow;
  border-radius: 50%;
  opacity: 0.5;
  top: -1px;
  left: -1px;
  animation: cursorAnim2 0.5s infinite alternate;
}

@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}

@keyframes cursorAnim2 {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
}

@keyframes cursorAnim3 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.expand {
  animation: cursorAnim3 0.5s forwards;
  border: 1px solid #3b8070;
}

p {
  color: white;
  font-family: "arial";
  text-align: center;
  margin-top: 50px;
  font-size: 1.4em;

  a {
    color: teal;
  }
}
</style>

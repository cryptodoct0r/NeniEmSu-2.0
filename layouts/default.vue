<template>
  <div>
    <div class="cursor">

    </div>

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
  cursor: url("~assets/img/circle-cursor.png"), default;
  // background: #ce8243;
  // background: #d8d881;
  // background: #0a0a0a;
  // background: rgb(27, 27, 27);
  background: #fbfbfb;

  color: #484848;
  overflow-x: hidden;
}

* {
  // cursor: url(~assets/img/circle-cursor.png), auto !important;
}
// *:hover {
//   outline: none;

//   cursor: -webkit-image-set(
//         url(~assets/img/circle-cursor.png) 1x,
//         url(~assets/img/circle-cursorx2.png) 2x
//       )
//       0 0,
//     default !important;
// }

p {
  margin-top: 20px;
  font-size: 1.4em;
}

.cursor {
  width: 15px;
  height: 15px;
  border: 1px solid orangered;
  border-radius: 50%;
  position: absolute;
  z-index: 10000;
  // transition-duration: 200ms;
  // transition-timing-function: ease-out;
  animation: cursorAnim 0.5s infinite alternate;
  pointer-events: none;
}

.cursor::after {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  border: 4px solid #ce8243;
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

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f6f6f6;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $primary;
}
</style>

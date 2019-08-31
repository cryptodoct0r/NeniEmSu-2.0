<template>
  <div>
    <div class="cursor">

    </div>

    <TheHeader />

    <div data-aos="fade">
      <b-button
        class="fixed-bottom laugh-icon"
        variant="primary"
        v-b-modal.modal-1
        @click="showJoke"
        v-b-tooltip.hover
        title="Get a joke"
      ><i class="fas fa-grin-squint-tears fa-2x"></i></b-button>

      <b-modal
        hide-footer
        id="modal-1"
        title="Dad Jokes"
      >
        <p v-if="loading">loading...</p>

        <div v-if="joke">
          <p>{{joke}}</p>
        </div>
      </b-modal>
    </div>
    <nuxt />

    <TheFooter />

  </div>
</template>

<script>
import axios from 'axios'
import TheHeader from "~/components/TheHeader"
import TheFooter from "~/components/TheFooter"
export default {

  components: {
    TheHeader,
    TheFooter
  },

  data () {
    return {
      joke: '',
      loading: false
    }
  },

  methods: {
    async showJoke () {
      this.loading = true
      let config = {
        headers: {
          'Accept': 'application/json'
        }
      }
      const joke = await axios.get('https://icanhazdadjoke.com/', config)
      this.loading = false
      this.joke = joke.data.joke
    }
  },




}
</script>

<style lang="scss">
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

.laugh-icon {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0 !important;
  margin: 0 0 20px 10px;
}

a,
button,
.nuxt-link,
.btn,
.chevron-container {
  &:hover {
    cursor: url("~assets/img/circle-cursorx2.png"), auto;
  }
}

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
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $primary;
}
</style>

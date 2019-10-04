<template>
  <footer id="contacts">
    <div class="container">
      <form
        id="form-box"
        class="p-2 row col-md-6 col-sm-10 mx-auto text-center"
        @submit.prevent="checkForm"
      >
        <h5 class="text-center mx-auto mb-3">
          Get in touch with me.
        </h5>
        <div
          v-if="errors.length"
          class="text-left text-danger"
        >
          <b>Please correct the following error(s):</b>
          <ol>
            <li
              v-for="error in errors"
              :key="error"
              class="ml-3"
            >
              {{ error }}
            </li>
          </ol>
        </div>
        <div
          v-if="success && !errors.length"
          class="text-center text-success mx-auto mb-2"
        >
          <b>Your message has been sent succesfully</b>
        </div>

        <label
          data-aos="fade-up"
          for="name"
          class="form-group input-group col-6"
        >
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-user" /></span>
          </div><input
            v-model="name"
            type="text"
            name="name"
            class="form-control"
            placeholder="Name"
            required
          >
        </label>

        <label
          data-aos="fade-up"
          for="email"
          class="form-group input-group col-6"
        >
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-envelope" /></span>
          </div>
          <input
            v-model="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
          >
        </label>

        <label
          data-aos="fade-up"
          for="subject"
          class="form-group input-group col-12"
        >
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-at" /></span>
          </div>
          <input
            v-model="subject"
            type="text"
            name="subject"
            class="form-control"
            placeholder="Subject"
          >
        </label>

        <label
          data-aos="fade-up"
          for="msg"
          class="form-group input-group col-12"
        >
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-comment-alt" /></span>
          </div>
          <textarea
            id="msg"
            v-model="message"
            name="msg"
            class="form-control"
            placeholder="Write your message"
            cols="30"
            rows="4"
            required
          />
        </label>

        <label
          data-aos="fade-up"
          for="submit"
          class="form-group mx-auto"
        >
          <input
            id="submit"
            type="submit"
            name="submit"
            class="btn btn-primary"
            value="Send"
          >
        </label>
      </form>

      <div class="row">
        <div class="col-md-6 text-center">
          <div class="mx-auto">
            &copy;2017 - {{ new Date().getFullYear() }} —
            <strong>NeniEmSu</strong>
          </div>
        </div>

        <div class="col-md-6 text-center">
          <h6 class="grey--text">
            Built with
            <a
              class="font-weight-bold"
              target="_blank"
              rel="noreferrer"
              href="https://nuxtjs.org"
            >NuxtJs</a>
            &
            <a
              class="font-weight-bold"
              target="_blank"
              rel="noreferrer"
              href="https://bootstrap-vue.js.org/"
            >BootstrapVue</a>
          </h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      errors: [],
      success: false,
      name: null,
      email: null,
      subject: null,
      message: null
    }
  },
  methods: {
    checkForm (e) {
      this.errors = []
      this.success = false

      if (!this.name) {
        this.errors.push('Name Needed')
      }
      if (!this.email) {
        this.errors.push('Email Needed')
      }
      if (!this.subject) {
        this.errors.push('Subject Needed')
      }
      if (!this.message) {
        this.errors.push('Message Needed')
      }
      if (!this.errors.length) {
        this.sendMessage()
      }
      e.preventDefault()
    },
    sendMessage () {
      axios
        .post(`https://api.telegram.org/bot971666849:AAEPhgDVYttaZZxm35uC5IFU-YO3MdH8nh0/sendMessage?chat_id=-1001231729418&text=${this.name} ${this.email} ${this.subject} ${this.message}`)
      this.name = this.email = this.subject = this.message = null
      this.success = true
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 20px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  // background-color: #313840;
  background-color: rgb(36, 41, 46);
  color: #888888;
  bottom: 0;
  margin-bottom: 0;
}

form {
  margin-bottom: 20px;
}

input,
textarea {
  background: transparent;
  border: none;
  border-bottom: 2px #ced4da solid;
  border-radius: 0;
  outline: none;
}

input.btn-primary {
  &:hover,
  &:focus {
    background: transparent;
    border: none;
    border-bottom: 2px #ced4da solid;
    border-radius: 0;
    outline: none;
  }
}
</style>

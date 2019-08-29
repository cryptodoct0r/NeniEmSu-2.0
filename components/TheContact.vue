<template>
  <div
    class="container "
    id="contact-form"
  >

    <form
      id="form-box"
      class="p-2"
      @submit.prevent="checkForm"
    >
      <div
        v-if="errors.length"
        class="text-left text-danger"
      >
        <b>Please correct the following error(s):</b>
        <ol>
          <li
            class="ml-3"
            v-for="error in errors"
            :key="error"
          >{{ error }}</li>
        </ol>
      </div>
      <div
        v-if="success && !errors.length"
        class="text-left text-success"
      >
        <b>Your message has been sent succesfully</b>
      </div>
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-user"></i></span>
        </div>
        <input
          type="text"
          name="name"
          v-model="name"
          class="form-control"
          placeholder="Enter your name"
          required
        >
      </div>
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-envelope"></i></span>
        </div>
        <input
          type="email"
          name="email"
          v-model="email"
          class="form-control"
          placeholder="Enter your email"
          required
        >
      </div>
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-at"></i></span>
        </div>
        <input
          type="text"
          name="subject"
          v-model="subject"
          class="form-control"
          placeholder="Enter subject"
        >
      </div>
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-comment-alt"></i></span>
        </div>
        <textarea
          name="msg"
          id="msg"
          v-model="message"
          class="form-control"
          placeholder="Write your message"
          cols="30"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <input
          type="submit"
          name="submit"
          id="submit"
          class="btn btn-primary btn-block"
          value="Send"
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
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
    checkForm: function (e) {
      this.errors = [];
      this.success = false;

      if (!this.name) {
        this.errors.push("Name Needed");
      }
      if (!this.email) {
        this.errors.push("Email Needed");
      }
      if (!this.subject) {
        this.errors.push("Subject Needed");
      }
      if (!this.message) {
        this.errors.push("Message Needed");
      }
      if (!this.errors.length) {
        this.sendMessage();
      }
      e.preventDefault();
    },
    sendMessage () {
      axios
        .post(`https://api.telegram.org/bot971666849:AAEPhgDVYttaZZxm35uC5IFU-YO3MdH8nh0/sendMessage?chat_id=-1001231729418&text=${this.name} ${this.email} ${this.subject} ${this.message}`)
        .then(({ data }) => {
          if (data.error) {
            this.errors.push(data.error);
          } else if (
            data.name &&
            data.email &&
            data.subject &&
            data.message
          ) {
            this.name = this.email = this.subject = this.message = null;
            this.success = true;
          }
        })
        .catch(error => {
          this.errors.push("Сталася помилка. Повторіть спробу пізніше");
        });
    },
  }
}
</script>

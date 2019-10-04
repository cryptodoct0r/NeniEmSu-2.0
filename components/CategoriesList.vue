<template>
  <ul class="list-inline mb-0">
    <li class="list-inline-item m-0">
      <nuxt-link
        to="#"
        class="text-uppercase font-weight-bold mx-1"
      >
        {{ category }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  }

}
</script>

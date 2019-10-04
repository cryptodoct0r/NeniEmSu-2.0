<template>
  <div>
    <!-- <Pager :info="info" linkClass="page-link rounded" class="pagination justify-content-center"/> -->
  </div>
</template>

<script>
// import { Pager } from 'gridsome'
export default {
  components: {
    // Pager
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

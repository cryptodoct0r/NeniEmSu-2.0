<template>
  <article class="container mt-5 pt-5">
    <div class="row">
      <div
        :data-first="blogPost.title.charAt(0)"
        class="meta-data py-md-5 text-center position-relative d-flex col-md-3"
      >
        <div class="mx-auto mb-2 position-relative">
          <formated-date
            class="post-date font-weight-bold"
            :date="blogPost.date"
          /><i class="d-none d-md-block">in:</i>
          <ul class="list-inline mb-0">
            <li class="list-inline-item m-0">
              <nuxt-link
                :to="blogPost.category[0]"
                class="text-uppercase font-weight-bold mx-1"
              >
                {{ blogPost.category[0] }}
              </nuxt-link>
            </li>
          </ul>
          <div>
            <i>by: </i>
            <nuxt-link
              to="#"
              class="font-weight-bold"
            >
              {{ blogPost.author }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mb-5 py-md-5 col">
        <h1 class="mb-5">
          {{ blogPost.title }}
        </h1>
        <div
          class="page-content"
          v-html="$md.render(blogPost.body)"
        />
      </div>
      <siteSidebar />
    </div>
  </article>
</template>
<script>
import siteSidebar from '~/components/SiteSidebar'
import FormatedDate from '~/components/FormatedDate.vue'
export default {
  components: {
    siteSidebar,
    FormatedDate
  },
  async asyncData ({ params, payload }) {
    if (payload) { return { blogPost: payload } } else {
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}

</script>

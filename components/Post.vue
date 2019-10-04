<template>
  <b-row tag="article">
    <b-col
      :data-first="post.title.charAt(0)"
      md="3"
      class="meta-data py-md-5 text-center position-relative d-flex"
    >
      <div class="mx-auto mb-2 position-relative">
        <formated-date
          class="post-date font-weight-bold"
          :date="post.date"
        />
        <i class="d-none d-md-block">in:</i>
        <categories-list
          class="mb-0"
          :category="post.category[0]"
        />
        <div v-if="post.author">
          <i>by: </i>
          <g-link
            :to="post.author"
            class="font-weight-bold"
          >
            {{ post.author }}
          </g-link>
        </div>
      </div>
    </b-col>
    <b-col class="mb-5 py-md-5">
      <slot>
        <nuxt-link
          :to="`/blog/${post.slug}`"
          class="text-dark"
        >
          <h2
            class="h1 post-title text-break mb-4"
            v-html="post.title"
          />
        </nuxt-link>
        <div
          class="post-excerpt text-break mb-4"
          v-html="post.description"
        />
        <read-more :post="post" />
      </slot>
    </b-col>
  </b-row>
</template>

<script>
import CategoriesList from '~/components/CategoriesList.vue'
import FormatedDate from '~/components/FormatedDate.vue'
import ReadMore from '~/components/ReadMore.vue'
export default {
  components: {
    CategoriesList,
    FormatedDate,
    ReadMore
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

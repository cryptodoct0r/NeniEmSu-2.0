<template>
  <div class="page-index mt-5">
    <div class="container mt-5">
      <BlogSection
        :blogs="blogs"
        class="mt-5 pt-5"
      />
    </div>
  </div>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import blogsEn from '~/contents/en/blogsEn.js'
import blogsUk from '~/contents/uk/blogsUk.js'
export default {
  async asyncData ({ app }) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsUk

    async function asyncImport (blogName) {
      const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
      return wholeMD.attributes
    }
    return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
  },

  components: { BlogSection },
  transition: {
    name: 'slide-fade'
  },
  head () {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: "author", content: "Neni Emmanuel" },
        { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
        { property: "og:title", content: this.$t('indexPageHead.title') },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.$t('indexPageHead.description') },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },
  computed: {
    ogImage: function () {
      return;
    }
  }
}
</script>
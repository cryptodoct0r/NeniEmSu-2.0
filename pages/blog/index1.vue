<template>
  <div
    class="container"
    style="margin-top: 8%;"
  >
    <div class="row align-items-start">
      <main class="bg-white p-0 rounded shadow-lg col-lg-9 col-12">
        <div class="overflow-hidden p-4 p-sm-5 ">
          <h1 class="text-center text-uppercase h5 font-family-sans-serif mb-5">
            Latest Stories
          </h1>
          <article
            v-for="post in blogPosts"
            :key="post.id"
            class="row"
          >
            <div
              :data-first="post.title.charAt(0)"
              class="meta-data py-md-5 text-center position-relative d-flex col-md-3"
            >
              <div class="mx-auto mb-2 position-relative">
                <span class="post-date font-weight-bold">{{ post.date }}</span><i class="d-none d-md-block">in:</i>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item m-0">
                    <nuxt-link
                      :to="post.category[0]"
                      class="text-uppercase font-weight-bold mx-1"
                    >
                      {{ post.category[0] }}
                    </nuxt-link>
                  </li>
                </ul>
                <div>
                  <i>by: </i>
                  <nuxt-link
                    to="#"
                    class="font-weight-bold"
                  >
                    {{ post.author }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="mb-5 py-md-5 col">
              <nuxt-link
                :to="`blog/${post.slug}`"
                class="text-dark"
              >
                <h2 class="h1 font-family-headings post-title text-break mb-4">
                  {{ post.title }}
                </h2>
              </nuxt-link>
              <div class="post-excerpt text-break mb-4">
                <p>{{ post.description }}</p>
              </div>
              <nuxt-link
                :to="`blog/${post.slug}`"
                target="_self"
                class="btn read-more border-0 mb-5 btn-primary"
              >
                <span>
                  <b class="text-uppercase">Read More</b>
                  <span> ≈1min</span>
                </span>
              </nuxt-link>
            </div>
          </article>

          <nav
            role="navigation"
            aria-label="Pagination Navigation"
            class="pagination justify-content-center"
          >
            <a
              href="/"
              aria-label="Current page. Page 1"
              aria-current="true"
              class="active--exact active page-link rounded"
            >1</a><a
              href="/2"
              aria-label="Go to page 2"
              class="page-link rounded"
            >2</a><a
              href="/2"
              aria-label="Go to next page. Page 2"
              class="page-link rounded"
            >›</a>
          </nav>
        </div>
      </main>
      <div class="bg-light mt-4 mt-lg-5 p-4 rounded col-lg-3">
        <aside class="mb-5">
          <h2 class="mb-3 font-family-sans-serif h4">
            About
          </h2>
          <p>Medical Student by 🌞 Full Stack Developer by 🌙, ❤️ to learn new stuff from all calls of life, 👍 to go on walks/bike rides & a proponent of self Development.</p>
        </aside>
        <aside class="mb-5 mb-5">
          <h2 class="mb-3 font-family-sans-serif h4">
            All Tags
          </h2>
          <ul class="list-inline">
            <li class="list-inline-item mb-2">
              <a
                href="/tag/art"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                art (3)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/bike"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                bike (2)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/exposition"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                exposition (4)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/freebie"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                freebie (2)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/health"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                health (4)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/news"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                news (1)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/organic"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                organic (4)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/paris"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                paris (7)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/receipe"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                receipe (1)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/sculpture"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                sculpture (1)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/sport"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                sport (2)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/vegan"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                vegan (3)
              </a>
            </li>
            <li class="list-inline-item mb-2">
              <a
                href="/tag/yoga"
                target="_self"
                class="btn btn-primary btn-sm"
              >
                yoga (2)
              </a>
            </li>
          </ul>
        </aside>
        <aside class="mb-5">
          <h2 class="mb-3 font-family-sans-serif h4">
            Categories
          </h2>
          <ul>
            <li>
              <a
                href="/category/blog"
                class=""
              >Blog (7)</a>
            </li>
            <li>
              <a
                href="/category/beauty"
                class=""
              >Beauty (5)</a>
            </li>
            <li>
              <a
                href="/category/testing"
                class=""
              >Testing (3)</a>
            </li>
            <li>
              <a
                href="/category/kitchen"
                class=""
              >Kitchen (2)</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog - NeniEmsu',
      meta: [
        { hid: 'robots', name: 'robots', content: 'index' }
      ]
    }
  },
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #526488;
}
</style>

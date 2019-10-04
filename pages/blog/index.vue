<template>
  <div class="container my-5">
    <div class="row align-items-start">
      <main class="bg-white p-0 rounded shadow-lg col-lg-9 col-12">
        <div class="overflow-hidden p-4 p-sm-5 ">
          <h1 class="text-center text-uppercase h5 font-family-sans-serif mb-5">
            Latest Stories
          </h1>
          <Post
            v-for="post in blogPosts"
            :key="post.slug"
            :post="post"
          />
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
          <!-- <Pagination :info="$page.allWordPressPost.pageInfo" /> -->
        </div>
      </main>
      <siteSidebar />
      <!-- <div class="bg-light mt-4 mt-lg-5 p-4 rounded col-lg-3">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import siteSidebar from '~/components/SiteSidebar'
import Post from '~/components/Post.vue'
// import Pagination from '~/components/Pagination.vue'\
export default {
  components: {
    Post,
    siteSidebar
    // Pagination
  },
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

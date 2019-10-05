export const state = () => ({
  animation: 'fade-in-up',
  blogPosts: [],
  tags: [{
    title: 'Developer',
    count: 10,
    path: '/'
  },
  {
    title: 'Netlify',
    count: 1,
    path: '/'
  }
  ],
  Categories: [{
    title: 'Developer',
    count: 10,
    path: '/'
  },
  {
    title: 'Netlify',
    count: 1,
    path: '/'
  }
  ]
})

export const getters = {

}

export const actions = {
  async nuxtServerInit ({
    commit
  }) {
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}

export const mutations = {
  SET_ANIMATION (state, animation) {
    state.animation = animation
  },
  setBlogPosts (state, list) {
    state.blogPosts = list.sort((a, b) => new Date(a.date) - new Date(b.date))
  }
}

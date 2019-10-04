export const state = () => ({
  animation: 'fade-in-up',
  blogPosts: []
})

export const getters = {

}

export const actions = {
  async nuxtServerInit ({
    commit
  }) {
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    let blogPosts = files.keys().map((key) => {
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
    state.blogPosts = list
  }
}

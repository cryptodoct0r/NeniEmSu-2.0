<template>
  <div
    class="tilt"
    :class="cls"
    @mouseenter="enter"
    @mousemove="move"
    @mouseleave="leave"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 30
    },
    cls: {
      type: String,
      default: '',
      required: false
    },
    perspective: {
      type: Number,
      default: 900
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      timer: null
    }
  },
  computed: {
    reverseValue () {
      return this.reverse ? -1 : 1
    }
  },
  mounted () {
    this.$el.style.cssText = `
      transform-origin: center;
      will-change: transform;
    `
  },
  methods: {
    getPosition (el) {
      const box = el.getBoundingClientRect()
      return {
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height
      }
    },
    toggleTransition () {
      if (this.timer) { clearTimeout(this.timer) }

      this.$el.style.transition = `
        all 150ms linear
      `
      this.timer = setTimeout(() => {
        this.$el.style.transition = ''
      }, 150)
    },
    enter () {
      this.toggleTransition()
    },
    move (e) {
      const pos = this.getPosition(this.$el)

      const x = Math.min((e.clientX - pos.left) / this.$el.offsetWidth, 1)
      const y = Math.min((e.clientY - pos.top) / this.$el.offsetHeight, 1)

      const X = this.reverseValue * (this.max / 2 - x * this.max)
      const Y = this.reverseValue * (y * this.max - this.max / 2)

      this.$el.style.transform = `
        perspective(${this.perspective}px) rotateX(${Y}deg) rotateY(${X}deg)
      `
    },
    leave (e) {
      this.toggleTransition()

      this.$el.style.transform = `
        perspective(${this.perspective}px) rotateX(0) rotateY(0)
      `
    }
  }
}
</script>

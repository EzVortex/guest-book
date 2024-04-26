<script lang="ts">
import Vue from 'vue'
import PostContainer from '~/components/post/PostContainer.vue'
import PostForm from '~/components/post/PostForm.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    PostForm,
    PostContainer,
  },
  head() {
    return {
      title: 'Guest Book',
    }
  },
  data() {
    return {
      text: null,
      socket: null,
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/',
    })

    if (!this.socket) return

    this.socket.on('post_add', (msg) => {
      if (msg.text) {
        this.posts.unshift({ author: msg.author || null, text: msg.text })
      }
    })
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(`/posts`)
    posts.reverse()
    return { posts }
  },
})
</script>

<template>
  <div class="container">
    <PostForm />
    <PostContainer :posts="posts" />
  </div>
</template>

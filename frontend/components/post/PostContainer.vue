<template>
  <div class="py-2 flex flex-col space-y-4">
    <!--Todo pagination-->
    <PostItem
      v-for="(post, index) in posts"
      :key="`post-${index}`"
      :author="post.author"
    >
      {{ post.text }}
    </PostItem>
  </div>
</template>

<script lang="ts">
import PostItem from '~/components/post/PostItem.vue'

export default {
  name: 'PostContainer',
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>

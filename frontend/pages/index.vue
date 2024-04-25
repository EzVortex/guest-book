<script lang="ts">
import Vue from 'vue'
import PostInput from '~/components/post/PostInput.vue'
import AppButton from '~/components/app/AppButton.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    AppButton,
    PostInput,
  },
  head() {
    return {
      title: 'Guest Book',
    }
  },
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    async submit() {
      console.log(this.comment)
    }
  }
})
</script>

<template>
  <div class="container">
    <PostInput @input="comment = $event" />
    <AppButton @click="submit">Отправить</AppButton>
  </div>
</template>

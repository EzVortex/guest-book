<template>
  <form>
    <PostInput @input="text = $event" />
    <AppButton @click="submit" :busy="busy">Отправить</AppButton>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButton from '~/components/app/AppButton.vue'
import PostInput from '~/components/post/PostInput.vue'

export default Vue.extend({
  name: 'PostForm',
  components: { AppButton, PostInput },
  data() {
    return {
      text: '',
      busy: false,
    }
  },
  methods: {
    async submit() {
      this.busy = true
      if (this.text) {
        await this.$axios.$post('/post', { text: this.text })
      }
      this.busy = false
    },
  },
})
</script>

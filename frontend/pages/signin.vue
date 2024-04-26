<script lang="ts">
import Vue from 'vue'
import LoginForm from '~/components/auth/LoginForm.vue'

export default Vue.extend({
  name: 'SignupPage',
  components: {
    LoginForm,
  },
  head() {
    return {
      title: 'Авторизация',
    }
  },
})
</script>

<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

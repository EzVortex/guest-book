<script lang="ts">
import Vue from 'vue'
import RegisterForm from '~/components/auth/RegisterForm.vue'

export default Vue.extend({
  name: 'SignupPage',
  components: {
    RegisterForm,
  },
  head() {
    return {
      title: 'Регистрация',
    }
  },
})
</script>

<template>
  <div class="container">
    <RegisterForm />
  </div>
</template>

<template>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div class="bg-gray-100 p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
        >
          Авторизация
        </h1>
        <form class="space-y-4 md:space-y-6">
          <div>
            <label
              for="login"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Логин</label
            >
            <input
              v-model="login"
              type="text"
              name="login"
              id="login"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Пароль</label
            >
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <AppButton class="w-full" @click="submit">Авторизоваться</AppButton>
          <p class="text-sm font-light text-gray-500">
            Ещё не зарегистрированы?
            <nuxt-link
              to="/signup"
              class="font-medium text-primary-600 hover:underline"
              >Зарегистрируйтесь здесь</nuxt-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppButton from '~/components/app/AppButton.vue'

export default {
  name: 'LoginForm',
  components: { AppButton },
  props: {
    author: String,
  },
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      if (!this.login || !this.password) return

      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            login: this.login,
            password: this.password,
          },
        })

        if (response && response.message) {
          this.$toast.success(response.message)
          this.$router.push('/')
        }
      } catch (e) {
        console.log(e)
        if (e.response && e.response.data) {
          this.$toast.error(e.response.data.message)
        }
      }
    },
  },
}
</script>

<template>
  <nav class="bg-white w-full z-20 start-0 border-b border-gray-200">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4 container">
      <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Guest Book</span>
      </nuxt-link>
      <div class="flex space-x-2">
        <nuxt-link to="/signin">
          <AppButton>Вход</AppButton>
        </nuxt-link>
        <nuxt-link to="/signup">
          <AppButton>Регистрация</AppButton>
        </nuxt-link>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import AppButton from "~/components/app/AppButton.vue";

export default {
  name: 'Navbar',
  components: {AppButton},
}
</script>

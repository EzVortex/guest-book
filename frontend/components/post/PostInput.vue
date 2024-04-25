<template>
  <div class="py-2">
    <label for="message" class="block mb-2 text-2xl font-medium text-gray-900">Ваш комментарий:</label>
    <textarea v-model="text" @input="input" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Изложите ваши мысли здесь..."></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostInput',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    input() {
      this.$emit('input', this.text)
    }
  }
})
</script>

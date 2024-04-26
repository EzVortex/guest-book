<template>
  <div
    class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {{ author || 'Аноним' }}
    </h5>
    <p class="font-normal text-gray-700">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PostItem',
  props: {
    author: String,
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {},
}
</script>

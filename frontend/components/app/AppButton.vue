<template>
  <button
    :disabled="busy"
    :class="{ 'opacity-50 cursor-default': busy }"
    @click="$emit('click')"
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'AppButton',
  props: {
    busy: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

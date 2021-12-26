<template>
  <button :class="[color, 'px-2 py-1 rounded-8']">
    <span class="text-xs">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'bg-white/20'
    }
  }
}
</script>
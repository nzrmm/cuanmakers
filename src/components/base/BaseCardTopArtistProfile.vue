<template>
  <div class="flex items-center space-x-2">
    <Profile :src="src" :alt="alt" />
    <div>
      <p class="text-sm font-medium mb-1">{{ name }}</p>
      <p class="text-xs text-base-secondary/50">{{ username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    name: {
      type: String
    },
    username: {
      type: String
    }
  }
}
</script>

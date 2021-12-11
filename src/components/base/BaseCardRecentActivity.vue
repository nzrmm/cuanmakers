<template>
  <div class="mb-3 px-3 py-4 bg-white/5 rounded-12 ">
    <div class="flex items-center space-x-2">
      <Profile :src="src" :alt="alt" />
      <div>
        <h4 class="mb-1 font-medium text-sm">{{ title }}</h4>
        <p class="text-xs text-base-secondary/50">{{ description }}</p>
      </div>
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
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
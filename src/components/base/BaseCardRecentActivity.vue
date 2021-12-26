<template>
  <div class="mb-3 px-3 py-4 bg-white/5 rounded-12 ">
    <div class="flex items-center space-x-2">
      <Profile src="recent-2.webp" alt="profile-recent" />
      <div>
        <h4 class="mb-1 font-medium text-sm">{{ name }}</h4>
        <p class="text-xs text-base-secondary/50">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    message: {
      type: String
    }
  }
}
</script>
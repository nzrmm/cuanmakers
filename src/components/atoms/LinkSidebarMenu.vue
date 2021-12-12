<template>

  <!-- Link button for sidebar menu -->
  <router-link :to="{name: to}" class="list-item list-item-hover">
    <img :src="`/icons/${src}`" :alt="alt">
  </router-link>
</template>

<script>
  export default {
    name: 'SidebarLink',
    props: {
      to: {
        type: String
      },
      src: {
        type: String
      },
      alt: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .list-item {
    @apply h-[84px] border-purple flex justify-center items-center transition-all
  }

  .list-item-hover {
    @apply hover:bg-white/10 hover:border-l-4
  }

  .router-link-exact-active {
    @apply bg-white/10 border-l-4
  }
</style>
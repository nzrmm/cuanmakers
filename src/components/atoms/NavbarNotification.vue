<template>
  <div class="nav-item">
    <img :src="`./src/assets/icons/${src}`" :alt="alt">
  </div>
</template>

<script>
  export default {
    name: 'NavbarNotification',
    props: {
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
  .nav-item {
    @apply 
      w-[40px] h-[40px]
      rounded-full bg-base-secondary/20
      flex justify-center items-center
  }
</style>
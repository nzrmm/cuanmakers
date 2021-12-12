<template>

  <!-- Notification for this web, used in Navbar -->
  <button class="w-[40px] h-[40px] rounded-full bg-base-secondary/20 flex justify-center items-center">
    <img :src="`/icons/${src}`" :alt="alt">
  </button>
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
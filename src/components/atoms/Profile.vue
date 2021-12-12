<template>

  <!-- Profile for this web, used in card, navbar -->
  <div class="rounded-full">
    <img :src="`/profiles/${src}`" :alt="alt">
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
    }
  }
}
</script>
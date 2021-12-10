<template>
  <main class="w-9/12 text-white">
    <BaseHero />
  </main>
</template>

<script>
  import BaseHero from '@/components/base/BaseHero.vue';

  export default {
    name: 'TheMain',
    components: {
      BaseHero
    }
  }
</script>

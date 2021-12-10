<template>
  <main class="w-9/12 text-white">
    <BaseHero />
    <BaseContent />
  </main>
</template>

<script>
  import BaseHero from '@/components/base/BaseHero.vue';
  import BaseContent from '@/components/base/BaseContent.vue';
  export default {
    name: 'TheMain',
    components: {
      BaseHero,
      BaseContent
    }
  }
</script>

<template>
  <div class="flex">
    <TheSidebarMenu />
    <main class="container text-white">
      <TheNavbar />
    </main>
  </div>
</template>

<script>
import TheSidebarMenu from '@/components/TheSidebarMenu.vue';
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'Discover',
  components: {
    TheSidebarMenu,
    TheNavbar
  },
};
</script>

<style lang="scss" scoped></style>

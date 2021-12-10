<template>
  <div class="flex">
    <TheSidebarMenu />

    <div class="w-11/12 container">
      <TheNavbar />

      <div>
      <TheMain />
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebarMenu from '@/components/templates/TheSidebarMenu.vue';
import TheNavbar from '@/components/templates/TheNavbar.vue';
import TheMain from '@/components/templates/TheMain.vue';

export default {
  name: 'Discover',
  components: {
    TheSidebarMenu,
    TheNavbar,
    TheMain
  },
};
</script>

<style lang="scss" scoped></style>

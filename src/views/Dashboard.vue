<template>
  <div class="block lg:flex">
    <TheSidebar />

    <div class="pb-12 w-full xl:w-11/12 container">
      <TheNavbar />

      <div class="block lg:flex lg:space-x-5">
        <TheMain />
        <TheSidebarMain />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getArtworks');
      store.dispatch('getTopArtists');
      store.dispatch('getRecentActivities');
    })
  }
};
</script>
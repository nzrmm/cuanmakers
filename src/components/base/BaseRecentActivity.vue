<template>
  <div class="h-[768px] bg-base text-white rounded-20 p-5 overflow-auto">
    <h1 class="mb-5 font-semibold text-xl">Recent Activity</h1>

    <!-- Card Recent Activity -->
    <BaseCardRecentActivity v-for="{id, name, message} in recentActivities" :key="id" :name="name" :message="message" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const recentActivities = computed(() => {
      return store.state.recentActivities;
    })

    return {
      recentActivities
    }
  }  
}
</script>
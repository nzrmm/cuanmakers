<template>
  <div class="h-[768px] bg-base text-white rounded-20 p-5 overflow-auto">
    <h1 class="mb-5 font-semibold text-xl">Recent Activity</h1>

    <!-- Card Recent Activity -->
    <div>
      <template v-for="recentActivity in recentActivities" :key="recentActivity.id">
        <BaseCardRecentActivity src="recent-2.png" alt="recent-1" :name="recentActivity.name" :message="recentActivity.message" />
      </template>
    </div>
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
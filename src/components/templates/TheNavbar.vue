<template>
  <nav class="mb-[16px] w-full text-white">

    <!-- Sidebar in Mobile -->
    <TheSidebarMobile v-if="showSidebar" />

    <div class="h-[90px] flex items-center space-x-5 xl:-ml-5">
      <div class="w-6/12 lg:w-9/12 flex items-center space-x-5">

        <!-- Hamburger Menu -->
        <img @click="toggleSidebar" src="/icons/hamburger.svg" class="block xl:hidden" alt="hamburger-icon">

        <!-- Search Bar -->
        <div class="w-full lg:w-9/12">
          <input type="text" class="w-full h-[40px] lg:h-[56px] text-sm pl-12 pr-4 rounded-12 bg-base focus:ring-2 ring-white/10 outline-none transition-all placeholder-white bg-search" placeholder="Search">
        </div>

        <!-- Ethereum Bar -->
        <div class="w-3/12 hidden lg:block">
          <div class="h-[56px] pl-12 rounded-12 bg-base transition-all bg-ethereum flex items-center">
            <span class="text-sm">543,694,489 ETH</span>
          </div>
        </div>
      </div>

      <!-- Notification and Profile Bar -->
      <div class="w-6/12 lg:w-3/12 flex justify-between items-center">
        <div class="flex space-x-3">
          <Notification src="message.svg" alt="message-icon"/>
          <Notification src="notification.svg" alt="notification-icon"/>
        </div>
        <BaseNavbarProfile />
      </div>

    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const showSidebar = computed(() => {
      return store.state.showSidebar
    })
    
    const toggleSidebar = () => {
      store.commit('TOGGLE_SIDEBAR')
    }

    return {
      showSidebar, toggleSidebar
    }
  }
}
</script>
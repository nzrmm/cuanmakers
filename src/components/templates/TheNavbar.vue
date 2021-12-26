<template>
  <nav class="mb-[16px] w-full text-white">

    <!-- Sidebar in Mobile -->
    <div v-if="showSidebar" class="xl:hidden z-50 fixed w-full md:w-1/2 h-full top-0 left-0 bg-base-dark">
        <section class="px-4 mb-7  h-[90px] flex items-center border-b border-white/10">
          <img @click="toggleSidebar" src="/icons/close.svg" class="xl:hidden" alt="close-icon">

          <div class="mx-auto flex items-center justify-center space-x-3">
            <div class="w-[38px] h-[38px] rounded-full bg-gradient-to-r from-blue to-purple flex justify-center items-center border-2 border-blue">
              <img src="/icons/logo.svg" alt="logo-icon" />
            </div>
            <h1 class="text-lg font-semibold bg-gradient-to-r from-blue to-purple text-transparent bg-clip-text">Cuanmakers</h1>
          </div>
        </section>
        <section class="px-4">
          <div class="mb-12 w-full h-[56px] pl-12 rounded-12 bg-base transition-all bg-ethereum flex items-center">
            <span class="text-sm">543,694,489 ETH</span>
          </div>
          <div class="flex flex-col space-y-10">
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/discover.svg" alt="discover-icons">
              <span>Dashboard</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/transfer.svg" alt="discover-icons">
              <span>Activity</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/note.svg" alt="discover-icons">
              <span>Transaction</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/bookmark.svg" alt="discover-icons">
              <span>My Collection</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/setting.svg" alt="discover-icons">
              <span>Setting</span>
            </div>
          </div>
        </section>
    </div>

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
import { ref } from 'vue';
export default {
  setup() {
    const showSidebar = ref(false);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value
    }

    return {
      showSidebar, toggleSidebar
    }
  }
}
</script>
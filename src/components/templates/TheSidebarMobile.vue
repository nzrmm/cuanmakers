<template>
   <div class="xl:hidden z-50 fixed w-full md:w-1/2 h-full top-0 left-0 bg-base-dark">
        <section class="px-4 mb-7  h-[90px] flex items-center border-b border-white/10">
          <img @click="toggleSidebar" src="/icons/close.svg" class="xl:hidden" alt="close-icon">

          <div class="mx-auto flex items-center justify-center space-x-3">
            <Logo />
            <h1 class="text-lg font-semibold bg-gradient-to-r from-blue to-purple text-transparent bg-clip-text">Cuanmakers</h1>
          </div>
        </section>
        <section class="px-4">
          <div class="mb-12 w-full h-[56px] pl-12 rounded-12 bg-base transition-all bg-ethereum flex items-center">
            <span class="text-sm">543,694,489 ETH</span>
          </div>
          <div class="flex flex-col space-y-10">
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/dashboard.svg" alt="dashboard-icons">
              <span>Dashboard</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/activity.svg" alt="activity-icons">
              <span>Activity</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/transaction.svg" alt="transaction-icons">
              <span>Transaction</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/collection.svg" alt="collection-icons">
              <span>My Collection</span>
            </div>
            <div class="p-2 flex items-center space-x-10">
              <img src="/icons/setting.svg" alt="setting-icons">
              <span>Setting</span>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
   setup() {
      const store = useStore();

      const toggleSidebar = (() => {
         store.commit('TOGGLE_SIDEBAR');
      })

      return {
         toggleSidebar
      }
   }   
}
</script>
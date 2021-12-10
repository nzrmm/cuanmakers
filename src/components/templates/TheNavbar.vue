<template>
  <nav class="mb-[16px] w-full text-white">
    <div class="h-[90px] flex items-center">

      <div class="w-9/12 flex items-center gap-5">
      
        <!-- Search Bar -->
        <div class="w-9/12">
          <input type="text" class="w-full h-[56px] text-sm pl-12 rounded-12 bg-base focus:ring-2 ring-white/10 outline-none transition-all placeholder-white bg-search" placeholder="Search">
        </div>

        <!-- Ethereum Bar -->
        <div class="w-3/12">
          <div class="h-[56px] pl-12 rounded-12 bg-base transition-all bg-ethereum flex items-center">
            <span class="text-sm">543,694,489 ETH</span>
          </div>
        </div>
      </div>

      <!-- Notification and Profile Bar -->
      <div class="w-3/12 flex justify-end items-center gap-3">
        <Notification src="message.svg" alt="message-icon"/>
        <Notification src="notification.svg" alt="notification-icon"/>
        <BaseNavbarProfile />
      </div>

    </div>
  </nav>
</template>
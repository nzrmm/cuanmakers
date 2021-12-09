<template>
  <nav class="h-[90px] flex items-center space-x-5">
    <div class="w-6/12">
      <input type="text" class="
      w-full p-4 pl-12
      rounded-12 bg-base 
      focus:ring-2 ring-white/10 outline-none 
      transition-all placeholder-white
      bg-search" 
      placeholder="Search">
    </div>

    <div class="
      w-2/12 p-4 pl-12
      rounded-12 bg-base
      transition-all bg-ethereum
    ">
      543,694,489 ETH
    </div>

    <div class="w-4/12 flex justify-end items-center">
      <div class="nav-item">
        <img src="@/assets/icons/message.svg" alt="message-icon">
      </div>
      <div class="nav-item">
        <img src="@/assets/icons/notification.svg" alt="notification-icon">
      </div>
      <div class="flex items-center space-x-4">
        <img src="@/assets/people/people-1.svg" alt="people-1">
        <span>Marvin McKinney</span>
        <img src="@/assets/icons/arrow-down.svg" alt="arrow-down-icon">
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .nav-item {
    @apply 
      w-[40px] h-[40px] mr-4
      rounded-full bg-base-secondary/20
      flex justify-center items-center
  }
</style>
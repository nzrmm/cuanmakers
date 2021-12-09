<template>
  <aside class="w-[122px] min-h-screen bg-base">
    <div class="
        mb-[16px]
        h-[90px]
        border-b border-white/10
        flex justify-center items-center
      ">
      <div class="
          w-[38px] h-[38px]
          rounded-full
          bg-gradient-to-r from-blue to-purple
          flex justify-center items-center
          border-2 border-blue
        ">
        <img src="@/assets/icons/logo.svg" alt="logo-icon" />
      </div>
    </div>

    <div>
      <a href="#" class="list-item bg-white/10 border-l-4">
        <img src="@/assets/icons/discover.svg" alt="discover-icon">
      </a>
      <a href="#" class="list-item list-item-hover">
        <img src="@/assets/icons/transfer.svg" alt="transfer-icon">
      </a>
      <a href="#" class="list-item list-item-hover">
        <img src="@/assets/icons/note.svg" alt="note-icon">
      </a>
      <a href="#" class="list-item list-item-hover">
        <img src="@/assets/icons/setting.svg" alt="setting-icon">
      </a>
      <a href="#" class="list-item list-item-hover">
        <img src="@/assets/icons/bookmark.svg" alt="bookmark-icon">
      </a>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
  .list-item {
    @apply h-[84px] border-purple flex justify-center items-center transition-all
  }

  .list-item-hover {
    @apply hover:bg-white/10 hover:border-l-4
  }
</style>

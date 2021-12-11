<template>
  <div class="w-[290px] lg:w-4/12 px-3 py-3">
    <div class="bg-base rounded-12 p-3">

      <!-- Card Header -->
      <div class="mb-4 relative">
        <img :src="`./src/assets/images/${src}`" class="w-full" :alt="alt">  

        <button class="absolute top-3 left-3 px-3 py-1 rounded-12 bg-base-secondary/20">
          <span class="font-medium">{{ category }}</span>
        </button>
        <button class="absolute top-3 right-3 w-[40px] h-[40px] rounded-full bg-base-secondary/20">
          <div class="flex justify-center items-center">
            <img src="@/assets/icons/love.svg" alt="love-icon">
          </div>
        </button>
        <div class="absolute py-1 bottom-0 w-full text-sm bg-base/80 text-center">
          Ends in : 32h : 23m : 12s
        </div>
      </div>
      <!-- End Card Header -->

      <!-- Card Body -->
      <div>
        <div class="mb-4 flex justify-between">
          <p class="text-sm">Current Bid:</p>
          <p class="text-sm text-blue">{{ currentBid }} ETH</p>
        </div>
        <div class="mb-4 text-lg font-medium">
          {{ name }}
        </div>
      </div>
      <!-- End Card Body -->

      <!-- Card Footer -->
      <div class="pt-4 pb-2 border-t border-white/10 flex -space-x-2">
        <Profile src="profile-1-36.png" alt="profile-1-36" />
        <Profile src="profile-2-36.png" alt="profile-2-36" />
        <Profile src="profile-3-36.png" alt="profile-3-36" />
        <Profile src="profile-4-36.png" alt="profile-4-36" />
        <Profile src="profile-5-36.png" alt="profile-5-36" />
        <div class="w-[36px] h-[36px] rounded-full bg-blue flex justify-center items-center">
          <span class="text-xs">100+</span>
        </div>
      </div>
      <!-- End Card Footer -->

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
      },
      alt: {
        type: String,
      },
      category: {
        type: String,
      },
      timer: {
        type: Array
      },
      currentBid: {
        type: String,
      },
      name: {
        type: String,
      }
    },
  }
</script>
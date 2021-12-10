<template>
  <div class="mb-8 bg-gradient-to-br from-blue to-purple rounded-20 overflow-hidden">
    <div class="h-[320px] px-10 flex flex-col justify-center bg-illustration">

      <h1 class="text-[40px] font-semibold mb-4">One Stop NFT Marketplace</h1>
      <div class="mb-6">
        <p class="text-lg ">Discover limited-edition digital artwork</p>
        <p class="text-lg ">Create, Sell, and Collect yours now!</p>
      </div>

      <div class="flex space-x-4">
        <HeroButton>Start Create</HeroButton>
        <HeroButton>How It Work</HeroButton>
      </div>      
    </div>
  </div>
</template>

<script>
  import HeroButton from '@/components/atoms/HeroButton.vue';

  export default {
    name: 'TheMain',
    components: {
      HeroButton
    }
  }
</script>
<template>
  <div class="mb-10 lg:mb-0">
    <h1 class="mb-3 font-semibold lg:text-xl">Explore</h1>

    <!-- Link content menu -->
    <div class="mb-4 flex space-x-4 overflow-x-auto">
      <LinkContent>LiveAction</LinkContent>
      <LinkContent>Art</LinkContent>
      <LinkContent>Photography</LinkContent>
      <LinkContent>Games</LinkContent>
      <LinkContent>Music</LinkContent>
      <LinkContent>Utility</LinkContent>
    </div>

    <!-- Card content menu -->
    <div class="overflow-x-auto lg:overflow-x-hidden">
      <div class="inline-flex lg:flex-wrap -mx-3">

        <BaseCard v-for="artwork in featuredArtworks" :key="artwork.id" category="Art" v-bind="cardContent(artwork)"/>
      
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    const featuredArtworks = computed(() => {
      return store.state.featuredArtworks
    })

    const cardContent = (artwork) => {
      return {
        timer: [artwork.bid_starts, artwork.bid_ends],
        currentBid: artwork.currentBid,
        name: artwork.name
      }
    }

    return {
      featuredArtworks, cardContent
    }
  }
}
</script>
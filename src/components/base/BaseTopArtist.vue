<template>
   <!-- Top Artist -->
    <div class="mb-8 h-[320px] bg-base text-white rounded-20 p-5 overflow-auto">
      <h1 class="mb-5 font-semibold text-xl">Top Artist</h1>

      <!-- Card Top Artist -->
      <div>
        <template v-for="(topArtist, index) in topArtists" :key="topArtist.id">
          <BaseCardTopArtist :rank="index + 1" src="profile-1-40.png" alt="profile-1-40" :name="topArtist.name" :username="topArtist.username" />
        </template>
      </div>

    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const topArtists = computed(() => {
      return store.state.topArtists;
    })

    return {
      topArtists
    }
  }
}
</script>
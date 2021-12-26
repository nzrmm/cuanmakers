<template>
  <div class="mb-5 flex justify-between items-center">

    <div class="flex items-center">
      <p class="w-8 font-semibold text-xl">{{ rank }}.</p>
      <BaseCardTopArtistProfile :src="src" :alt="alt" :name="name" :username="username" />
    </div>

    <ButtonSm color="bg-gradient-to-br from-blue to-purple">Follow</ButtonSm>
  </div>
</template>

<script>
  export default {
    props: {
      rank: {
        type: Number
      },
      src: {
        type: String
      },
      alt: {
        type: String
      },
      name: {
        type: String
      },
      username: {
        type: String
      }
    }
  }
</script>
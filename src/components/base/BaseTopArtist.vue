<template>
   <!-- Top Artist -->
    <div class="mb-8 h-[320px] bg-base text-white rounded-20 p-5">
      <h1 class="mb-5 font-semibold text-xl">Top Artist</h1>

      <!-- Card Artist -->
      <div>
        <BaseCardTopArtist :rank="1" src="profile-1-40.png" name="Broklyn Sims" username="@brosim" />
        <BaseCardTopArtist :rank="2" src="profile-2-40.png" name="Jenny Wilson" username="@jennie" />
        <BaseCardTopArtist :rank="3" src="profile-3-40.png" name="Theresa Webb" username="@theresa" />
        <BaseCardTopArtist :rank="4" src="profile-4-40.png" name="Courtney Henry" username="@courtney" />
      </div>

    </div>
</template>
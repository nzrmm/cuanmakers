<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="flex flex-col items-center">
      <h2 class="mb-8 text-base-secondary font-bold text-6xl uppercase tracking-widest">404 : Not Found :(</h2>
      <router-link :to="{name: 'Discover'}" class="px-6 py-3 bg-gradient-to-r from-blue to-purple text-white rounded-12">
        Back to discover
      </router-link>
    </div>
  </div>
</template>
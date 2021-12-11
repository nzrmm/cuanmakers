<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="flex flex-col items-center">
      <div class="text-8xl">🙁</div>
      <h2 class="mt-4 mb-10 text-base-secondary font-bold text-6xl uppercase tracking-widest">
        <slot></slot>
      </h2>
      <router-link :to="{name: 'Discover'}" class="px-6 py-3 bg-gradient-to-r from-blue to-purple text-white rounded-12">
        Back to discover
      </router-link>
    </div>
  </div>
</template>
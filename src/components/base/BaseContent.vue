<template>
  <div class="mb-12">
    <h1 class="mb-3 font-semibold text-xl">Explore</h1>

    <!-- Link content menu -->
    <div class="mb-4 flex space-x-4">
      <LinkContent>Live Action</LinkContent>
      <LinkContent>Art</LinkContent>
      <LinkContent>Photography</LinkContent>
      <LinkContent>Games</LinkContent>
      <LinkContent>Music</LinkContent>
      <LinkContent>Utility</LinkContent>
    </div>

    <!-- Card content menu -->
    <div class="flex flex-wrap -mx-3">
      <BaseCard src="images-1.png" alt="images-1" category="Art" timer="50h : 30m :20s" :curBid="6.62" title="Water bender"/>
      <BaseCard src="images-2.png" alt="images-2" category="Art" timer="20h : 10m :20s" :curBid="6.34" title="Hally"/>
      <BaseCard src="images-3.png" alt="images-3" category="Art" timer="50h : 30m :30s" :curBid="6.82" title="Abstract"/>
      <BaseCard src="images-4.png" alt="images-4" category="Art" timer="52h : 30m :23s" :curBid="8.25" title="Sparkam"/>
      <BaseCard src="images-5.png" alt="images-5" category="Art" timer="20h : 10m :20s" :curBid="2.624" title="Paranoia"/>
      <BaseCard src="images-6.png" alt="images-6" category="Art" timer="20h : 40m :10s" :curBid="6.52" title="Wondershall"/>
    </div>
  </div>
</template>
<template>
  <div class="h-[768px] bg-base text-white rounded-20 p-5 overflow-auto">
    <h1 class="mb-5 font-semibold text-xl">Recent Activity</h1>

    <!-- Card Recent Activity -->
    <div>
      <!-- Base Card Artive -->
      <div class="mb-3 px-3 py-4 bg-gradient-to-r from-blue/10 to-purple/10 rounded-12 ">
        <div class="flex items-center space-x-2">
          <Profile src="recent-1.png" alt="recent-1" />
          <div>
            <h4 class="mb-1 font-medium text-sm">Water Bender</h4>
            <p class="text-xs text-base-secondary/50">Purchased by you for 0,5 ETH</p>
          </div>
        </div>
      </div>
      <BaseCardRecentActivity src="recent-2.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-3.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-1.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-4.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-5.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-6.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-7.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
      <BaseCardRecentActivity src="recent-8.png" alt="recent-1" title="Water Bender" description="Purchased by you for 0,5 ETH" />
    </div>
  </div>
</template>
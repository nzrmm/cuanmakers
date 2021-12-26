<template>
  <aside class="hidden xl:block w-1/12 min-h-screen bg-base">

    <!-- Logo Menu -->
    <div class="mb-[16px] h-[90px] border-b border-white/10 flex justify-center items-center">
      <Logo />
    </div>

    <!-- Link sidebar menu -->
    <div>
      <ButtonSidebar to="Dashboard" src="dashboard.svg" alt="dashboard-icon" />
      <ButtonSidebar to="Maintenance" src="activity.svg" alt="activity-icon" />
      <ButtonSidebar to="Maintenance" src="transaction.svg" alt="transaction-icon" />
      <ButtonSidebar to="Maintenance" src="setting.svg" alt="setting-icon" />
      <ButtonSidebar to="Maintenance" src="collection.svg" alt="collection-icon" />
    </div>
  </aside>
</template>
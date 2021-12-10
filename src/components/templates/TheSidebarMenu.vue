<template>
  <aside class="w-1/12 min-h-screen bg-base">

    <!-- Logo Menu -->
    <Logo />

    <!-- Feature Menu -->
    <div>
      <SidebarLink to="Discover" src="discover.svg" alt="discover-icon" />
      <SidebarLink to="Transfer" src="transfer.svg" alt="transfer-icon" />
      <SidebarLink to="Transfer" src="note.svg" alt="note-icon" />
      <SidebarLink to="Transfer" src="setting.svg" alt="setting-icon" />
      <SidebarLink to="Transfer" src="bookmark.svg" alt="bookmark-icon" />
    </div>
  </aside>
</template>

<script>
import Logo from '@/components/atoms/Logo.vue';
import SidebarLink from '@/components/atoms/SidebarLink.vue';

export default {
  name: 'TheSidebarMenu',
  components: {
    Logo,
    SidebarLink
  }
}
</script>
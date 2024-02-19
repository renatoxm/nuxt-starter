<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-none">
      <LayoutPageNavbar>
        <template #drawer>
          <LayoutDashboardSidebar mode="mobile" />
        </template>
      </LayoutPageNavbar>
    </div>
    <div class="flex-auto">
      <div>
        <LayoutDashboardSidebar />
      </div>
      <div class="flex flex-col lg:ml-60 xl:ml-80 mt-20">
        <slot />
        <LayoutPageFooter />
      </div>
    </div>
  </div>
</template>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <div class="flex-none">
      <LayoutPageNavbar />
    </div>
    <div class="flex-auto mt-20">
      <LayoutPageBody>
        <slot />
      </LayoutPageBody>
    </div>
    <div class="flex-none">
      <LayoutPageFooter />
    </div>
  </div>
</template>

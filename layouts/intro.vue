<template>
  <div class="slidev-layout intro grid grid-cols-2 gap-x-8">
    <div class="flex flex-col gap-y-4">
      <slot name="left" />
    </div>
    <div class="flex flex-col gap-y-4">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-5xl font-extrabold my-3;
}
</style>

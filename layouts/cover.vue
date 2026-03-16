<template>
  <div class="slidev-layout cover flex flex-col gap-y-3 justify-center">
    <slot />
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-6xl font-extrabold my-2;
}
</style>

<template>
  <div class="slidev-layout default flex flex-col gap-y-4">
    <slot />
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-4xl font-extrabold my-2;
}
</style>

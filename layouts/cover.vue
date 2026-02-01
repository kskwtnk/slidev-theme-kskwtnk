<template>
  <div class="slidev-layout cover flex flex-col h-full">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(*+*) {
  @apply mt-3;
}

:deep(h1) {
  @apply text-6xl font-extrabold my-4;
}
</style>

<template>
  <div class="slidev-layout default">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(>*+*) {
  @apply mt-4;
}

:deep(h1) {
  @apply text-4xl font-extrabold my-5;
}
</style>
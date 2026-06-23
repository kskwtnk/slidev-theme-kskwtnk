<template>
  <div class="slidev-layout center grid place-items-center text-4xl">
    <div class="flex flex-col gap-y-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-6xl font-bold my-2 tracking-tight;
}
</style>

<template>
  <div class="slidev-layout section flex flex-col gap-y-4 justify-center">
    <slot />
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-5xl font-bold my-2 tracking-tight;
}
</style>

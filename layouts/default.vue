<template>
  <div class="slidev-layout default flex flex-col gap-y-4">
    <slot />
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-4xl font-bold my-2;
  font-feature-settings: "palt";
}
:deep(h2) {
  --at-apply: text-3xl font-bold my-1;
  font-feature-settings: "palt";
}
</style>

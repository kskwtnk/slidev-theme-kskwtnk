<template>
  <div class="slidev-layout center grid place-items-center text-4xl">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(> * + *) {
  --at-apply: mt-3;
}

:deep(h1) {
  --at-apply: text-6xl font-extrabold my-5;
}
</style>

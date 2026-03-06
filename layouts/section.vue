<template>
  <div class="slidev-layout section flex flex-col justify-center">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(> * + *) {
  --at-apply: mt-4;
}

:deep(h1) {
  --at-apply: text-5xl font-extrabold my-5;
}
</style>

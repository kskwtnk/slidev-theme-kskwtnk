<script setup lang="ts">
const props = defineProps<{
  class?: string
  layoutClass?: string
}>()
</script>

<template>
  <div
    class="slidev-layout two-cols two-columns grid grid-cols-2 gap-x-4"
    :class="props.layoutClass"
  >
    <div class="col-left flex flex-col gap-y-3 px-5 py-4 bg-white" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right flex flex-col gap-y-3 px-5 py-4 bg-white" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-4xl font-bold my-2 tracking-tight;
}
</style>

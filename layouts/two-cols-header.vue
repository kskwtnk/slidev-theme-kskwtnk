<script setup lang="ts">
const props = defineProps<{
  class?: string
  layoutClass?: string
  panelBackground?: boolean
}>()
</script>

<template>
  <div
    class="slidev-layout two-cols-header grid grid-cols-2 grid-rows-[auto_1fr] gap-x-4 gap-y-4"
    :class="props.layoutClass"
  >
    <div class="col-header col-span-2 flex flex-col gap-y-1">
      <slot />
    </div>
    <div
      class="col-left flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot name="left" />
    </div>
    <div
      class="col-right flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  --at-apply: text-4xl font-bold my-2;
  font-feature-settings: "palt";
}
:deep(h2) {
  --at-apply: text-3xl font-bold;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  class?: string
  layoutClass?: string
  panelBackground?: boolean
}>()
</script>

<template>
  <div
    class="slidev-layout two-by-two grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4"
    :class="props.layoutClass"
  >
    <div
      class="col-top-left flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot />
      <slot name="top-left" />
    </div>
    <div
      class="col-top-right flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot name="top-right" />
    </div>
    <div
      class="col-bottom-left flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot name="bottom-left" />
    </div>
    <div
      class="col-bottom-right flex flex-col gap-y-3"
      :class="[props.class, { 'bg-white px-5 py-4': props.panelBackground }]"
    >
      <slot name="bottom-right" />
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

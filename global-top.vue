<script setup lang="ts">
import { useSlideContext } from "@slidev/client";

const { $slidev } = useSlideContext();
</script>

<template>
  <header class="absolute top-4 left-0 right-0 px-6 text-xs text-stone-500">
    <span>{{ $slidev.themeConfigs.headerText }}</span>
  </header>
</template>

<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
</script>

<template>
  <footer class="absolute bottom-4 left-0 right-0 px-6 text-xs flex justify-between text-stone-500">
    <span>{{ $slidev.themeConfigs.footerLeft }}</span>
    <span>{{ $slidev.themeConfigs.footerRight }}</span>
  </footer>
</template>

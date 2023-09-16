<script lang="ts" setup>
const query = defineProps<{
  id: string
}>()
</script>
<template>
  {{ query.id }}
</template>

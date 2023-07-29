<script setup lang="ts">
const route = useRoute()
const id_post = route.params.id;
</script>
<template>
  <div>
    dinamic post /??
    {{ id_post }}
  </div>
</template>
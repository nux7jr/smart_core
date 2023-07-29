<template>
  <div>
    <video src="/assets/video/slog.mp4"></video>
    <button @click="log(bar)">{{ bar}}</button>
  </div>
</template>

<script setup lang="ts">
const bar = 'fo';

function log(someValue: string) {
  alert(someValue);
}
</script>

<style scoped>

</style>
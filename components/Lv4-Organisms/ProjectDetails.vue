<template>
  <div class="wrapper">
    <div class="details">
      <ProjectIntro />
      <ProjectAbout />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply bg-bianca;
}
.details {
  @apply max-w-[1160px] mx-auto px-4 py-10 flex flex-col gap-8;
}
</style>

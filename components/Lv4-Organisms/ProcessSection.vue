<template>
  <div class="wrapper">
    <div class="process">
      <ProText
        tag="p"
        color="dark-jungle-green"
        size="2.625rem"
        weight="bold"
        class="font-raleway bg-yellowish-tan w-[200px] text-center"
      >
        Process
      </ProText>
      <ProcessResearch />
      <ProcessIdeation />
      <ProcessWireframe />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply bg-bianca;
}
.process {
  @apply max-w-[1160px] mx-auto px-4 py-10 flex flex-col gap-8;
}
</style>

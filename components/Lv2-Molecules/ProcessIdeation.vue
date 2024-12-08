<template>
  <div class="ideation">
    <div>
      <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
        Ideation
      </ProText>
      <ProText tag="p" color="dark-jungle-green" size="xl" weight="normal">
        Transform your financial life with my all-in-one finance app: budgeting,
        investing, and planning for a secure future, all in a single,
        user-friendly. Transform your financial life with my all-in-one finance
        app: budgeting, investing, and planning for a secure future, all in a
        single, user-friendly .
      </ProText>
    </div>

    <div class="flex flex-col md:flex-row gap-8 justify-between items-center">
      <div class="ideation__image">
        <NuxtImg src="/images/ideation1.png" alt="logo" class="ideation__img" />
      </div>
      <div class="ideation__image">
        <NuxtImg src="/images/ideation2.png" alt="logo" class="ideation__img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.ideation {
  @apply flex flex-col gap-11;
}
</style>

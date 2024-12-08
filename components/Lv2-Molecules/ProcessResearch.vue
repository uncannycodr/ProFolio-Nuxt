<template>
  <div class="research">
    <div>
      <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
        Research
      </ProText>
      <ProText tag="p" color="dark-jungle-green" size="xl" weight="normal">
        Transform your financial life with my all-in-one finance app: budgeting,
        investing, and planning for a secure future, all in a single,
        user-friendly. Transform your financial life with my all-in-one finance
        app: budgeting, investing, and planning for a secure future, all in a
        single, user-friendly .
      </ProText>
    </div>

    <div class="research__image">
      <NuxtImg src="/images/intro.png" alt="logo" class="research__img" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.research {
  @apply flex flex-col gap-11 items-center;
}
</style>

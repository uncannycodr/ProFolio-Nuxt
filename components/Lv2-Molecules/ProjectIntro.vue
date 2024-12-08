<template>
  <div class="intro">
    <div class="intro__content">
      <ProText
        tag="p"
        color="dark-jungle-green"
        weight="bold"
        class="min-[1050px]:text-[72px] text-[48px]"
      >
        Finance App & Website
      </ProText>
      <ProText tag="p" color="liver" size="2xl" weight="normal">
        Transform your financial life with my all-in-one finance app: budgeting,
        investing, and planning for a secure future, all in a single,
        user-friendly. Transform your financial life with my all-in-one finance
        app: budgeting, investing, and planning for a secure future, all in a
        single, user-friendly .
      </ProText>
    </div>
    <div class="intro__image">
      <NuxtImg src="/images/intro.png" alt="logo" class="intro__img" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.intro {
  @apply flex flex-col gap-11 items-center;
}
</style>

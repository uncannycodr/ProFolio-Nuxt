<template>
  <div class="wireframe">
    <div>
      <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
        Wireframe
      </ProText>
      <ProText tag="p" color="dark-jungle-green" size="xl" weight="normal">
        Transform your financial life with my all-in-one finance app: budgeting,
        investing, and planning for a secure future, all in a single,
        user-friendly. Transform your financial life with my all-in-one finance
        app: budgeting, investing, and planning for a secure future, all in a
        single, user-friendly .
      </ProText>
    </div>

    <div class="flex sm:flex-row flex-col justify-between gap-8 items-center">
      <div class="wireframe__image">
        <NuxtImg
          src="/images/wireframe1.png"
          alt="logo"
          class="wireframe__img"
        />
      </div>
      <div class="wireframe__image">
        <NuxtImg
          src="/images/wireframe2.png"
          alt="logo"
          class="wireframe__img"
        />
      </div>
      <div class="wireframe__image">
        <NuxtImg
          src="/images/wireframe3.png"
          alt="logo"
          class="wireframe__img"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wireframe {
  @apply flex flex-col gap-11;
}
</style>

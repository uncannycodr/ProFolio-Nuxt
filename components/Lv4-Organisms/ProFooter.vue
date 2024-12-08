<template>
  <div class="wrapper">
    <div class="footer">
      <div class="footer__top">
        <div class="footer__content">
          <ProText tag="p" size="64px" weight="semibold" class="text-white">
            Want to Hire me?
          </ProText>
          <ProText tag="p" weight="medium" class="text-[34px] text-white">
            Feel Free to Contact me
          </ProText>
        </div>
        <div class="footer__btn">
          <ProBtn as="button" variant="footer">
            <ProText tag="p" color="black" size="xl" weight="bold">
              Contact Me
            </ProText>
          </ProBtn>
        </div>
      </div>

      <!-- ----------- -->
      <div class="footer__bottom">
        <div>
          <ProText tag="p" weight="medium" class="text-[24px] text-white">
            Created By
            <span class="font-bold text-[24px] text-white"
              >Muhammad Derry Oktaviandi
            </span>
          </ProText>
        </div>
        <div class="flex sm:flex-row flex-col gap-6 text-white">
          <NuxtLink to="/" class="link text-[24px] font-medium"
            >Linkedin</NuxtLink
          >
          <NuxtLink to="/" class="link text-[24px] font-medium"
            >Instagram</NuxtLink
          >
          <NuxtLink to="/" class="link text-[24px] font-medium"
            >youtube</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply bg-dark-jungle-green;
}
.footer {
  @apply max-w-[1170px] mx-auto px-4 py-10 flex flex-col gap-12;
}
.footer__top {
  @apply flex flex-col gap-20;
}

.footer__bottom {
  @apply flex flex-col md:flex-row justify-between gap-8 items-center pt-16 border-t border-white;
}
</style>

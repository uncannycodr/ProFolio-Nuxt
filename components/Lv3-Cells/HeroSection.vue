<template>
  <div class="wrapper">
    <div class="hero">
      <!-- ----content--- -->
      <div class="hero__content">
        <div class="hero__about">
          <ProText
            tag="p"
            color="dark-jungle-green"
            fluid="xs"
            weight="semibold"
            class="italic max-[500px]:text-[12px]"
          >
            Muhammad Derry Oktaviandi
          </ProText>

          <div class="hero__dot w-[6px] h-[6px] bg-black rounded-full"></div>

          <ProText
            tag="p"
            color="liver"
            fluid="xs"
            weight="normal"
            class="max-[500px]:text-[12px]"
          >
            Product Designer
          </ProText>
        </div>
        <div class="hero__description">
          <ProText
            tag="p"
            color="dark-jungle-green"
            size="7xl"
            weight="bold"
            class="font-raleway min-[1050px]:text-[72px] text-[48px]"
          >
            Product Designer from Indonesia
          </ProText>
          <ProText tag="p" color="liver" size="2xl" weight="normal">
            An Indonesian product designer passionate about blending culture,
            functionality, and sustainability to create user-centric, inspiring
            designs.
          </ProText>
        </div>
        <div class="hero__btn">
          <ProBtn as="button" variant="blue">
            <ProText tag="p" color="black" size="xl" weight="bold">
              Contact Me
            </ProText>
          </ProBtn>
        </div>
      </div>

      <!-- ------Image------- -->
      <div class="hero__image">
        <NuxtImg src="/images/hero.png" alt="logo" class="hero__img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply bg-pale-muave;
}
.hero {
  @apply max-w-[1160px] mx-auto px-4 flex flex-col-reverse min-[1050px]:flex-row min-[1050px]:justify-between min-[1050px]:gap-10 gap-6 py-20 min-[1050px]:items-center;
}
.hero__content {
  @apply min-[1050px]:max-w-[55%] flex flex-col gap-2;
}
.hero__about {
  @apply flex flex-row gap-2 items-center;
}
.hero__description {
  @apply flex flex-col gap-4  min-[1050px]:mb-[60px] mb-[40px];
}
.hero__image {
  @apply min-[1050px]:max-w-[45%];
}
.hero__img {
  @apply w-full min-[400px]:h-full h-96 object-cover object-top;
}
</style>

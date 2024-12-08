<template>
  <div class="wrapper">
    <div class="tools">
      <ProText
        tag="p"
        color="dark-jungle-green"
        size="2rem"
        weight="bold"
        class="font-raleway bg-yellowish-tan w-[100px] text-center"
      >
        Tools
      </ProText>
      <!-- ---------------- -->
      <div class="tools__top">
        <div class="tools__images">
          <div class="tools__image">
            <NuxtImg
              src="/images/tool1.png"
              alt="logo"
              class="tools__img max-w-[133px]"
            />
          </div>
        </div>
        <div class="tools__images">
          <div class="tools__image">
            <NuxtImg
              src="/images/tool2.png"
              alt="logo"
              class="tools__img max-w-[192px]"
            />
          </div>
        </div>
        <div class="tools__images">
          <div class="tools__image">
            <NuxtImg
              src="/images/tool3.png"
              alt="logo"
              class="tools__img max-w-[200px]"
            />
          </div>
        </div>
        <div class="tools__images">
          <div class="tools__image">
            <NuxtImg
              src="/images/tool4.png"
              alt="logo"
              class="tools__img max-w-[133px]"
            />
          </div>
        </div>
        <div class="tools__images">
          <div class="tools__image">
            <NuxtImg
              src="/images/tool5.png"
              alt="logo"
              class="tools__img max-w-[200px]"
            />
          </div>
        </div>
      </div>

      <!-- --------------- -->
      <div class="tools__bottom">
        <div class="tools__image flex-shrink">
          <NuxtImg
            src="/images/tools-image.png"
            alt="logo"
            class="tools__img md:max-w-[600px]"
          />
        </div>
        <div class="tools__content">
          <ProText tag="p" color="dark-jungle-green" size="xl" weight="normal">
            Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo
            eget sit sed. At lorem viverra quis pellentesque nullam amet porta
            scelerisque quam. Donec orci aliquam malesuada elementum et purus.
            Ut ac quam vulputate malesuada vitae id. Accumsan quis massa feugiat
            amet. Et fusce elementum cursus tristique.
          </ProText>
          <div class="tools__author">
            <div class="tools__image">
              <NuxtImg
                src="/images/person.png"
                alt="logo"
                class="tools__img max-w-[107px]"
              />
            </div>
            <div class="tools__about">
              <ProText
                tag="p"
                color="dark-jungle-green"
                size="2rem"
                weight="medium"
              >
                Yassar daffa
              </ProText>
              <ProText
                tag="p"
                color="dark-jungle-green"
                size="2xl"
                weight="medium"
              >
                Design Lead at DANA
              </ProText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply bg-bianca;
}
.tools {
  @apply max-w-[1160px] mx-auto px-4 py-10 flex flex-col gap-8;
}
.tools__top {
  @apply flex  flex-row justify-between gap-4 mb-4 flex-wrap;
}
.tools__bottom {
  @apply flex flex-col min-[1050px]:flex-row justify-between gap-8 mt-4;
}
.tools__content {
  @apply flex flex-col gap-4 flex-1;
}
.tools__author {
  @apply flex flex-row  items-center gap-6;
}
</style>

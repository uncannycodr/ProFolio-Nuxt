<template>
  <div class="project-card" :class="bgColor">
    <div class="project-card__content">
      <div class="project-card__text">
        <ProText
          tag="p"
          color="dark-jungle-green"
          size="2.625rem"
          weight="bold"
        >
          {{ title }}
        </ProText>
        <ProText
          tag="p"
          color="liver"
          size="2xl"
          weight="normal"
          class="min-[950px]:text-2xl max-[600px]:text-xl"
        >
          {{ description }}
        </ProText>
      </div>
      <div class="project-card__btn">
        <ProBtn as="button" :variant="btnVariant">
          <ProText tag="p" color="black" size="xl" weight="bold">
            Read More
          </ProText>
        </ProBtn>
      </div>
    </div>

    <!-- --------- -->
    <div class="project-card__thumbnail">
      <div class="project-card__image">
        <NuxtImg
          :src="imageSrc"
          alt="logo"
          class="project-card__img min-[950px]:w-[396px] w-full"
        />
      </div>
      <div class="project-card__info">
        <div class="project-card__timeline">
          <ProText tag="p" color="dark-jungle-green" size="2xl" weight="bold">
            {{ timelineName }}
          </ProText>
          <ProText tag="p" color="liver" size="xl" weight="normal">
            {{ timeline }}
          </ProText>
        </div>
        <div class="project-card__platform">
          <ProText tag="p" color="dark-jungle-green" size="2xl" weight="bold">
            {{ platformName }}
          </ProText>
          <ProText tag="p" color="liver" size="xl" weight="normal">
            {{ platform }}
          </ProText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  btnVariant: any;
  imageSrc: string;
  timelineName: string;
  timeline: string;
  platformName: string;
  platform: string;
  bgColor: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.project-card {
  @apply p-14 border-4 border-black flex min-[950px]:flex-row flex-col gap-8 justify-between;
  box-shadow: 8px 8px black;
}
.project-card__content {
  @apply flex flex-col gap-20 min-[950px]:max-w-[50%];
}
.project-card__text {
  @apply flex flex-col gap-2;
}

.project-card__thumbnail {
  @apply flex flex-col gap-8;
}
.project-card__info {
  @apply flex flex-row justify-between;
}
.project-card__timeline {
  @apply flex flex-col;
}
.project-card__platform {
  @apply flex flex-col w-[100px];
}
</style>

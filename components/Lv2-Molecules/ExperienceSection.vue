<template>
  <div class="experience">
    <div class="experience__wrapper">
      <div class="experience-heading">
        <ProText
          tag="p"
          color="dark-jungle-green"
          weight="bold"
          class="text-[42px] mr-[20px]"
        >
          Experience
        </ProText>
        <div class="experience-line"></div>
        <div class="experience-dot"></div>
      </div>
      <div class="experience__cards" v-for="card in cards" :key="card.title">
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          {{ card.title }}
        </ProText>
        <div class="experience__info">
          <ProText
            tag="p"
            color="dark-jungle-green"
            weight="semibold"
            class="text-[26px] text-right italic"
          >
            {{ card.company }}
          </ProText>
          <ProText
            tag="p"
            color="dark-jungle-green"
            size="1.375rem"
            weight="normal"
          >
            {{ card.date }}
          </ProText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Product Designer",
    company: "Company A",
    date: "Jan 2023 - Present",
  },
  {
    title: "Sr. UI Designer",
    company: "Company B",
    date: "Jan 2023 - Des 2022",
  },
  {
    title: "Jr. UI Designer",
    company: "Company C",
    date: "Jan 2017 - Des 2021",
  },
];
</script>

<style scoped>
.experience {
  @apply bg-bianca;
}
.experience__wrapper {
  @apply max-w-[1160px] mx-auto px-4 py-20;
}
.experience-heading {
  @apply max-w-[1160px] mx-auto flex  items-center;
}

.experience-line {
  @apply flex-1 h-[2px] bg-black;
  /* Dark color for the line */
}

.experience-dot {
  @apply w-[10px] h-[10px] bg-black rounded-full;
}
.experience__cards {
  @apply flex flex-row gap-6 justify-between border-b-2 border-black pb-4 items-center px-4 pt-12;
}

.experience__info {
  @apply flex flex-col;
}
</style>

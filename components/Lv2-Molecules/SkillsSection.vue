<template>
  <div class="skills">
    <div class="skills-heading">
      <ProText
        tag="p"
        color="dark-jungle-green"
        weight="bold"
        class="text-[42px] mr-[20px]"
      >
        Skills
      </ProText>
      <div class="skills-line"></div>
      <div class="skills-dot"></div>
    </div>
    <div class="flex flex-col gap-6">
      <PracticeMarquee />
      <SkillsMarquee />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills {
  @apply bg-yellowish-tan py-16 border-t-2 border-b-2 border-black mt-3;
}
.skills-heading {
  @apply max-w-[1160px] mx-auto flex items-center pb-10 px-5;
}

.skills-line {
  @apply flex-1 h-[2px] bg-black;
  /* Dark color for the line */
}

.skills-dot {
  @apply w-[10px] h-[10px] bg-black rounded-full;
}
</style>

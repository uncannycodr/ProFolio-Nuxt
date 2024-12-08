<template>
  <div class="wrapper">
    <div class="projects">
      <div class="projects-heading">
        <ProText
          tag="p"
          color="dark-jungle-green"
          weight="bold"
          class="text-[42px] mr-[20px]"
        >
          Projects
        </ProText>
        <div class="projects-line"></div>
        <div class="projects-dot"></div>
      </div>

      <div class="projects__cards">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :btnVariant="project.btnVariant"
          :imageSrc="project.imageSrc"
          :timelineName="project.timelineName"
          :timeline="project.timeline"
          :platformName="project.platformName"
          :platform="project.platform"
          :bgColor="project.bgColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Finance App & Website",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    btnVariant: "purple",
    imageSrc: "/images/project1.png",
    timelineName: "Timeline ",
    timeline: "Jan 2020 - Jul 2020",
    platformName: "Platform",
    platform: "Mobile & Website",
    bgColor: "bg-australian-mint",
  },
  {
    title: "Finance App & Website",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    btnVariant: "blue",
    imageSrc: "/images/project2.png",
    timelineName: "Timeline ",
    timeline: "Jan 2020 - Jul 2020",
    platformName: "Platform",
    platform: "Mobile & Website",
    bgColor: "bg-pale-muave",
  },
  {
    title: "Finance App & Website",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    btnVariant: "yellow",
    imageSrc: "/images/project3.png",
    timelineName: "Timeline ",
    timeline: "Jan 2020 - Jul 2020",
    platformName: "Platform",
    platform: "Mobile & Website",
    bgColor: "bg-lavender-mist",
  },
];
</script>

<style scoped>
.wrapper {
  @apply bg-bianca;
}
.projects {
  @apply max-w-[1160px] mx-auto px-4 py-10 flex flex-col gap-8;
}
.projects-heading {
  @apply flex  items-center;
}

.projects-line {
  @apply flex-1 h-[2px] bg-black;
  /* Dark color for the line */
}

.projects-dot {
  @apply w-[10px] h-[10px] bg-black rounded-full;
}
.projects__cards {
  @apply flex flex-col gap-8;
}
</style>

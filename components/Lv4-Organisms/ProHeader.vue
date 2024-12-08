<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__brand">
        <ProText tag="p" weight="bold">ProFolio</ProText>
      </div>

      <div
        class="header__menu"
        :class="{ 'top-[9%]': isMenuOpen, 'top-[-100%]': !isMenuOpen }"
      >
        <ul
          class="flex flex-col md:flex-row md:items-center md:gap-[2vw] gap-8"
        >
          <li v-for="link in Links" :key="link.name">
            <NuxtLink :to="link.path" class="link">{{ link.name }}</NuxtLink>
          </li>
        </ul>

        <div class="md:hidden block">
          <ProBtn as="button" variant="yellow">
            <ProText tag="p" color="black" size="xl" weight="bold">
              Contact Me
            </ProText>
          </ProBtn>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <div class="hidden md:block">
          <ProBtn as="button" variant="yellow">
            <ProText tag="p" color="black" size="xl" weight="bold">
              Contact Me
            </ProText>
          </ProBtn>
        </div>

        <!-- Toggle between menu and close icon based on isMenuOpen -->
        <IconMenu2
          v-if="!isMenuOpen"
          class="w-12 h-10 cursor-pointer md:hidden"
          @click="toggleMenu"
        />

        <IconX
          v-else
          class="w-12 h-10 cursor-pointer md:hidden"
          @click="toggleMenu"
        />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { IconMenu2, IconX } from "@tabler/icons-vue";
import { ref } from "vue";

const Links = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Experiences",
    path: "experiences",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

// Create a reactive state to control menu open/close
const isMenuOpen = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.header {
  @apply bg-white;
}

.header__nav {
  @apply max-w-[1170px] mx-auto px-4 md:py-6 py-6 flex flex-row items-center justify-between;
}
.header__brand {
  @apply font-jockey-one text-[42.93px];
  -webkit-text-stroke: 3px black;
  -webkit-text-fill-color: white;
}
.header__menu {
  @apply md:static absolute md:bg-white bg-day-sky-blue  md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 transition-all duration-[800ms] ease-in-out flex-col md:flex-row pt-16 md:pt-0  gap-8 md:gap-0 z-[1] md:z-0;
}
.link {
  @apply text-black font-medium text-lg hover:text-liver transition duration-300 ease-in-out;
}
.router-link-exact-active {
  @apply font-bold hover:text-black;
}
</style>

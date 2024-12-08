<template>
  <component :is="as" :class="btnClasses">
    <component :is="leftIcon" class="w-4 h-4 text-white font-bold" />
    <span>
      <slot />
    </span>
    <component :is="rightIcon" class="w-5 h-5 ml-2" />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: string | object;
  leftIcon?: object;
  rightIcon?: object;
  variant?: "yellow" | "blue" | "purple" | "footer";
}
const props = defineProps<Props>();

const btnClasses = computed(() => [
  "btn",
  props.variant ? `btn--${props.variant}` : "", // Modifier for variant
]);
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center bg-black px-4 py-3 hover:bg-bianca  transition duration-300 ease-in-out;
  box-shadow: 6px 4px black;
}
.btn--yellow {
  @apply bg-yellowish-tan border-2 border-black;
}
.btn--blue {
  @apply bg-day-sky-blue border-2 border-black;
}
.btn--purple {
  @apply bg-pale-muave border-2 border-black;
}
.btn--footer {
  @apply bg-yellowish-tan border-2 border-bianca;
}
</style>

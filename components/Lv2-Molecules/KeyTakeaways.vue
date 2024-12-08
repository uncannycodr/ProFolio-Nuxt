<template>
  <div class="wrapper">
    <div class="key">
      <ProText
        tag="p"
        color="dark-jungle-green"
        size="2rem"
        weight="bold"
        class="font-raleway bg-yellowish-tan w-[250px] text-center"
      >
        Key Takeaways
      </ProText>
      <ProText tag="p" color="dark-jungle-green" size="xl" weight="normal">
        Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo eget
        sit sed. At lorem viverra quis pellentesque nullam amet porta
        scelerisque quam. Donec orci aliquam malesuada elementum et purus. Ut ac
        quam vulputate malesuada vitae id. Accumsan quis massa feugiat amet. Et
        fusce elementum cursus tristique. Pharetra enim turpis ipsum pretium.
        Felis pharetra feugiat interdum nunc nec lacus mi posuere bibendum. Nibh
        ipsum purus senectus purus rhoncus imperdiet enim. Tortor rutrum mauris
        risus nec.
      </ProText>
      <div
        class="flex sm:flex-row flex-col items-center gap-8 justify-center mt-8"
      >
        <div class="key__image">
          <NuxtImg src="/images/key1.png" alt="logo" class="wireframe__img" />
        </div>
        <div class="key__image">
          <NuxtImg src="/images/key2.png" alt="logo" class="wireframe__img" />
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
.key {
  @apply max-w-[1160px] mx-auto px-4 py-10 flex flex-col gap-2;
}
</style>

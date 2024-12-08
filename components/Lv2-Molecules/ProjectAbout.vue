<template>
  <div class="about">
    <div class="about__right">
      <div class="flex flex-col">
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Timeline
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          Jan 2020 -Des 2020
        </ProText>
      </div>
      <div class="flex flex-col">
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Platform
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          Mobile App
        </ProText>
      </div>
      <div class="flex flex-col">
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Role
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          UI Designer
        </ProText>
      </div>
      <div class="flex flex-col">
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Company name
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          DANA
        </ProText>
      </div>
    </div>

    <!-- ------------ -->
    <div class="about__left">
      <div>
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Challange/Problem
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo eget
          sit sed. At lorem viverra quis pellentesque nullam amet porta
          scelerisque quam. Donec orci aliquam malesuada elementum et purus. Ut
          ac quam vulputate malesuada vitae id. Accumsan quis massa feugiat
          amet. Et fusce elementum cursus tristique. Pharetra enim turpis ipsum
          pretium. Felis pharetra feugiat interdum nunc nec lacus mi posuere
          bibendum. Nibh ipsum purus senectus purus rhoncus imperdiet enim.
          Tortor rutrum mauris risus nec.
        </ProText>
      </div>
      <div>
        <ProText tag="p" color="dark-jungle-green" size="2rem" weight="bold">
          Result
        </ProText>
        <ProText tag="p" color="liver" size="2xl" weight="normal">
          Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo eget
          sit sed. At lorem viverra quis pellentesque nullam amet porta
          scelerisque quam. Donec orci aliquam malesuada elementum et purus.
        </ProText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  @apply flex flex-col lg:flex-row justify-between gap-8;
}
.about__right {
  @apply lg:max-w-[30%] flex flex-col gap-4;
}
.about__left {
  @apply lg:max-w-[70%] flex flex-col gap-4;
}
</style>

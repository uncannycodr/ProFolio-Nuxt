<template>
  <div class="stock-ticker">
    <ul>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
    </ul>

    <ul aria-hidden="true">
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="plus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
      <li class="minus">
        <span class="company">UX DESIGN </span>
        <span class="price">*</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  text-align: center;
  margin-block-end: 2.5rem;
}

.stock-ticker {
  font-size: 42px;

  overflow: hidden;
  user-select: none;

  --gap: 20px;
  display: flex;
  gap: var(--gap);
}

.stock-ticker ul {
  list-style: none;
  flex-shrink: 0;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap);

  animation: scroll 40s linear infinite;
}

.stock-ticker:hover ul {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* .stock-ticker ul:first-child {
  background-color: yellow;
}

.stock-ticker ul:last-child {
  background-color: pink;
} */
</style>

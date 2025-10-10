<template>
  <div class="vp-example">
    <div class="vp-example__preview">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-example {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  margin: 1rem 0;
}
.vp-example__preview {
  padding: 1rem;
}
</style>


<template>
  <div>
    <div>
      <slot name="loader"></slot>
    </div>
    <div class="tw-w-full">
      <slot name="header"></slot>
    </div>
    <div class="tw-w-full">
      <slot name="body"></slot>
    </div>
    <div class="tw-w-full">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

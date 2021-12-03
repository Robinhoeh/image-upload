<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div class="tw-w-full">
      <slot name="body"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    Hey This is the image Uploader
    {{ name }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Hello",
    };
  },
};
</script>

<style lang="scss" scoped></style>

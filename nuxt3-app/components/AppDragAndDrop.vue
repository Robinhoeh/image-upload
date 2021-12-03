<template>
  <div
    class="
      tw-bg-blue-lightBackground
      tw-rounded-xl
      tw-border-blue-border
      tw-border-dashed
      tw-border-2
      tw-flex
      tw-flex-col
      tw-items-center
      tw-pt-8
      tw-pb-9
    "
  >
    <template v-if="imageExists">
      <div>img here<img src="" alt="Image of your file" /></div>
    </template>
    <template v-else>
      <SvgsMountainImage class="tw-pb-11 tw-h-28"></SvgsMountainImage>
      <p class="tw-text-grey-lightGrey tw-text-sm">
        Drag & Drop your image here
      </p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    imageExists: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>

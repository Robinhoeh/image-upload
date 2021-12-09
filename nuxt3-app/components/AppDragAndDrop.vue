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
    :class="{'tw-border-none': imageExists}"
  >
    <div v-if="imageExists">
      <img
        :src="userUploadedImage"
        :alt="userUploadedImage"
        class="tw-max-h-80"
      />
    </div>
    <div v-else class="tw-flex tw-flex-col tw-items-center">
      <SvgsMountainImage class="tw-pb-11 tw-h-28"></SvgsMountainImage>
      <p class="tw-text-grey-lightGrey tw-text-sm">
        Drag & Drop your image here
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageExists: {
      type: Boolean,
      required: true,
    },
    userUploadedImage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>

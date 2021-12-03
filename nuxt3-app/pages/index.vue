<template>
  <AppCard
    class="
      tw-min-h-0
      tw-w-96
      tw-bg-white
      tw-rounded-xl
      tw-shadow-card
      tw-mt-48
      tw-mx-auto
      tw-px-8
      tw-py-28
    "
  >
    <template #header>
      <div v-if="isUploadEmpty && !isAssetLoading">
        <h3>Upload your image</h3>
        <p>File should be in ... format</p>
      </div>
      <div v-if="!isUploadEmpty && !isAssetLoading">
        <SvgsCheckCircleIcon></SvgsCheckCircleIcon>
        <h3>Upload Successful!</h3>
      </div>
      <div v-else-if="!isUploadEmpty && isAssetLoading">Uploading...</div>
    </template>
    <template #body>
      <div v-if="isAssetLoading"><ImageLoader></ImageLoader></div>
      <div v-else>
        <AppDragAndDrop :imageExists="!isUploadEmpty"></AppDragAndDrop>
      </div>
    </template>
    <template #footer>
      <div v-if="!isAssetLoading">
        <div v-if="isUploadEmpty">
          <p>Or</p>
          <AppButton>
            <template #content> Choose a file </template>
          </AppButton>
        </div>
        <div v-else class="tw-relative">
          <input
            value="link"
            id="imgLink"
            name="imgLink"
            type="text"
            class="
              tw-w-full
              tw-text-gray-darkGrey
              tw-py-2
              tw-px-3
              tw-text-xs
              tw-bg-blue-lightBackground
              tw-rounded-lg
              tw-border
              tw-border-solid
              tw-border-grey-borderGrey
              tw-h-9
            "
          />
          <AppButton class="tw-absolute btn-nested-input">
            <template #content> Copy Link </template>
          </AppButton>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script>
export default {
  data() {
    return {
      isUploadEmpty: true,
      isAssetLoading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-nested-input {
  top: 2px;
  right: 2px;
}
</style>

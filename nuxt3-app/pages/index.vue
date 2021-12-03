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
      <div v-if="isUploadEmpty && !isAssetLoading">
        <AppDragAndDrop></AppDragAndDrop>
      </div>
      <div v-else-if="isAssetLoading"><ImageLoader></ImageLoader></div>
      <div v-else>-DRAGE DROP FULL STATE COMPONENT-</div>
    </template>
    <template #footer>
      <div v-if="!isAssetLoading">
        <div v-if="isUploadEmpty">
          <p>Or</p>
          <AppButton>
            <template #content> Choose a file </template>
          </AppButton>
        </div>
        <div v-else>
          -INPUT-COMPONENT-
          <AppButton>
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

<style lang="scss" scoped></style>

<template>
  <div>This is the index page</div>
  <AppCard>
    <template #header>
      <div v-if="isUploadEmpty && !isAssetLoading">
        <h3>Upload your image</h3>
        <h4>File should be in ... format</h4>
      </div>
      <div v-if="!isUploadEmpty && !isAssetLoading">
        <SvgsCheckCircleIcon></SvgsCheckCircleIcon>
        <h3>Upload Successful!</h3>
      </div>
      <div v-else-if="!isUploadEmpty && isAssetLoading">Uploading...</div>
    </template>
    <template #body>
      <div v-if="isUploadEmpty && !isAssetLoading">
        -DRAG CROP Empty stat COMPONENT-
      </div>
      <div v-else-if="isAssetLoading">LOADING COMPONENT...</div>
      <div v-else>-DRAG DROP FULL STATE COMPONENT-</div>
    </template>
    <template #footer>
      <div v-if="!isAssetLoading">
        <div v-if="isUploadEmpty">
          <p>Or</p>
          <AppButton>
            <template #content> Choose File </template>
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

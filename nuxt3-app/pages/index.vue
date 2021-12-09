<template>
  <div>
    <AppCard
      class="
        app-card
        tw-flex
        tw-flex-col
        tw-items-center
        tw-min-h-0
        tw-bg-white
        tw-rounded-xl
        tw-shadow-card
        tw-mt-48
        tw-mx-2
        tw-px-8
        tw-py-9
      "
    >
      <template #loader v-if="isAssetLoading">
        <ImageLoader></ImageLoader>
      </template>
      <template #header>
        <div class="tw-pb-8">
          <div class="tw-text-center" v-if="!isAssetLoading && !isUploadSaved">
            <h1 class="tw-mb-5">Upload your image</h1>
            <p class="tw-text-grey-greyOnWhite tw-text-xs">
              File should be in JPEG format
            </p>
          </div>
          <div class="tw-flex tw-flex-col tw-items-center" v-if="isUploadSaved">
            <SvgsCheckCircleIcon
              class="svg-success-icon fill-current"
            ></SvgsCheckCircleIcon>
            <h3>Upload Successful!</h3>
          </div>
        </div>
      </template>
      <template #body>
        <div class="tw-pb-5" v-if="!isAssetLoading">
          <AppDragAndDrop
            :imageExists="isUploadSaved"
            :userUploadedImage="filePreview"
          ></AppDragAndDrop>
        </div>
      </template>
      <template #footer>
        <div v-if="!isAssetLoading">
          <div class="tw-text-center" v-if="!isUploadSaved">
            <p class="tw-text-grey-lightGrey tw-text-xs">Or</p>
            <AppInput @file-upload="uploadUserImage($event)"></AppInput>
          </div>
          <div class="tw-relative" v-if="isUploadSaved">
            <input
              :value="generatedImageLink"
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
            <AppInput class="tw-absolute btn-nested-input"></AppInput>
          </div>
        </div>
      </template>
    </AppCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUploadSaved: false,
      isAssetLoading: false,
      fileName: "",
      filePreview: "",
      generatedImageLink: "www.image.com/aws",
    };
  },
  methods: {
    uploadUserImage($event) {
      this.isAssetLoading = true;

      setTimeout(() => {
        this.fileName = $event.name;
        this.filePreview = $event.previewBase64;
        this.isUploadSaved = true;
        this.isAssetLoading = false;
      }, 3000);

      console.log("User Image selected", $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  @media (min-width: 640px) {
    max-width: 402px;
    margin: 192px auto;
  }
}
.btn-nested-input {
  top: 2px;
  right: 2px;
}
.fill-current {
  fill: green;
}
</style>

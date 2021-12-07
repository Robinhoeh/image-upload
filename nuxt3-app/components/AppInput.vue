<template>
  <div>
    <input
      @change="handleImageUpload($event)"
      id="input-el"
      type="file"
      accept="imgae/*"
      class="
        tw-absolute tw-w-0 tw-overflow-hidden tw-whitespace-nowrap tw-border-0
      "
    />
    <label
      for="input-el"
      class="
        focus:
        tw-shadow-inner
        hover:tw-shadow-xl
        tw-rounded-lg
        tw-py-2
        tw-px-3
        tw-text-xs
        tw-text-white
        tw-bg-blue-background
        input-label
      "
      >Choose a File</label
    >
  </div>
</template>

<script>
export default {
  methods: {
    handleImageUpload($event) {
      const file = $event.target.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          file.previewBase64 = reader.result;
          this.$emit("file-upload", file);
        };
      }
      reader.onerror = (error) => {
        console.log("Error", error);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  clip: rect(0, 0, 0, 0);
}
</style>

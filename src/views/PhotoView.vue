<template>
  <div>
    <img
      v-for="photo in currentAlbumPhotos"
      :key="photo"
      :src="photo.thumbnailUrl"
    />
  </div>
</template>

<script>
export default {
  name: "PhotoView",

  computed: {
    currentAlbumPhotos() {
      return this.$store.state.photos.currentAlbumPhotos;
    },
  },
};
</script>

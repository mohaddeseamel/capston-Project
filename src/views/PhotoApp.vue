<template>
  <layout>
    <template v-slot:header>header</template>
    <template v-slot:sidbar> 
      <album v-for="album in albums" :key="album" :album="album">{{album.title}}</album>
       </template>
    <template v-slot:content>
      <router-view/>
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import Album from "../components/Album.vue"

export default {
  components: {
    Layout,
    Album
  },
 async created(){
    this.$store.dispatch('fetchAlbums')
    // this.fetchPhotosForAlbum(this.$route.params.id)
  },
  methods: {
      fetchPhotosForAlbum(albumId){
          this.$store.dispatch('fetchPhotosForAlbum' , {id: albumId})
      }
  },
  watch:{
      $route:{
          handler(val){
              this.fetchPhotosForAlbum(val.params.id)
          },
          immediate:true
      }
  },
  computed:{
    albums(){
      return this.$store.state.albums.all;
    },
    currentAlbumPhotos(){
      return this.$store.state.photos.currentAlbumPhotos;
    }
  }
};
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
  }
</style>

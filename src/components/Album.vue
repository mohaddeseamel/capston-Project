<template>
    <router-link :to="albumLink">{{album.title}}</router-link>

</template>

<script>
import {useStore} from "vuex"

export default {
    name:"Album",

    props:{
        album:{
            type:Object
        }
    },

    setup(props) {
        const store = useStore();
        const albumLink = `/albums/${props.album.id}`

        const click = () =>{
            store.dispatch('fetchPhotosForAlbum' , {album: props.album})
        }

        return{
            albumLink,
            click
        } 
    }
}
</script>

<style>
    a{
        width: 100%;
        background: darkcyan;
        border: none;
        color: white;
        margin: 5px;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
        transition: .1s;
        display: block;
        text-align: center;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
    }
    a:hover{
        filter: brightness(120%);
        cursor: pointer;
        transition: .1s;
    }
</style>
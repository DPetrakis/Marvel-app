<template>
    <div>
        <h1>Characters collection</h1>
        <div v-if="!characters"> 

            <h1>Cant fetch any characters</h1>

        </div>
        <div v-else>
         <div class="container">
         <div class="row">
            <div class="col-lg-3 col-sm-12" v-for="character in characters" v-bind:key="character.id">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" v-bind:src="character.thumbnail.path + '/' + variant_name + '.' + character.thumbnail.extension" >
                <div class="card-body">
                <h5 class="card-title">{{character.name}}</h5>
                <p class="card-text"></p>
                <router-link :to="'character/' + character.id" class="btn btn-primary">Go somewhere</router-link>
                </div>
                </div>
            </div>
          </div>
         </div>
        </div>
        <div style="height:100px"></div>
    </div>    
</template>
<script>

import {mapState} from "vuex";

export default {
    data(){
        
        return {
            variant_name: "portrait_xlarge"
        }
    },

    created(){

        this.$store.dispatch('fetchCharacters')
    
    },

    computed: {
        ...mapState({
            characters: state => state.characters
        })
    }
  
    

    
}

</script>
<style scoped>

</style>
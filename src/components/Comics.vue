<template>
       <div>
        <h1>Commics collection</h1>
        <div v-if="!comics"> 

            <h1>Cant fetch any cοmmics</h1>

        </div>
        <div v-else>
         <div class="container">
         <div class="row">
            <div class="col-lg-3 col-sm-12" v-for="comic in comics" v-bind:key="comic.id">
                <div class="card h-100" style="width: 18rem;">
                <img class="card-img-top" v-bind:src="comic.thumbnail.path + '/' + variant_name + '.' + comic.thumbnail.extension">
                <div class="card-body">
                <h5 class="card-title">{{comic.title}}</h5>
                <router-link :to="'comic/' + comic.id" class="btn btn-primary">Go somewhere</router-link>
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

        this.$store.dispatch('fetchComics')
    
    },

    computed: {
        ...mapState({
            comics: state => state.comics
        })
    }
  
    

    
}

</script>

<style scoped>
  .card-title {
      min-height: 100px;
  }
</style>
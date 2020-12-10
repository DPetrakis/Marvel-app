<template>

    <div>

        <div class="container">
        <div class="main-body">
    
          
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img v-bind:src="character.thumbnail.path + '/' + variant_name + '.' + character.thumbnail.extension" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{character.name}}</h4>
                      <p class="text-secondary mb-1">{{character.description}}</p>
                      <p class="text-muted font-size-sm">Modified: {{character.modified}}</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
            
                 
              </div>
              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                        <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Series</i></h6>
                            
                            <ul class="list-group list-group-flush" v-if="character.series.items.length">
                            <li class="list-group-item" v-for="serie in character.series.items" v-bind:key="serie.id">{{serie.name}}</li>
                            </ul>
                            <p v-else>
                                No series for this character yet
                            </p>
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Events</i></h6>
                            <ul class="list-group list-group-flush" v-if="character.events.items.length">
                            <li class="list-group-item" v-for="event in character.events.items" v-bind:key="event.id">{{event.name}}</li>
                            </ul>
                            <p v-else>
                                No events for this character yet
                            </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Stories</i></h6>
                            <ul class="list-group list-group-flush" v-if="character.stories.items.length">
                            <li class="list-group-item" v-for="storie in character.stories.items" v-bind:key="storie.id">{{storie.name}}</li>
                            </ul>
                            <p v-else>
                                No stories for this character yet
                            </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    </div>
    
</template>
<script>
/*import axios from 'axios'
  import {public_key,secret_key} from "../marvel"
  import MD5 from "crypto-js/md5"; */
  import {mapState} from "vuex"
  export default {
    data(){
        
        return {
         //     character: Object,
         //     timestamp: 1,
                variant_name: "portrait_xlarge"

        }
    },

    created(){
      //  this.fetchCharacter();
          this.$store.dispatch('fetchCharacter',this.$route.params.id);

    },

    computed: {
        ...mapState({
            character: state => state.character
        })
    },

    methods: {
      /*  fetchCharacter: function(){
            var hash = this.createHash();
            axios.get("http://gateway.marvel.com/v1/public/characters/" + this.$route.params.id +  "?ts=" + this.timestamp + "&apikey=" + public_key + "&hash=" + hash)    
            .then((result) => {
               console.log(result.data.data.results[0]);
               this.character = result.data.data.results[0];
            
            })
            .catch((error) =>{
                console.log(error);
            });
        
        },

        createHash() {
           
            var hash = MD5(this.timestamp + secret_key + public_key).toString();
         
            return hash;
        }
      */  
    }
}
</script>
<style scoped>
 .list-group-item {
     color: #ed1d24;
 }
</style>
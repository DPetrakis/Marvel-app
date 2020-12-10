import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import {public_key,secret_key} from "../marvel";
import MD5 from "crypto-js/md5";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    character: Object,
    timestamp: 1,
    
    
  },


  actions: {

    async fetchCharacters({commit}){
        commit('fetchCharacters');
    },

    async fetchCharacter({commit},id) {
        commit('fetchCharacter',id);
    }
  },
  mutations: {
    fetchCharacters(state){
        
        var hash = createHash(state.timestamp);

        axios.get("http://gateway.marvel.com/v1/public/characters?ts=" + state.timestamp + "&apikey=" + public_key + "&hash=" + hash)
        .then((result) => {
            state.characters =  result.data.data.results;
        })
        .catch((error) =>{
            console.log(error);
        }); 
    },

    fetchCharacter(state,id) {
       var hash = createHash(state.timestamp);
       
       axios.get("http://gateway.marvel.com/v1/public/characters/" + id +  "?ts=" + state.timestamp + "&apikey=" + public_key + "&hash=" + hash)    
            .then((result) => {
               console.log(result.data.data.results[0]);
               state.character = result.data.data.results[0];
            
            })
            .catch((error) =>{
                console.log(error);
        });
       
    }
  },
  
  modules: {

  }
});

//Helper function for creating the required hash for the api call
function createHash(timestamp){
  
  var hash = MD5(timestamp + secret_key + public_key).toString();
  return hash;

}

import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
      items: []
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    getCharacters ({ commit }) {
      axios.get("http://localhost:3000/user")
          .then(response => commit('setCharacters', response.data))
          .catch(error => {
              this.errorMessage = error.message;
              console.error("There was an error!", error);
          });
    },
    
  },
})

import { createStore } from 'vuex';
import axios from 'axios';
import { baseApi, topArtists, recentActivities } from '@/constant/api';

const store = createStore({
  state: {
    topArtists: [],
    recentActivities: []
  },
  mutations: {
    getTopArtists(state, data) {
      state.topArtists = data
    }
  },
  actions: {
    getTopArtists({ commit }) {
      axios.get(`${baseApi}${topArtists}`)
        .then(response => {
          commit('getTopArtists', response.data)
        })
    }
  }
})

export default store;
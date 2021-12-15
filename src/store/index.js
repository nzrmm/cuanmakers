import { createStore } from 'vuex';
import axios from 'axios';
import { baseApi, featuredArtworks, topArtists, recentActivities } from '@/constant/api';

const store = createStore({
  state: {
    featuredArtworks: [],
    topArtists: [],
    recentActivities: []
  },
  mutations: {
    getFeaturedArtworks(state, data) {
      state.featuredArtworks = data;
    },
    getTopArtists(state, data) {
      state.topArtists = data;
    },
    getRecentActivities(state, data) {
      state.recentActivities = data;
    }
  },
  actions: {
    getFeaturedArtworks({ commit }) {
      axios.get(`${baseApi}${featuredArtworks}`)
        .then(response => {
          commit('getFeaturedArtworks', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    getTopArtists({ commit }) {
      axios.get(`${baseApi}${topArtists}`)
        .then(response => {
          commit('getTopArtists', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    getRecentActivities({ commit }) {
      axios.get(`${baseApi}${recentActivities}`)
        .then(response => {
          commit('getRecentActivities', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})

export default store;
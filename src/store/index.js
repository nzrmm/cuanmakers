import { createStore } from 'vuex';
import { getArtworks, getTopArtist, getRecentActivities } from '@/services/ApiServices';

const store = createStore({
  state: {
    featuredArtworks: [],
    topArtists: [],
    recentActivities: []
  },
  mutations: {
    GET_ARTWORKS(state, data) {
      state.featuredArtworks = data;
    },
    GET_TOP_ARTIST(state, data) {
      state.topArtists = data;
    },
    GET_RECENT_ACTIVITIES(state, data) {
      state.recentActivities = data;
    }
  },
  actions: {
    getArtworks({ commit }) {
      getArtworks()
        .then(response => {
          commit('GET_ARTWORKS', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    getTopArtists({ commit }) {
      getTopArtist()
        .then(response => {
          commit('GET_TOP_ARTIST', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    getRecentActivities({ commit }) {
      getRecentActivities()
        .then(response => {
          commit('GET_RECENT_ACTIVITIES', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})

export default store;
import axios from 'axios';

const baseURL = 'https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace';

const baseApi = axios.create({
   baseURL: baseURL,
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
   }
})

function getArtworks() {
   return baseApi.get('/featured-artworks')
}

function getTopArtist() {
   return baseApi.get('/top-artist')
}

function getRecentActivities() {
   return baseApi.get('/recent-activities')
}

export { getArtworks, getTopArtist, getRecentActivities };
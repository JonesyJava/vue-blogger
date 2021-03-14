import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const api = Axios.create({
  baseURL,
  timeout: 12000
})

export const sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 12000
})
// /api/blogs || /api/accounts

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
  sandboxApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
  sandboxApi.defaults.headers.authorization = ''
}

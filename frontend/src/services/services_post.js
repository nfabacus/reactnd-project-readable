import axios from 'axios'
import { authorization } from '../secret'
const api = "http://localhost:3001"

export function getCategoryPosts(category) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/${category}/posts`
  })
}

export function getPosts() {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/posts`
  })
}


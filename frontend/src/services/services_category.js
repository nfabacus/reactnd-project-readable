import axios from 'axios'
import { authorization } from '../secret'
const api = "http://localhost:3001"

export function getCategories() {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/categories`
  })
}
import axios from 'axios'
import { authorization } from '../secret'
const api = "http://localhost:3001"

export function getCategories() {
  return axios({
    headers: { 'Authorization': "" },
    method: 'GET',
    url: `${api}/categories`
  })
  .then(response => {
    //manipulate the response here if needed.
    return response.data
  })
  .catch(error => {
    //manipulate the response here if needed.
    console.log("error.response:::", error.response.data.error)
    return error.response.data.error
  })
}
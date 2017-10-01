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

export function addNewPost(newPostObj) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/posts`,
    data: newPostObj
  })
}

export function getSinglePost(postId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/posts/${postId}`
  })
}

export function updatePost(updatePostObj) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'PUT',
    url: `${api}/posts/${updatePostObj.id}`,
    data: updatePostObj
  })
}

export function deletePost(postId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'DELETE',
    url: `${api}/posts/${postId}`
  })
}

export function upVotePost(postId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/posts/${postId}`,
    data: {option:"upVote"}
  })
}

export function downVotePost(postId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/posts/${postId}`,
    data: {option:"downVote"}
  })
}

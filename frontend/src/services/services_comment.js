import axios from 'axios'
import { authorization } from '../secret'
const api = "http://localhost:3001"

export function getComments(postId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/posts/${postId}/comments`
  })
}

export function addNewComment(newCommentObj) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/comments`,
    data: newCommentObj
  })
}

export function getSingleComment(commentId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'GET',
    url: `${api}/comments/${commentId}`
  })
}

export function updateComment(updateCommentObj) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'PUT',
    url: `${api}/comments/${updateCommentObj.id}`,
    data: updateCommentObj
  })
}

export function deleteComment(commentId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'DELETE',
    url: `${api}/comments/${commentId}`
  })
}

export function upVoteComment(commentId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/comments/${commentId}`,
    data: {option:"upVote"}
  })
}

export function downVoteComment(commentId) {
  return axios({
    headers: { 'Authorization': authorization },
    method: 'POST',
    url: `${api}/comments/${commentId}`,
    data: {option:"downVote"}
  })
}


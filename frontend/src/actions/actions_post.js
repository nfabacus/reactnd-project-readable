import ACTION_TYPES from './types'
import * as postServices from '../services/services_post'

export function getPosts() {
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.POSTS.GET_POSTS_REQUEST
    })
    postServices.getPosts()
    .then(({data})=>dispatch({
      type: ACTION_TYPES.POSTS.GET_POSTS_SUCCESS,
      payload: data
    }))
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.POSTS.GET_POSTS_FAILURE,
        error: error.response
      })
    })
  }
}

export function getCategoryPosts(category) {
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_REQUEST
    })
    postServices.getCategoryPosts(category)
    .then(({data})=>dispatch({
      type: ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_SUCCESS,
      payload: data
    }))
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_FAILURE,
        error: error.response.data.error
      })
    })
  }
}

export function addNewPost(newPostObj, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.POSTS.ADD_NEW_POST_REQUEST
    })
    postServices.addNewPost(newPostObj)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.POSTS.ADD_NEW_POST_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.POSTS.ADD_NEW_POST_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}

export function getSinglePost(postId, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.POSTS.GET_SINGLE_POST_REQUEST
    })
    postServices.getSinglePost(postId)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.POSTS.GET_SINGLE_POST_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.POSTS.GET_SINGLE_POST_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}

export function updatePost(updatePostObj, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.POSTS.UPDATE_POST_REQUEST
    })
    postServices.updatePost(updatePostObj)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.POSTS.UPDATE_POST_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.POSTS.UPDATE_POST_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}
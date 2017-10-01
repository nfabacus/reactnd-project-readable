import ACTION_TYPES from './types'
import * as commentServices from '../services/services_comment'

export function getComments(postId) {
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.COMMENTS.GET_COMMENTS_REQUEST
    })
    commentServices.getComments(postId)
    .then(({data})=>dispatch({
      type: ACTION_TYPES.COMMENTS.GET_COMMENTS_SUCCESS,
      payload: data
    }))
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.GET_COMMENTS_FAILURE,
        error: error.response
      })
    })
  }
}

export function addNewComment(newCommentObj, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.COMMENTS.ADD_NEW_COMMENT_REQUEST
    })
    commentServices.addNewComment(newCommentObj)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.ADD_NEW_COMMENT_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.ADD_NEW_COMMENT_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}

export function getSingleComment(commentId, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_REQUEST
    })
    commentServices.getSingleComment(commentId)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}

export function updateComment(updateCommentObj, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.COMMENTS.UPDATE_COMMENT_REQUEST
    })
    commentServices.updateComment(updateCommentObj)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.UPDATE_COMMENT_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.UPDATE_COMMENT_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}

export function deleteComment(commentId, callback){
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.COMMENTS.DELETE_COMMENT_REQUEST
    })
    commentServices.deleteComment(commentId)
    .then(({data})=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.DELETE_COMMENT_SUCCESS,
        payload: data
      })
      if(callback){
        callback()
      }
      })
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.COMMENTS.DELETE_COMMENT_FAILURE,
        error: error.response.data.error
      })
      if(callback){
        callback()
      }
    })
  }
}
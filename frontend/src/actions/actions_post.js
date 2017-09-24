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
        error: error.response.data.error
      })
    })
  }
}
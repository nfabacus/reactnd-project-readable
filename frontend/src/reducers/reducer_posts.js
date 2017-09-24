import ACTION_TYPES from '../actions/types'

const initialState = { 
  posts: [], 
  error:""
}

export default function(state=initialState, action) {
  switch(action.type){
    case ACTION_TYPES.POSTS.GET_POSTS_SUCCESS:
      return { posts:action.payload, error:"" }
    
    case  ACTION_TYPES.POSTS.GET_POSTS_FAILURE:
      return { posts:[], error: action.error }
    
    default:
      return state
  }
}
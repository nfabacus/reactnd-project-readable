import ACTION_TYPES from '../actions/types'

const initialState = { 
  posts: [],
  categoryPosts: [],
  error:""
}

export default function(state=initialState, action) {
  switch(action.type){
    case ACTION_TYPES.POSTS.GET_POSTS_SUCCESS:
      return { ...state, posts:action.payload, error:"" }
    
    case  ACTION_TYPES.POSTS.GET_POSTS_FAILURE:
      return { ...state, posts:[], error: action.error }
    
    case ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_SUCCESS:
      return { ...state, categoryPosts:action.payload, error:"" }
    
    case ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_FAILURE:
      return { ...state, categoryPosts:[], error: action.error }
    
    default:
      return state
  }
}
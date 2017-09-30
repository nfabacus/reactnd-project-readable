import ACTION_TYPES from '../actions/types'

const initialState = { 
  posts: [],
  categoryPosts: [],
  singlePost:{},
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

    case ACTION_TYPES.POSTS.GET_SINGLE_POST_SUCCESS:
      return { ...state, singlePost:action.payload, error:"" }
    
    case ACTION_TYPES.POSTS.GET_SINGLE_POST_FAILURE:
      return { ...state, singlePost:{}, error: action.error }

    default:
      return state
  }
}
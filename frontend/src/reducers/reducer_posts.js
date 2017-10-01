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

    case ACTION_TYPES.POSTS.ADD_NEW_POST_SUCCESS:
    return { ...state, posts:[...state.posts, action.payload], error:"" }
    
    case  ACTION_TYPES.POSTS.ADD_NEW_POST_FAILURE:
      return { ...state, error: action.error }
    
    case ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_SUCCESS:
      return { ...state, categoryPosts:action.payload, error:"" }
    
    case ACTION_TYPES.POSTS.GET_CATEGORY_POSTS_FAILURE:
      return { ...state, categoryPosts:[], error: action.error }

    case ACTION_TYPES.POSTS.GET_SINGLE_POST_SUCCESS:
      return { ...state, singlePost:action.payload, error:"" }
    
    case ACTION_TYPES.POSTS.GET_SINGLE_POST_FAILURE:
      return { ...state, singlePost:{}, error: action.error }
    
    case ACTION_TYPES.POSTS.UPVOTE_POST_SUCCESS:
      const upVotePosts = state.posts.filter(post=>post.id !==action.payload.id).concat(action.payload)
      const upVoteCategoryPosts = state.categoryPosts.filter(post=>post.id !==action.payload.id).concat(action.payload)
      return { ...state, singlePost: action.payload, categoryPosts: upVoteCategoryPosts, posts: upVotePosts, error: ""}
    
    case ACTION_TYPES.POSTS.UPVOTE_POST_FAILURE:
      return { ...state, error: action.error }

    case ACTION_TYPES.POSTS.DOWNVOTE_POST_SUCCESS:
      const downVotePosts = state.posts.filter(post=>post.id !==action.payload.id).concat(action.payload)
      const downVoteCategoryPosts = state.categoryPosts.filter(post=>post.id !==action.payload.id).concat(action.payload)
      return { ...state, singlePost: action.payload, categoryPosts: downVoteCategoryPosts, posts: downVotePosts, error: ""}
    
    case ACTION_TYPES.POSTS.DOWNVOTE_POST_FAILURE:
      return { ...state, error: action.error }

    default:
      return state
  }
}
import ACTION_TYPES from '../actions/types'

const initialState = { 
  comments: [],
  singleComment:{},
  error:""
}

export default function(state=initialState, action) {
  switch(action.type){
    case ACTION_TYPES.COMMENTS.GET_COMMENTS_SUCCESS:
      return { ...state, comments:action.payload, error:"" }
    
    case  ACTION_TYPES.COMMENTS.GET_COMMENTS_FAILURE:
      return { ...state, comments:[], error: action.error }
    
    case ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_SUCCESS:
      return { ...state, singleComment: action.payload, error:"" }
    
    case ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_FAILURE:
      return { ...state, singleComment:{}, error: action.error }
    
    case ACTION_TYPES.COMMENTS.UPDATE_COMMENT_SUCCESS:
    const newComments = state.comments.filter(comment=>comment.id !==action.payload.id).concat(action.payload)
    return { ...state, comments: newComments, error:"" }
    
    case ACTION_TYPES.COMMENTS.UPDATE_COMMENT_FAILURE:
      return { ...state, error: action.error } 

    default:
      return state
  }
}
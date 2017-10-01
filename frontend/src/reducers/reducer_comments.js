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

    case ACTION_TYPES.COMMENTS.ADD_NEW_COMMENT_SUCCESS:
      return { ...state, comments:[...state.comments, action.payload], error:"" }
    
    case  ACTION_TYPES.COMMENTS.ADD_NEW_COMMENT_FAILURE:
      return { ...state, error: action.error }

    case ACTION_TYPES.COMMENTS.DELETE_COMMENT_SUCCESS:
    return { ...state, comments:state.comments.filter(comment=>comment.id!==action.payload.id), error:""}
    
    case  ACTION_TYPES.COMMENTS.DELETE_COMMENT_FAILURE:
      return { ...state, error: action.error }
    
    case ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_SUCCESS:
      return { ...state, singleComment: action.payload, error:"" }
    
    case ACTION_TYPES.COMMENTS.GET_SINGLE_COMMENT_FAILURE:
      return { ...state, singleComment:{}, error: action.error }



    
    case ACTION_TYPES.COMMENTS.UPDATE_COMMENT_SUCCESS:
      const updateComments = state.comments.filter(comment=>comment.id !==action.payload.id).concat(action.payload)
      return { ...state, comments: updateComments, error:"" }
    
    case ACTION_TYPES.COMMENTS.UPDATE_COMMENT_FAILURE:
      return { ...state, error: action.error }

    case ACTION_TYPES.COMMENTS.UPVOTE_COMMENT_SUCCESS:
      const upVoteComments = state.comments.filter(comment=>comment.id !==action.payload.id).concat(action.payload)
      return { ...state, comments: upVoteComments, error:"" }
    
    case ACTION_TYPES.COMMENTS.UPVOTE_COMMENT_FAILURE:
      return { ...state, error: action.error }

    case ACTION_TYPES.COMMENTS.DOWNVOTE_COMMENT_SUCCESS:
      const downVoteComments = state.comments.filter(comment=>comment.id !==action.payload.id).concat(action.payload)
      return { ...state, comments: downVoteComments, error:"" }
    
    case ACTION_TYPES.COMMENTS.DOWNVOTE_COMMENT_FAILURE:
      return { ...state, error: action.error }

    default:
      return state
  }
}
import ACTION_TYPES from '../actions/types'

const initialState = { 
  categories: [], 
  error:""
}

export default function(state=initialState, action) {
  switch(action.type){
    case ACTION_TYPES.CATEGORIES.GET_CATEGORIES_SUCCESS:
      return { categories:action.payload, error:"" }
    
    case ACTION_TYPES.CATEGORIES.GET_CATEGORIES_FAILURE:
      return { categories:[], error: action.error }
    
    default:
      return state
  }
}
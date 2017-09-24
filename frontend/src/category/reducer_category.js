import initialState from '../store/initial-state'
import ACTION_TYPES from '../types'

export default function(state=initialState.categories, action) {
  switch(action.type){
    case ACTION_TYPES.CATEGORIES.GET_CATEGORIES:
      return action.payload
    
    default:
      return state
  }
}
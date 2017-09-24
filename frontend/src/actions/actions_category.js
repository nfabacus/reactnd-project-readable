import ACTION_TYPES from './types'
import * as categoryServices from '../services/services_category'

export function getCategories() {
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_REQUEST
    })
    categoryServices.getCategories()
    .then(data=>dispatch({
      type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_SUCCESS,
      payload: data
    }))
    .catch(error=>{
      console.log("error in action", error.response)
      dispatch({
        type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_FAILURE,
        error: error
      })
    })
  }
}
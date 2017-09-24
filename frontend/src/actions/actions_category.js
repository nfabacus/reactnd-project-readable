import ACTION_TYPES from './types'
import * as categoryServices from '../services/services_category'

export function getCategories() {
  return (dispatch)=>{
    dispatch({
      type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_REQUEST
    })
    categoryServices.getCategories()
    .then(({data:{categories}})=>dispatch({
      type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_SUCCESS,
      payload: categories
    }))
    .catch(error=>{
      dispatch({
        type: ACTION_TYPES.CATEGORIES.GET_CATEGORIES_FAILURE,
        error: error.response.data.error
      })
    })
  }
}
import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories'

const appReducer = combineReducers({
  categories: CategoriesReducer
})

export default appReducer
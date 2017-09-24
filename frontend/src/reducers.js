import { combineReducers } from 'redux';
import CategoryReducer from './category/reducer_category'

const appReducer = combineReducers({
  category: CategoryReducer,
})

export default appReducer
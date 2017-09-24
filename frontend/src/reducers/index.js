import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories'
import PostsReducer from './reducer_posts'

const appReducer = combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
})

export default appReducer
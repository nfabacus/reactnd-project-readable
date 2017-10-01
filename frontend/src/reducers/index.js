import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories'
import PostsReducer from './reducer_posts'
import CommentsReducer from './reducer_comments'

const appReducer = combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
})

export default appReducer
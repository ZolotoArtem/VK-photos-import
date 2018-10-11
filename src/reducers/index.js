import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { searchReducer } from './search'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  search: searchReducer,
})

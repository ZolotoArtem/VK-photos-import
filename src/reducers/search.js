import { SEARCH_PERSONAL, SEARCH_ALL } from '../actions/SearchActions'

const initialState = {
  type: '',
  word: '',
}

export function searchReducer(state = initialState, action) {
  console.warn(action)
  switch (action.type) {
    case SEARCH_PERSONAL:
      return { ...state, type: 'personal' }

    case SEARCH_ALL:
      return { ...state, type: 'all', word: action.payload }

    default:
      return state
  }
}

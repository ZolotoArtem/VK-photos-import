export const SEARCH_PERSONAL = 'SEARCH_PERSONAL'
export const SEARCH_ALL = 'SEARCH_ALL'

export function handleSearch(event) {
  return function(dispatch) {
    if (event.target.value === 'all') {
      dispatch({
        type: SEARCH_ALL,
      })
    } else if (event.target.value === 'personal') {
      dispatch({
        type: SEARCH_PERSONAL,
      })
    } else {
      dispatch({
        type: SEARCH_ALL,
        payload: event.target.value,
      })
    }
  }
}

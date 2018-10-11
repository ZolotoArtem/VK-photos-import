export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

function filterPhotos(photos, year) {
  let filteredPhotos = []
  photos.forEach(function(photo) {
    if (new Date(photo.date * 1000).getFullYear() === year) {
      filteredPhotos.push(photo)
    }
  })
  return filteredPhotos
}

export function getPhotos(year, search) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    if (search.type === 'all') {
      //eslint-disable-next-line no-undef
      VK.Api.call(
        'photos.search',
        {
          q: search.word,
          count: search.word ? 200 : 0,
          start_time: new Date(year, 1).getTime() / 1000,
          end_time: new Date(year, 12).getTime() / 1000,
          extended: 1,
          v: '5.80',
        },
        r => {
          try {
            dispatch({
              type: GET_PHOTOS_SUCCESS,
              payload: r.response.items,
            })
          } catch (e) {
            dispatch({
              type: GET_PHOTOS_FAIL,
              payload: new Error(e),
            })
          }
        }
      )
    } else if (search.type === 'personal') {
      //eslint-disable-next-line no-undef
      VK.Api.call('photos.getAll', { extended: 1, v: '5.80' }, r => {
        try {
          const filteredPhotos = filterPhotos(r.response.items, year)
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: filteredPhotos,
          })
        } catch (e) {
          dispatch({
            type: GET_PHOTOS_FAIL,
            payload: new Error(e),
          })
        }
      })
    }
  }
}

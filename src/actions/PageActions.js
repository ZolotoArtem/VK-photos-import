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

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

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

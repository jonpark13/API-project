import { csrfFetch } from './csrf';

const GET_SONGS = 'songs/getSongs';

const getSongs = (songs) => {
  return {
    type: GET_SONGS,
    songs
  }
}

export const songsGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json()
    // console.log(data)
    dispatch(getSongs(data))
    return data;
};

const initialState = {}

const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      newState = Object.assign({}, state)
      newState = action.songs
      return newState
    default:
      return state
  }
};

export default songsReducer;
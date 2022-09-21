import { csrfFetch } from './csrf'


const GET_PLAYLISTS = 'playlist/getPlaylists'

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

export const playlistsCurrGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/playlists/current')
    const data = await response.json()
    // console.log(data)
    dispatch(getPlaylists(data))
    return data;
};

const initialState = {}

const playlistsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_PLAYLISTS:
            newState = Object.assign({}, state)
            newState = action.playlists
            return newState
        default:
            return state
    }
};

export default playlistsReducer;
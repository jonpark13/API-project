import { csrfFetch } from './csrf'


const GET_PLAYLISTS = 'playlist/getPlaylists'
const GET_PLAYLIST = 'playlist/getPlaylist'

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

const getPlaylist = (playlist) => {
    return {
        type: GET_PLAYLIST,
        playlist
    }
}

export const playlistsCurrGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/playlists/current')
    const data = await response.json()
    // console.log(data)
    dispatch(getPlaylists(data))
    return data;
};

export const playlistGrabById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${id}`)
    const data = await response.json()
    // console.log(data)
    dispatch(getPlaylist(data))
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
        case GET_PLAYLIST:
            newState = Object.assign({}, state)
            newState = action.playlist
            return newState
        default:
            return state
    }
};

export default playlistsReducer;
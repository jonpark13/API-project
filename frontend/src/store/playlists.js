import { csrfFetch } from './csrf'


const GET_PLAYLISTS = 'playlist/getPlaylists'
const GET_PLAYLIST = 'playlist/getPlaylist'
const ADDTO_PLAYLIST = 'playlist/AddToPlaylist'

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

const addToPlaylist = (playlist, songId) => {
    return {
        type: ADDTO_PLAYLIST,
        playlist,
        songId
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

export const addSongToPlaylist = (playlist, songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/${playlist}/songs`, {
        method: 'POST',
        body: JSON.stringify({
            songId
        })
    })
    const data = await response.json()
    // console.log(data)
    dispatch(addToPlaylist(data))
    return data;
};

const initialState = {}

const playlistsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_PLAYLISTS:
            newState = Object.assign({}, state)
            newState = {Playlists: {}}
            action.playlists.Playlists.forEach(e => {
                newState.Playlists[e.id] = e
            })
            return newState
        case GET_PLAYLIST:
            return {
                ...state, selectedPlaylist: action.playlist
            }
        case ADDTO_PLAYLIST:
            return {
                ...state, Playlists: { ...state.Playlists, [action.playlist]:action.songId}
            }
        default:
            return state
    }
};

export default playlistsReducer;
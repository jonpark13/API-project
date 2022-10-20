import { csrfFetch } from './csrf'


const GET_PLAYLISTS = 'playlist/getPlaylists'
const GET_PLAYLIST = 'playlist/getPlaylist'
const ADD_PLAYLIST = 'playlist/addPlaylist'
const ADDTO_PLAYLIST = 'playlist/addToPlaylist'
const DELETE_PLAYLIST = 'playlist/deletePlaylist'
const EDIT_PLAYLIST = 'playlist/editPlaylist'

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

const addPlaylist = (playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist
    }
}

const addToPlaylist = (playlist, song) => {
    return {
        type: ADDTO_PLAYLIST,
        playlist,
        song
    }
}

const delPlaylist = (playlist) => {
    return {
        type: DELETE_PLAYLIST,
        playlist
    }
}

const editPlaylist = (playlist) => {
    return {
        type: EDIT_PLAYLIST,
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

export const createPlaylist = (playlist) => async (dispatch) => {
    const { userId, name, imageUrl } = playlist
    const response = await csrfFetch(`/api/playlists`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            name,
            imageUrl
        })
    })
    const data = await response.json()
    // console.log(data)
    dispatch(addPlaylist(data))
    return data;
};

export const addSongToPlaylist = (playlist, song) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${playlist}/songs`, {
        method: 'POST',
        body: JSON.stringify({
            songId:song
        })
    })
    const data = await response.json()
    dispatch(addToPlaylist(playlist, data))
    return data;
};

export const deletePlaylist = (playlist) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${playlist}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    dispatch(delPlaylist({playlist, data}))
    return data;
};

export const editingPlaylist = (playlist) => async (dispatch) => {
    const { userId, name, imageUrl } = playlist
    const response = await csrfFetch(`/api/playlists/${playlist.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId,
            name,
            imageUrl
        })
    })
    const data = await response.json()
    dispatch(editPlaylist(playlist))
    return data;
};

const initialState = {}

const playlistsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_PLAYLIST:
            return {...state, Playlists: {...state.Playlists, [action.playlist.id]:action.playlist}}
        case GET_PLAYLISTS:
            newState = Object.assign({}, state)
            newState = {...state, Playlists: {}}
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
                    ...state
                }
        case DELETE_PLAYLIST:
            let currState = {...state}
            console.log(state.Playlists, 'state', currState, 'curr', action.playlist, 'id')
            delete currState.Playlists[action.playlist.playlist]
            return currState
        case EDIT_PLAYLIST:
            console.log(state.Playlists, action.playlist, 'id')

            return {...state, Playlists: {...state.Playlists, [action.playlist.id]:action.playlist}}
        default:
            return state
    }
};

export default playlistsReducer;
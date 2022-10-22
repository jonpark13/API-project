import { csrfFetch } from './csrf'


const GET_SONGS = 'songs/getSongs'
const GET_SONG = 'songs/getSong'
const ADD_SONG = 'songs/addSong'
const DELETE_SONG = 'songs/deleteSong'
const EDIT_SONG = 'songs/editSong'
const GET_USERTRACKS = 'songs/userSongs'
const FIND_SONG = 'songs/findSong'

const getSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

const getSong = (single_song) => {
    return {
        type: GET_SONG,
        single_song
    }
}

const addSong = (song) => {
    return {
        type: ADD_SONG,
        song
    }
}
const editSong = (song) => {
    return {
        type: EDIT_SONG,
        song
    }
}

const delSong = (song, id) => {
    return {
        type: DELETE_SONG,
        song,
        id
    }
}

const userTracks = (songs) => {
    return {
        type: GET_USERTRACKS,
        songs
    }
}

export const songsGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json()
    dispatch(getSongs(data))
    return data;
};

export const userSongsGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs/current')
    const data = await response.json()
    // console.log(data)
    dispatch(userTracks(data))
    return data;
};

export const songSingleGrab = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`)
    const data = await response.json()
    dispatch(getSong(data))
    return data;
};

export const searchQuery = (songTitle) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs?title=${songTitle}`, {
        method: 'GET'
    })
    const data = await response.json()
    dispatch(getSongs(data))
    return data;
};

export const editingSong = (song) => async (dispatch) => {
    console.log('inc song', song)
    const {
        title,
        description,
        url,
        imageUrl,
        albumId,
        id
    } = song

    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            url,
            imageUrl,
            albumId
        })
    })
    const data = await response.json()
    dispatch(editSong(data))
    return data;
}

export const deleteSong = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    dispatch(delSong(data, id))
    return data;
};

export const createSong = (song) => async (dispatch) => {
    const {
        userId,
        albumId,
        title,
        description,
        url,
        imageUrl } = song
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            albumId,
            title,
            description,
            url,
            imageUrl
        })
    })
    const data = await response.json()
    dispatch(addSong(data))
    return data;
};

const initialState = {}

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONGS:
            newState = Object.assign({}, state)
            newState = action.songs
            return {...state, ...newState}
        case GET_SONG:
            return {
                ...state,
                singleSong: {
                    [action.single_song.id]: action.single_song
                }
            }
        case GET_USERTRACKS:
            let res = {}
            action.songs.Songs.forEach(e => {
                res[e.id] = e
            })
            return {
                ...state,
                userTracks: {...res}
            }
        case ADD_SONG:
            console.log(state)
            return { ...state, Songs: [...state.Songs, action.song], userTracks: {...state.userTracks, [action.song.id]: {...action.song}}}
        case EDIT_SONG:
            let newArr = state.Songs.map(e => {
                if(e.id === action.song.id){
                    return {...e, ...action.song}
                }
                return e
            })
            return {...state, Songs: [...newArr], userTracks: {...state.userTracks, [action.song.id]: action.song}}
        case DELETE_SONG:
            const rem = {...state}
            delete rem.userTracks[action.id]
            return { ...rem,Songs: state.Songs.filter(
                (e) => e.id !== action.id
              )}
        default:
            return state
    }
};

export default songsReducer;
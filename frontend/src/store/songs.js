import { csrfFetch } from './csrf'

const GET_SONGS = 'songs/getSongs'
const ADD_SONG = 'songs/addSong'
const FIND_SONG = 'songs/findSong'

const getSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

const findSong = (song) => {
    return {
        type: FIND_SONG,
        song
    }
}

const addSong = (song) => {
    return {
        type: ADD_SONG,
        song
    }
}

export const songsGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json()
    // console.log(data)
    dispatch(getSongs(data))
    return data;
};

export const lookupSong = (song) => async (dispatch) => {
    const {
        userId,
        albumId,
        title,
        description,
        url,
        previewImage } = song
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        })
    })
    const data = await response.json()
    // console.log(data)
    dispatch(getSongs(data))
    return data;
};

export const createSong = (song) => async (dispatch) => {
    const {
        userId,
        albumId,
        title,
        description,
        url,
        previewImage } = song
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        })
    })
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
        case ADD_SONG:
            newState = Object.assign({}, state)
            newState = action.songs
        default:
            return state
    }
};

export default songsReducer;
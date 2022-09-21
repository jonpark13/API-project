import { csrfFetch } from './csrf'


const GET_SONGS = 'songs/getSongs'
const GET_SONG = 'songs/getSong'
const ADD_SONG = 'songs/addSong'
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

export const songsGrab = () => async (dispatch) => {
    const response = await csrfFetch('/api/songs')
    const data = await response.json()
    // console.log(data)
    dispatch(getSongs(data))
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
    // console.log(data)
    dispatch(getSongs(data))
    return data;
};

// export const createSong = (song) => async (dispatch) => {
//     const {
//         userId,
//         albumId,
//         title,
//         description,
//         url,
//         previewImage } = song
//     const response = await csrfFetch('/api/songs', {
//         method: 'POST',
//         body: JSON.stringify({
//             credential,
//             password,
//         })
//     })
//     const data = await response.json()
//     // console.log(data)
//     dispatch(getSongs(data))
//     return data;
// };

const initialState = {}

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONGS:
            newState = Object.assign({}, state)
            newState = action.songs
            return newState
        case GET_SONG:
            return {
                ...state,
                singleSong: {
                    [action.single_song.id]: action.single_song
                }
            }
        case ADD_SONG:
            newState = Object.assign({}, state)
            newState = action.songs
        default:
            return state
    }
};

export default songsReducer;
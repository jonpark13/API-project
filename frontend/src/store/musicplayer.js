import {csrfFetch} from './csrf'


const ADD_SONG = 'player/addSong'
const NEXT = 'player/nextPlay'
const CONT = 'player/continue'
const ADD_PLAYLIST = 'player/addPlaylist'

const getSong = (single_song) => {
    return {type: ADD_SONG, single_song}
}

const goNext = (single_song) => {
    return {type: NEXT, single_song}
}
const playNext = () => {
    return {type: CONT}
}

const getPlaylist = (playlist) => {
    return {type: ADD_PLAYLIST, playlist}
}

export const addToPlay = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`)
    const data = await response.json()
    dispatch(getSong(data))
    return data;
};

export const addPlaylist = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlists/${id}`)
    const data = await response.json()
    dispatch(getPlaylist(data))
    return data;
};

export const addToNext = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`)
    const data = await response.json()
    dispatch(goNext(data))
    return data;
};

export const nextInLine = () => async (dispatch) => {
    dispatch(playNext())
};

const initialState = {currentSong:{}, nextSongs:[]}

const musicPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG: return {
                ...state,
                currentSong: {
                    ...action.single_song
                }
            }
        case NEXT:
            console.log(Object.keys(state.currentSong) == 0)
            if(Object.keys(state.currentSong) == 0){
                return {
                    ...state,
                    currentSong: {
                        ...action.single_song
                    }
                }
            }
            else if (!!state.nextSongs) {
                return {
                    ...state,
                    nextSongs: [
                        ...state.nextSongs, {
                            ...action.single_song
                        }
                    ]
                }
            }
            else{
                return {
                    ...state,
                    nextSongs: [
                        {
                            ...action.single_song
                        }
                    ]
                }
            }
        case CONT:
            if (!state.nextSongs.length) {
                return {...state}
            }
            else{
                return {
                    currentSong: {...state.nextSongs[0]},
                    nextSongs: [
                            ...state.nextSongs.slice(1)
                    ]
                }
            }
        case ADD_PLAYLIST:
            console.log(action.playlist)
            return {
                ...state,
                currentSong: {...action.playlist.Songs[0]},
                nextSongs:[...action.playlist.Songs.slice(1)]
            }
        default:
            return state
    }
};

export default musicPlayerReducer;

import { csrfFetch } from './csrf'


const ADD_SONG = 'player/addSong'

const getSong = (single_song) => {
    return {
        type: ADD_SONG,
        single_song
    }
}

export const addToPlay = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`)
    const data = await response.json()
    dispatch(getSong(data))
    return data;
};

const initialState = {}

const musicPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            console.log(state, action.single_song)
            return {
                ...state,
                currentSong: {
                    ...action.single_song
            }
            }
        default:
            return state
    }
};

export default musicPlayerReducer;
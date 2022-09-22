import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  }
}

const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

export const login = (user) => async (dispatch) => {
  // console.log('hit', user)
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }) 
  })
  const data = await response.json()
  // console.log(data)
  let { id, username, firstName } = data
  dispatch(setUser({id, username, firstName}))
  return response;
};

export const refreshUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session')
  const data = await response.json()
  let { id, username, firstName } = data
  dispatch(setUser({id, username, firstName}))
  return response;
};

export const signupUser = (user) => async (dispatch) => {
  const { username, email, password, firstName, lastName } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.username));
  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser())
  return response
}

const initialState = { user: { id: null, username: null, firstName: null } }

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state)
      newState.user = action.payload
      return newState
    case REMOVE_USER:
      newState = Object.assign({}, state)
      newState.user = null
      return newState
    default:
      return state
  }
};

export default sessionReducer;
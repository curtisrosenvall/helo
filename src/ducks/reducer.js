// create the initial state
const initialState = {
  user: {},
  posts: [],
};
// action types
const ADD_USER = "ADD_USER";
// action builder
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
        return {...state, user: action.payload}
    default:
      return state;
  }
}

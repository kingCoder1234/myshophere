import { ActionTypes } from "../constants/action-type";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        user: action.payload, // Update state.user, not state.users
      };
    default:
      return state;
  }
};

export default userReducer;

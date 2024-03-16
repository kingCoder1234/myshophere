import { ActionTypes } from "../constants/action-type";

export const addUser = (userData) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: userData,
  };
};

import { UserState, UserActionTypes, SET_DATA } from "../types/user";

const initialState: UserState = {
  user: null,
  isAuth: false
};

export default (state = initialState, { type, payload }: UserActionTypes) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        user: payload,
        isAuth: true
      };
    default:
      return state;
  }
};
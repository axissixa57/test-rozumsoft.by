import { UserState, UserActionTypes, SET_DATA, SET_QUERY_DATA } from "../types/user";

const initialState: UserState = {
  user: null,
  isAuth: false,
  queryResult: {
    status: "",
    message: ""
  }
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    case SET_QUERY_DATA:
      return {
        ...state,
        queryResult: action.payload
      };
    default:
      return state;
  }
};

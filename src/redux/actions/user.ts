import { usersApi } from "../../api/endpoint";
import { User, Query, SET_DATA, SET_QUERY_DATA, UserActionTypes } from "../types/user"; 

const actions = {
  setUserData: (data: User | null) => ({
    type: SET_DATA,
    payload: data
  }),
  setQueryData: (data: Query) => ({ 
    type: SET_QUERY_DATA,
    payload: data
  }),
  fetchUserLogin: (postData: { email: string; password: string }) => async (dispatch: ((arg: any ) => UserActionTypes)) => {
    try {
      let response = await usersApi.signIn(postData);

      if(response.status === "success") {
        response = response as {status: string, message: string, user: User};
        window.localStorage["token"] = response.user.token;

        dispatch(actions.setUserData(response.user))
      }

      dispatch(actions.setQueryData({status: response.status, message: response.message}))

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;

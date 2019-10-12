export const SET_DATA = "USER:SET_DATA";
export const SET_QUERY_DATA = "USER:SET_QUERY_DATA";

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface Query {
  status: string,
  message: string,
}

export interface UserState {
  user: User | null,
  isAuth: boolean,
  queryResult: Query
}

interface SetUserDataAction {
  type: typeof SET_DATA,
  payload: User | null,
}

interface SetQueryDataAction {
  type: typeof SET_QUERY_DATA, 
  payload: Query,
}

export type UserActionTypes = SetUserDataAction | SetQueryDataAction;

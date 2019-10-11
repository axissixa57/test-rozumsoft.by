export const SET_DATA = "USER:SET_DATA";

export interface User {
    id: string,
    name: string,
    email: string,
    token: string
}

export interface UserState {
  user: User | null;
  isAuth: boolean;
}

interface SetUserDataAction {
  type: string;
  payload: User | null;
}

export type UserActionTypes = SetUserDataAction;
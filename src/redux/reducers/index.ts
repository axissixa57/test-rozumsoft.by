import { combineReducers } from "redux";

import user from "./user";
import locations from "./locations";

export const rootReducer = combineReducers({
  user,
  locations
});

export type AppState = ReturnType<typeof rootReducer>
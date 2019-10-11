import { combineReducers } from "redux";

import user from "./user";
import locations from "./locations";

export const rootReducer = combineReducers({
  locations,
  user,
});

export type AppState = ReturnType<typeof rootReducer>
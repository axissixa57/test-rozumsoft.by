import { combineReducers } from "redux";

import locations from "./locations";

export const rootReducer = combineReducers({
  locations,
});

export type AppState = ReturnType<typeof rootReducer>
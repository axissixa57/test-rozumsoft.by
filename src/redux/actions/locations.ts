import { locationsApi } from "../../api/endpoint";
import { Location, LocationActionTypes, SET_ITEMS, SET_CURRENT_ITEM } from "../types/locations";

const actions = {
  setCurrentItem: (data: Location): LocationActionTypes => ({
    type: SET_CURRENT_ITEM,
    item: data
  }),
  setLocationData: (data: Location[]): LocationActionTypes => ({
    type: SET_ITEMS,
    payload: data
  }),
  fetchLocationData: () => (dispatch: (arg0: LocationActionTypes) => void) => {
    dispatch(actions.setLocationData(locationsApi));
  }
};

export default actions;

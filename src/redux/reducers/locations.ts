import {
  SET_CURRENT_ITEM,
  SET_ITEMS,
  LocationState,
  LocationActionTypes
} from "../types/locations";

const initialState: LocationState = {
  items: [],
  currentItem: {
    coodrs: [55.751442, 37.618874],
    name: "Московский Кремль"
  }
};

export default (
  state = initialState,
  action: LocationActionTypes
): LocationState => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.item
      };
    default:
      return state;
  }
};

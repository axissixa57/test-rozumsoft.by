interface Location {
  coodrs: number[];
  name: string;
}

interface LocationState {
  items: Location[];
  currentItem: Location
}

interface LocationAction {
  type: string
  payload: any
}

const initialState: LocationState = {
  items: [],
  currentItem: {
    coodrs: [55.751442,37.618874],
    name: "Московский Кремль"
  }
};

export default (state = initialState, action: LocationAction) => {
  switch (action.type) {
    case "LOCATIONS:SET_ITEMS":
      return {
        ...state,
        items: action.payload
      };
    case "LOCATIONS:SET_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload
      };
    default:
      return state;
  }
};

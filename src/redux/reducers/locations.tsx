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
  items: [
    {
      coodrs: [53.9105, 27.549637],
      name: "Дворец спорта"
    },
    {
      coodrs: [53.895688, 27.547812],
      name: "Пл. Независимости"
    },
    {
      coodrs: [53.902418, 27.561828],
      name: "0 км"
    },
    {
      coodrs: [53.906544,27.436475],
      name: "Каменная горка"
    },
    {
      coodrs: [53.936153,27.481583],
      name: "Минск-арена"
    },
    {
      coodrs: [53.904026,27.567870],
      name: "Белорусский цирк"
    },
    {
      coodrs: [55.751442,37.618874],
      name: "Московский Кремль"
    },
    {
      coodrs: [50.449558,30.525399],
      name: "Монумент Независимости Украины"
    },
  ],
  currentItem: {
    coodrs: [55.751442,37.618874],
    name: "Московский Кремль"
  }
};

export default (state = initialState, action: LocationAction) => {
  switch (action.type) {
    case "LOCATIONS:SET_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload
      };
    default:
      return state;
  }
};

export const SET_ITEMS = 'LOCATIONS:SET_ITEMS';
export const SET_CURRENT_ITEM = 'LOCATIONS:SET_CURRENT_ITEM';

export interface Location {
  coodrs: number[];
  name: string;
};

export interface LocationState {
  items: Location[];
  currentItem: Location;
};

interface SetCurrentItemAction {
  type: typeof SET_CURRENT_ITEM;
  item: Location;
};

interface SetLocationDataAction {
  type: typeof SET_ITEMS;
  payload: Location[];
};

export type LocationActionTypes = SetLocationDataAction | SetCurrentItemAction;

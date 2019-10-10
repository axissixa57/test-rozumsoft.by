import { locationsApi } from "../../api/endpoint";

const actions = {
  setCurrentItem: (data: any) => ({
    type: "LOCATIONS:SET_CURRENT_ITEM",
    payload: data
  }),
  setLocationData: (data: any) => ({
    type: "LOCATIONS:SET_ITEMS",
    payload: data
  }),
  //   fetchLocationData: () => (dispatch: any) => {
  //     locationsApi.getAll().then((data: any) => {
  //       dispatch(actions.setLocationData(data));
  //     });
  //   }
  fetchLocationData: () => (dispatch: any) => {
    dispatch(actions.setLocationData(locationsApi));
  }
};

export default actions;

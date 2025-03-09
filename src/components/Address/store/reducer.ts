import { produce } from "immer";
import { IAddressReducer, ActionDispatch, AddressItem } from "./types";
import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  PREV_EDIT_MODE,
  CANCEL_EDIT_MODE,
} from "./actions";

export const initialState: IAddressReducer = {
  addressList: [],
  config: {
    selectedAddress: undefined,
    isEditMode: false,
  },
};

const reducers = {
  [ADD_ADDRESS]: (state: IAddressReducer, payload: AddressItem) => {
    state.addressList.push(payload);
  },
  [EDIT_ADDRESS]: (state: IAddressReducer, payload: AddressItem) => {
    const foundedIndex = state.addressList.findIndex(
      (address) => address.id === payload.id
    );
    state.addressList[foundedIndex] = payload;
    state.config.selectedAddress = undefined;
  },
  [CANCEL_EDIT_MODE]: (state: IAddressReducer) => {
    state.config.selectedAddress = undefined;
  },
  [PREV_EDIT_MODE]: (state: IAddressReducer, payload: AddressItem) => {
    state.config.selectedAddress = payload;
  },
};

export const addressReducer = (
  state: IAddressReducer,
  action: ActionDispatch
) => {
  const fn = reducers[action.type];

  if (fn) return produce(state, (draftState) => fn(draftState, action.payload));

  console.log("[WARNING] Action without reducer:", action);
  return state;
};

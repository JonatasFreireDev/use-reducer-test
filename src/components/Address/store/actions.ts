export const ADD_ADDRESS = "ADD_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const PREV_EDIT_MODE = "PREV_EDIT_MODE";
export const CANCEL_EDIT_MODE = "CANCEL_EDIT_MODE";
export const RESET_STATE = "RESET_STATE";

import { AddressItem } from "./types";

export const addressActions = {
  addAddress: (address: AddressItem) => ({
    type: ADD_ADDRESS,
    payload: address,
  }),

  editAddress: (address: AddressItem) => ({
    type: EDIT_ADDRESS,
    payload: address,
  }),

  prevEditMode: (address: AddressItem) => ({
    type: PREV_EDIT_MODE,
    payload: address,
  }),

  cancelEditMode: () => ({
    type: CANCEL_EDIT_MODE,
  }),
};

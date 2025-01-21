"use client";
import React, { useContext, useReducer } from "react";
import { produce } from "immer";

export interface IAddressReducer {
  addressList: Array<AddressItem>;
  config: {
    selectedAddress: AddressItem | undefined;
    isEditMode: boolean;
  };
}

export interface AddressItem {
  id: string;
  street: string;
  city: string;
}

export type ActionDispatch = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export interface AddressContextProps {
  state: IAddressReducer;
  dispatch: React.ActionDispatch<[action: ActionDispatch]>;
}

// Ações do reducer
export const ADD_ADDRESS = "ADD_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const PREV_EDIT_MODE = "PREV_EDIT_MODE";
export const CANCEL_EDIT_MODE = "CANCEL_EDIT_MODE";
export const RESET_STATE = "RESET_STATE";

// Criar o contexto
export const AddressContext = React.createContext<AddressContextProps>(
  {} as AddressContextProps
);

const initialState: IAddressReducer = {
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

const reducer = (state: IAddressReducer, action: ActionDispatch) => {
  const fn = reducers[action.type];

  if (fn) return produce(state, (draftState) => fn(draftState, action.payload));

  console.log("[WARNING] Action without reducer:", action);
  return state;
};

// Componente Provider
export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);

  if (!context)
    throw new Error("useAddress deve ser usado dentro de um AddressProvider");

  return context;
};

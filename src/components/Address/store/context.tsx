"use client";
import React, { useContext, useReducer } from "react";
import { IAddressReducer, ActionDispatch } from "./types";
import { addressReducer, initialState } from "./reducer";

interface AddressContextProps {
  state: IAddressReducer;
  dispatch: React.Dispatch<ActionDispatch>;
}

const AddressContext = React.createContext<AddressContextProps>(
  {} as AddressContextProps
);

export const AddressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(addressReducer, initialState);

  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
};

export const useAddressSelector = <T,>(
  selector: (state: IAddressReducer) => T
): T => {
  const { state } = useAddress();
  return selector(state);
};

export const useAddressDispatch = () => {
  const { dispatch } = useAddress();
  return dispatch;
};

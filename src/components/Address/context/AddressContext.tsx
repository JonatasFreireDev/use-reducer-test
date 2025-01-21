"use client";
import React, { Dispatch, SetStateAction, useContext, useReducer } from "react";

export interface AddressItem {
  id: string;
  street: string;
  city: string;
}

export interface AddressContextProps {
  state: AddressItem[];
  dispatch: Dispatch<SetStateAction<AddressItem>>;
}

// Ações do reducer
export const ADD_ADDRESS = "ADD_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";

// Criar o contexto
export const AddressContext = React.createContext<AddressContextProps>(
  {} as AddressContextProps
);

// Função reducer
const addressReducer = (
  state: AddressItem[],
  action: { type: string; payload: { id: string } }
) => {
  console.log(action);
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];
    case EDIT_ADDRESS:
      return state.map((address) =>
        address.id === action.payload.id
          ? { ...address, ...action.payload }
          : address
      );
    default:
      return state;
  }
};

// Componente Provider
export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, []);

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

"use client";
import React, { useReducer } from "react";

// Ações do reducer
export const ADD_ADDRESS = "ADD_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";

// Criar o contexto
export const AddressContext = React.createContext();

// Função reducer
const addressReducer = (
  state: any[],
  action: { type: any; payload: { id: any } }
) => {
  console.log(action);
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];
    case EDIT_ADDRESS:
      return state.map((address: { id: any }) =>
        address.id === action.payload.id ? action.payload : address
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

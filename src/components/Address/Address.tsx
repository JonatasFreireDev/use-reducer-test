"use client";
import { AddressForm } from "./AddressForm";
import { AddressList } from "./AddressList";
import { AddressProvider } from "./store";

export const Address = () => {
  return (
    <AddressProvider>
      <h1>Address Manager</h1>
      <AddressForm />
      <AddressList />
    </AddressProvider>
  );
};

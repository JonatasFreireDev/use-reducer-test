"use client";
import { AddressList } from "@/components/Address";
import { AddressForm } from "@/components/Address/AddressForm";
import {
  ADD_ADDRESS,
  AddressProvider,
} from "@/components/Address/context/AddressContext";

export default function Home() {
  const handleSubimit = (dispatch, formData) => {
    dispatch({
      type: ADD_ADDRESS,
      payload: { ...formData, id: Date.now().toString() },
    });
  };

  return (
    <AddressProvider>
      <h1>Address Manager</h1>
      <AddressForm handleSubimit={handleSubimit} />
      <AddressList />
    </AddressProvider>
  );
}

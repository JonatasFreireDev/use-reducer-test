"use client";
import { AddressList } from "@/components/Address";
import { AddressForm } from "@/components/Address/AddressForm";
import {
  ADD_ADDRESS,
  AddressProvider,
} from "@/components/Address/context/AddressContext";
import { useCallback } from "react";

export default function Home() {
  const handleSubmit = useCallback((dispatch, formData) => {
    dispatch({
      type: ADD_ADDRESS,
      payload: { ...formData, id: Date.now().toString() },
    });
  }, []);

  return (
    <AddressProvider>
      <h1>Address Manager</h1>
      <AddressForm handleSubmit={handleSubmit} />
      <AddressList />
    </AddressProvider>
  );
}

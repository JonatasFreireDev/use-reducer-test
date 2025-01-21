"use client";
import { useAddress } from "./context/AddressContext";
import { AddressItem } from "./AddressItem";

export const AddressList = () => {
  const { state } = useAddress();

  return (
    <ul>
      {state.map((address) => (
        <AddressItem key={address.id} {...address} />
      ))}
    </ul>
  );
};

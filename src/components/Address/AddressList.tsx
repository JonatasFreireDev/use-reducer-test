"use client";
import { useAddress } from "./context/AddressContext";
import { AddressItem } from "./AddressItem";

export const AddressList = () => {
  const { state } = useAddress();

  return (
    <ul>
      {state.addressList.map((address, index) => (
        <AddressItem key={address.id} {...address} />
      ))}
    </ul>
  );
};

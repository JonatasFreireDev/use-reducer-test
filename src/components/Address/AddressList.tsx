"use client";
import { memo, useCallback } from "react";
import { AddressItem as AddressItemProps } from "./store/types";
import { useAddressSelector } from "./store/context";
import { AddressItem } from "./AddressItem";

export const AddressList = memo(() => {
  const addressList = useAddressSelector((state) => state.addressList);

  // Memoize the render item callback
  const renderItem = useCallback(
    (address: AddressItemProps) => (
      <AddressItem
        key={address.id}
        id={address.id}
        street={address.street}
        city={address.city}
      />
    ),
    []
  );

  return <ul>{(addressList as AddressItemProps[]).map(renderItem)}</ul>;
});

AddressList.displayName = "AddressList";

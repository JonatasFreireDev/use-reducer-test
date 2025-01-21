"use client";

import { memo, useCallback } from "react";
import {
  AddressItem as AddressItemProps,
  PREV_EDIT_MODE,
  useAddress,
} from "./context/AddressContext";

export const AddressItem = memo((address: AddressItemProps) => {
  const { dispatch } = useAddress();

  const handleChange = useCallback(() => {
    dispatch({ type: PREV_EDIT_MODE, payload: address });
  }, [dispatch, address]);

  return (
    <li>
      <div className="flex items-center justify-between p-2 hover:bg-slate-800">
        <div className="address-details">
          {address.street}, {address.city}
        </div>
        <button
          onClick={handleChange}
          className="bg-slate-500 p-2 rounded-md mx-3 "
        >
          Edit
        </button>
      </div>
    </li>
  );
});

AddressItem.displayName = "AddressItem";

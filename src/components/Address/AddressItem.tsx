"use client";

import { memo, useCallback } from "react";
import { AddressItem as AddressItemProps } from "./store/types";
import { useAddressOperations } from "./store/hooks";

export const AddressItem = memo(({ id, street, city }: AddressItemProps) => {
  const { setEditMode } = useAddressOperations();

  const handleEdit = useCallback(() => {
    setEditMode({ id, street, city });
  }, [id, street, city, setEditMode]);

  return (
    <li>
      <div className="flex items-center justify-between p-2 hover:bg-slate-800">
        <div className="address-details">
          {street}, {city}
        </div>
        <button
          onClick={handleEdit}
          className="bg-slate-500 p-2 rounded-md mx-3 "
        >
          Edit
        </button>
      </div>
    </li>
  );
});

AddressItem.displayName = "AddressItem";

"use client";

import { memo, useCallback, useState } from "react";
import {
  AddressItem as AddressItemProps,
  EDIT_ADDRESS,
} from "./context/AddressContext";
import { AddressForm } from "./AddressForm";

export const AddressItem = memo(({ id, city, street }: AddressItemProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = useCallback(() => {
    setIsFormVisible((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    (dispatch, formData) => {
      dispatch({ type: EDIT_ADDRESS, payload: { ...formData, id } });
      toggleFormVisibility();
    },
    [id, toggleFormVisibility]
  );

  return (
    <li>
      <div className="flex items-center justify-between p-2 hover:bg-slate-800">
        <div className="address-details">
          {street}, {city}
        </div>
        <button
          onClick={toggleFormVisibility}
          className="bg-slate-500 p-2 rounded-md mx-3 "
        >
          Edit
        </button>
      </div>

      {isFormVisible && <AddressForm handleSubmit={handleSubmit} />}
    </li>
  );
});

AddressItem.displayName = "AddressItem";

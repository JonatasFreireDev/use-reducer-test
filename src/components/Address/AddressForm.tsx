"use client";
import { memo, useCallback, useEffect, useState } from "react";
import {
  ADD_ADDRESS,
  CANCEL_EDIT_MODE,
  EDIT_ADDRESS,
  useAddress,
} from "./context/AddressContext";

export const AddressForm = memo(() => {
  const { state, dispatch } = useAddress();
  const [formData, setFormData] = useState({ id: "", street: "", city: "" });
  const {
    config: { selectedAddress },
  } = state;

  useEffect(() => {
    if (!selectedAddress) return;

    setFormData({ ...selectedAddress });
  }, [selectedAddress]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleCancelEdit = useCallback(() => {
    dispatch({
      type: CANCEL_EDIT_MODE,
    });
    setFormData({ id: "", street: "", city: "" });
  }, [dispatch]);

  const handleSubmitModify = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (selectedAddress) {
        dispatch({
          type: EDIT_ADDRESS,
          payload: formData,
        });
      } else {
        dispatch({
          type: ADD_ADDRESS,
          payload: { ...formData, id: Date.now().toString() },
        });
      }

      setFormData({ id: "", street: "", city: "" });
    },
    [dispatch, formData, selectedAddress]
  );

  return (
    <form onSubmit={handleSubmitModify}>
      <div className="flex p-5">
        <div className="grid gap-1 justify-items-end">
          <label>
            Rua:
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          {selectedAddress && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-slate-500 p-2 rounded-md"
            >
              cancel
            </button>
          )}
          <button type="submit" className="bg-slate-500 p-2 rounded-md">
            {selectedAddress ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
});

AddressForm.displayName = "AddressForm";

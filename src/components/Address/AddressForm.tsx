"use client";
import { Dispatch, memo, useCallback, useState } from "react";
import { useAddress } from "./context/AddressContext";

interface AddressForm {
  handleSubmit: (dispatch: Dispatch<string>, formData: object) => void;
}

export const AddressForm = memo(({ handleSubmit }: AddressForm) => {
  const { dispatch } = useAddress();
  const [formData, setFormData] = useState({ id: "", street: "", city: "" });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleSubmitModify = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(dispatch, formData);
      setFormData({ id: "", street: "", city: "" });
    },
    [dispatch, formData, handleSubmit]
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
          <button type="submit" className="bg-slate-500 p-2 rounded-md">
            Add
          </button>
        </div>
      </div>
    </form>
  );
});

AddressForm.displayName = "AddressForm";

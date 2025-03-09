"use client";
import { memo, useCallback, useEffect, useRef } from "react";
import { debounce } from "lodash";
import { useAddressOperations } from "./store/hooks";
import { useAddressSelector } from "./store/context";

export const AddressForm = memo(() => {
  const { addAddress, editAddress, cancelEditMode } = useAddressOperations();
  const selectedAddress = useAddressSelector(
    (state) => state.config.selectedAddress
  );
  const formRef = useRef({ id: "", street: "", city: "" });
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedAddress) {
      formRef.current = { id: "", street: "", city: "" };
      return;
    }

    formRef.current = { ...selectedAddress };
    if (streetRef.current) streetRef.current.value = selectedAddress.street;
    if (cityRef.current) cityRef.current.value = selectedAddress.city;
  }, [selectedAddress]);

  const debouncedUpdate = useCallback(
    debounce((name: string, value: string) => {
      formRef.current = {
        ...formRef.current,
        [name]: value,
      };
    }, 300),
    []
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedUpdate(e.target.name, e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (selectedAddress) {
        editAddress({ ...formRef.current, id: selectedAddress.id });
      } else {
        addAddress({ ...formRef.current, id: Date.now().toString() });
      }

      formRef.current = { id: "", street: "", city: "" };
      if (streetRef.current) streetRef.current.value = "";
      if (cityRef.current) cityRef.current.value = "";
    },
    [selectedAddress, addAddress, editAddress]
  );

  const handleCancel = useCallback(() => {
    cancelEditMode();
    formRef.current = { id: "", street: "", city: "" };
    if (streetRef.current) streetRef.current.value = "";
    if (cityRef.current) cityRef.current.value = "";
  }, [cancelEditMode]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex p-5">
        <div className="grid gap-1 justify-items-end">
          <label>
            Rua:
            <input
              ref={streetRef}
              type="text"
              name="street"
              placeholder="Street"
              defaultValue={selectedAddress?.street || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              ref={cityRef}
              type="text"
              name="city"
              placeholder="City"
              defaultValue={selectedAddress?.city || ""}
              onChange={handleChange}
            />
          </label>
          {selectedAddress && (
            <button
              type="button"
              onClick={handleCancel}
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

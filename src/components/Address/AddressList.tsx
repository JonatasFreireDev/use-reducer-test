"use client";
import { useCallback, useContext, useState } from "react";
import { AddressContext, EDIT_ADDRESS } from "./context/AddressContext";
import { AddressForm } from "./AddressForm";

export const AddressList = () => {
  const [showForm, setShowForm] = useState(false);
  const { state } = useContext(AddressContext);

  const showFormHandler = useCallback(() => {
    setShowForm((old) => !old);
  }, []);

  const handleSubimit = useCallback((dispatch, formData, id) => {
    dispatch({ type: EDIT_ADDRESS, payload: { ...formData, id } });
    showFormHandler();
  }, []);

  return (
    <ul>
      {state.map((address) => (
        <li key={address.id}>
          <div>
            {address.street}, {address.city}
          </div>
          <button onClick={showFormHandler}>Edit</button>
        </li>
      ))}
      {showForm && (
        <AddressForm
          handleSubimit={(dispatch, formData) =>
            handleSubimit(dispatch, formData, address.id)
          }
        />
      )}
    </ul>
  );
};

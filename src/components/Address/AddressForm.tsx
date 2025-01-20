"use client";
import { useContext, useState } from "react";
import {
  AddressContext,
} from "./context/AddressContext";

// Formulário para adicionar/editar endereço
export const AddressForm = ({ handleSubimit }) => {
  const { dispatch } = useContext(AddressContext);
  const [formData, setFormData] = useState({ id: "", street: "", city: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitModify = (e) => {
    e.preventDefault();

    handleSubimit(dispatch, formData);

    setFormData({ id: "", street: "", city: "" });
  };

  return (
    <form onSubmit={handleSubmitModify}>
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <button type="submit">{formData?.id ? "Edit" : "Add"}</button>
    </form>
  );
};

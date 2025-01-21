"use client";
import { AddressList } from "@/components/Address";
import { AddressForm } from "@/components/Address/AddressForm";
import { AddressProvider } from "@/components/Address/context/AddressContext";

export default function Home() {
  return (
    <AddressProvider>
      <h1>Address Manager</h1>
      <AddressForm />
      <AddressList />
    </AddressProvider>
  );
}

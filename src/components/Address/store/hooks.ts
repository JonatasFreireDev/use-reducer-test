import { useCallback } from "react";
import { AddressItem } from "./types";
import { addressActions } from "./actions";
import { useAddressDispatch } from "./context";

export const useAddressOperations = () => {
  const dispatch = useAddressDispatch();

  const addAddress = useCallback(
    (address: AddressItem) => {
      dispatch(addressActions.addAddress(address));
    },
    [dispatch]
  );

  const editAddress = useCallback(
    (address: AddressItem) => {
      dispatch(addressActions.editAddress(address));
    },
    [dispatch]
  );

  const setEditMode = useCallback(
    (address: AddressItem) => {
      dispatch(addressActions.prevEditMode(address));
    },
    [dispatch]
  );

  const cancelEditMode = useCallback(() => {
    dispatch(addressActions.cancelEditMode());
  }, [dispatch]);

  return {
    addAddress,
    editAddress,
    setEditMode,
    cancelEditMode,
  };
};

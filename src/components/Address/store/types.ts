export interface IAddressReducer {
  addressList: Array<AddressItem>;
  config: {
    selectedAddress: AddressItem | undefined;
    isEditMode: boolean;
  };
}

export interface AddressItem {
  id: string;
  street: string;
  city: string;
}

export type ActionDispatch = {
  type: string;
  payload?: any;
};

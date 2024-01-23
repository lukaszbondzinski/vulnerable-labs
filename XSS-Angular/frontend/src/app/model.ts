export interface Customer {
  id: string;
  name: string;
  surname: string;
  pesel: string;
  serialNumber: string;
  documentsUrl: string;
  address: Address
}

export interface Address {
  id: string;
  country: string;
  city: string;
  street: string
  flatNumber: string
}

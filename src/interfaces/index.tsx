export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: number;
    website: string;
    company: ICompany;
    comment?: string;
}

export interface IAddress {
    street: string;
    city: string;
    zipcode: number;
}

export interface ICompany {
    name: string;
}

export interface IBranch {
    id: number;
    company_id: number;
    address: string;
    instagram: string;
    whatsapp: string;
}

export interface ICompany {
    id: number;
    name: string;
    description: string;
    image_path: string;
    branches: IBranch[];
}
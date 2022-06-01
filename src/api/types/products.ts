export interface IProduct {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
    isActive: boolean;
}
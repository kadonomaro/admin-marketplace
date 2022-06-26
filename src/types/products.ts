import { Entity } from "@/types/index";

export interface Product extends Entity {
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
}

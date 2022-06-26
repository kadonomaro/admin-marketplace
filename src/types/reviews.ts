import { Entity } from "@/types/index";

export interface Review extends Entity {
    author: string;
    description: string;
    image: string;
    source: string;
}

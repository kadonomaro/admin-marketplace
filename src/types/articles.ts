import { Entity } from "@/types/index";

export interface Article extends Entity {
    text?: string;
    image: string;
    source?: string;
}

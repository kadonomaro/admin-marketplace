import { Entity } from "@/types/index";

export interface Page extends Entity {
    slug: string;
    seo: PageSeo;
    content?: string;
}

interface PageSeo {
    title: string;
    description?: string;
}

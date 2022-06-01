export interface Page {
    slug: string;
    seo: PageSeo;
    name?: string;
    content?: string;
    isActive: boolean;
}

interface PageSeo {
    title: string;
    description?: string;
}

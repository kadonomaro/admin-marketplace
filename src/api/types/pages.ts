export interface IPage {
    slug: string;
    seo: IPageSeo;
    name?: string;
    content?: string;
    isActive: boolean;
}

interface IPageSeo {
    title: string;
    description?: string;
}

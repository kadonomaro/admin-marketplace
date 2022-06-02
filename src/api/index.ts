import axios, { AxiosInstance } from "axios";
import { ProductsApi } from "@/api/requests/products";
import { ReviewsApi } from "@/api/requests/reviews";
import { ArticlesApi } from "@/api/requests/articles";
import { PagesApi } from "@/api/requests/pages";

export interface Api {
    products: ProductsApi;
    reviews: ReviewsApi;
    articles: ArticlesApi;
    pages: PagesApi;
}

const createApi = (baseURL: string): AxiosInstance => {
    return axios.create({ baseURL });
};

const setupApi = (api: AxiosInstance): Api => {
    return {
        products: new ProductsApi(api),
        reviews: new ReviewsApi(api),
        articles: new ArticlesApi(api),
        pages: new PagesApi(api),
    };
};

export const initApi = (baseURL: string) => {
    return setupApi(createApi(baseURL));
};

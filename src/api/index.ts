import axios, { AxiosInstance } from "axios";
import { productsApi } from "@/api/requests/products";
import { reviewsApi } from "@/api/requests/reviews";
import { articlesApi } from "@/api/requests/articles";
import { pagesApi } from "@/api/requests/pages";

export interface Api {
    products: object;
    reviews: object;
    articles: object;
    pages: object;
}

const createApi = (baseURL: string): AxiosInstance => {
    return axios.create({ baseURL });
};

const setupApi = (api: AxiosInstance): Api => {
    return {
        products: productsApi(api),
        reviews: reviewsApi(api),
        articles: articlesApi(api),
        pages: pagesApi(api),
    };
};

export const initApi = (baseURL: string) => {
    return setupApi(createApi(baseURL));
};

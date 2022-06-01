import axios, { AxiosInstance } from "axios";
import { productsApi } from "./requests/products";
import { reviewsApi } from "./requests/reviews";
import { articlesApi } from "./requests/articles";
import { pagesApi } from "./requests/pages";
import exp from "constants";

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

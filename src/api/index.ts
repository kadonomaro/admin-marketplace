import axios from "axios";
import { productsApi } from "./requests/products";
import { reviewsApi } from "./requests/reviews";
import { articlesApi } from "./requests/articles";
import { pagesApi } from "./requests/pages";

const createApi = (baseURL: string) => {
    return axios.create({ baseURL });
};

const setupApi = (api) => {
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

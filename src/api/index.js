import axios from "axios";
import { productsApi } from "@/api/requests/products";
import { reviewsApi } from "@/api/requests/reviews";
import { articlesApi } from "@/api/requests/articles";
import { pagesApi } from "@/api/requests/pages";

const createApi = (baseURL) => {
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

export const initApi = (baseURL) => {
    return setupApi(createApi(baseURL));
};

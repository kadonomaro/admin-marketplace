import axios, { AxiosInstance } from "axios";
import { ProductsApi } from "@/api/requests/products";
import { ReviewsApi } from "@/api/requests/reviews";
import { ArticlesApi } from "@/api/requests/articles";
import { PagesApi } from "@/api/requests/pages";

interface Api {
    products: ProductsApi;
    reviews: ReviewsApi;
    articles: ArticlesApi;
    pages: PagesApi;
}

const createApi = (baseURL: string): Api => {
    const api: AxiosInstance = axios.create({ baseURL });

    return {
        products: new ProductsApi(api),
        reviews: new ReviewsApi(api),
        articles: new ArticlesApi(api),
        pages: new PagesApi(api),
    };
};

/*
http://localhost:8000
https://api-marketplace-pi.vercel.app
 */
export const $api = createApi("https://api-marketplace-pi.vercel.app");

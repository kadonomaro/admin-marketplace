import { AxiosInstance } from "axios";
import { Page } from "@/types/pages";

export const pagesApi = (api: AxiosInstance) => {
    return {
        /**
         * Get page by slug
         */
        async getOne(slug: string): Promise<Page> {
            return await api.get(`api/pages/${slug}`).then(({ data }) => data);
        },

        /**
         * Create page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }: any) {
            return await api.post("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Update page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }: any) {
            return await api.put("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Delete page by ID
         */
        async delete(id: string | number): Promise<Page> {
            return await api.put(`api/pages${id}`).then(({ data }) => data);
        },
    };
};

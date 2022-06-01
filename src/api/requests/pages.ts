import { IPage } from "../types/pages";

export const pagesApi = (api) => {
    return {
        /**
         * Get page by slug
         */
        async getOne(slug: string): Promise<IPage> {
            return api.get(`api/pages/${slug}`).then(({ data }) => data);
        },

        /**
         * Create page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async create({ data }) {
            return api.post("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Update page
         * @param { Object } data
         * @return {Promise<Object>}
         */
        async update({ data }) {
            return api.put("api/pages", { data }).then(({ data }) => data);
        },

        /**
         * Delete page by ID
         */
        async delete(id: string | number): Promise<IPage> {
            return api.put(`api/pages${id}`).then(({ data }) => data);
        },
    };
};

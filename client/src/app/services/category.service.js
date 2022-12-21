import config from "../../config.json";
import httpService from "./http.service";

const url = config.apiEndpoint + "/category";

const categoryService = {
    async fatchAllCategories() {
        try {
            const {data} = await httpService.get(url);
            return data;
        } catch (error) {
            throw new Error(error.response.data.error.message);
        }
    },
    async createCategory(category) {
        try {
            const {data} = await httpService.post(url + "/createCategory", {name: category});
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    },
    async updateCategory(category) {
        try {
            const {data} = await httpService.patch(url + "/updateCategory", category);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    },
    async deleteCategory(id) {
        try {
            const {data} = await httpService.delete(url + `/${id}`);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    }
};

export default categoryService;
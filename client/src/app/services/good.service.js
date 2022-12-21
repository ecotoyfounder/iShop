import config from "../../config.json";
import httpService from "./http.service";

const url = config.apiEndpoint + "/good";

const goodService = {
    async fetchAllGoods() {
        try {
            const {data} = await httpService.get(url);
            return data;
        } catch (error) {
            throw new Error(error.response.data.error.message);
        }
    },
    async getGoodById(id) {
        try {
            const {data} = await httpService.get(url + `/${id}`);
            return data;
        } catch (error) {
            throw new Error(error.response.data.error.message);
        }
    },
    async createGood(good) {
        try {
            const {data} = await httpService.post(url + "/createGood", good);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    },
    async updateGood(good) {
        try {
            const {data} = await httpService.patch(url + "/updateGood", good);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    },
    async deleteGood(id) {
        try {
            const {data} = await httpService.delete(url + `/${id}`);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    }
};

export default goodService;
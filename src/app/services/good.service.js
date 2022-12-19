import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const goodEndpoint = "good/";

const goodService = {
    get: async () => {
        const {data} = await httpService.get(goodEndpoint);
        return data;
    },
    create: async (payload) => {
        const {data} = await httpService.put(
            goodEndpoint + payload._id,
            payload
        );
        return data;
    },
    getCurrentGood: async () => {
        const {data} = await httpService.get(
            goodEndpoint + localStorageService.getGoodId()
        );
        return data;
    },
    update: async (payload) => {
        const {data} = await httpService.patch(
            goodEndpoint + localStorageService.getGoodId(),
            payload
        );
        return data;
    }
};
export default goodService;

import httpService from "./http.service";
import config from "../../config.json";

const url = config.apiEndpoint + "/auth";

const authService = {
    async create(user) {
        try {
            const {data} = await httpService.post(url + "/signUp", user);
            return data;
        } catch (error) {
            throw new Error(error.response.data.error.message);
        }
    },

    async loginTokens(tokens) {
        try {
            const {data} = await httpService.post(url + "/signInWithToken", tokens);
            return data;
        } catch (e) {
            throw new Error(e.response.data.error.message);
        }
    },

    async login(user) {
        try {
            const {data} = await httpService.post(url + "/signInWithPassword", user);
            return data;
        } catch (error) {
            throw new Error(error.response.data.error.message);
        }
    }
};

export default authService;
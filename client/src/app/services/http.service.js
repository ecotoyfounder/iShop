import axios from "axios";

const http = axios.create();

const httpService = {
    get: http.get,
    post: http.post,
    patch: http.patch,
    delete: http.delete,
};

export default httpService;
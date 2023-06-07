import axios from "axios";

const api = axios.create({
    baseURL: "http://3.133.177.189:81/api",
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// response interceptor
api.interceptors.response.use(function (response) {
    if (!response?.data?.status) {
        return Promise.reject(response?.data?.message || "Something went wrong.")
    }

    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default api;
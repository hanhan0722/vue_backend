import axios from "axios"
import qs from "qs"
import { Message } from 'element-ui'

let loading;
const Axios = axios.create({
    timeout: 10000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (config.method === "post") {
            if (!config.hideLoading) {
                loading = Loading.service({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            }

            if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8') {
                // 序列化
                config.data = qs.stringify(config.data);
            }
        }
        return config;
    },
    error => {
        Message({
            showClose: true,
            message: error,
            type: "info"
        });
        return Promise.reject(error);
    }
);
Axios.interceptors.response.use(
    res => {
        loading && loading.close();
        return Promise.resolve(res.data);
    },
    error => {
        loading && loading.close();
        Message({
            showClose: true,
            message: error,
            type: "info"
        });
        return Promise.reject(error);
    }
);

export default Axios;
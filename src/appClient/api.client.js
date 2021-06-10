import config from '../app.config.js';
import axios from 'axios'

const options = {
    baseURL: config.apiBaseAddress,
    headers: { 'content-type': 'application/json' }
}

const client = axios.create(options);


class AppClient {
    constructor() {
        this.client = client;
    }

    get(url, config = {}) {
        let resu="jj";
        console.log('data: '+resu);
        return this.client.get(url, config);
    }

    post(url, data = {}, config = {}) {
        return this.client.post(url, data, config);
    }

    put(url, data = {}, config = {}) {
        return this.client.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.client.get(url, config);
    }
}

const apiClient=new AppClient();
export default apiClient;





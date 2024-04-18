import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7e4309a4d9bc4f4f9c76222908e2e3f6'
    }
})
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'abb80d9f60bb410b9294ee9e2f9efee1'
    }
})
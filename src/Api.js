import axios from 'axios';

const API = axios.create({
    //baseURL: "https://demo7276224.mockable.io/",
    baseURL: "https://demo7276224.mockable.io/",
    headers: {
        Pragma: 'no-cache'
    }
});

export default API;
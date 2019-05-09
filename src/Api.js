import axios from 'axios';

const API = axios.create({
    //baseURL: "https://demo7276224.mockable.io/",
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        Pragma: 'no-cache'
    }
});

export default API;
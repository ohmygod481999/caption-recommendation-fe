import axios from 'axios';

import { BASE_URL } from './envConst.js';


export default axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
});
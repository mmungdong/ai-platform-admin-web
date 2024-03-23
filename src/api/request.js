import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const req = makeUseAxios({
  axios: axios.create({ 
        baseURL: 'http://localhost:80',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
})

export default req;
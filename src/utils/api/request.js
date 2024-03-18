import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const req = makeUseAxios({
  axios: axios.create({ 
        baseURL: 'localhost:3001',
        timeout: 5000,
    })
})

// Override timeout for this request as it's known to take a long time
// instance.get('/longRequest', {
//     timeout: 5000
//   });

export default req;
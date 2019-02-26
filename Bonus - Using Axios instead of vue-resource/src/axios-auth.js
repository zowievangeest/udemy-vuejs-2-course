import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-update-1e8c3.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance;

import axios from 'axios'

const USERS_REST_API_URL = 'http://192.168.29.191:8080/findAll';
const USERS_REST_API_ADD_URL = 'http://localhost:8080/register';

class UserService {

    getUsers=()=>{
        return axios.get(USERS_REST_API_URL);
    }

    addUsers()
    {
        return axios.post(USERS_REST_API_ADD_URL)
    }
}

export default  UserService;
import { loginUserResponse, userLogin } from "../../properties/user";
import axios from 'axios';
import { service } from "../AppConstants";

export const login = ( user: userLogin): Promise<loginUserResponse> => {
    console.log('user: ', user)

    const val = axios.post<loginUserResponse>(`${service.url}/usuarios`, user)
    .then(function (response) {
        console.log(response);
         return response.data;
    }).catch(err => {
        console.log(err);
        return {} as loginUserResponse;
    })
    return val;
}
import { datosUsuario, loginUserResponse, User } from "../properties/user";
import axios from 'axios';
import { service } from "../config/AppConstants";
import { Api } from "../properties/serviceResponse";
import { AppMessages } from "../config/AppMessages";

const errorDefault: Api = {
    codigoRetorno: 'ERROR',
    mensajeRetorno: typeof AppMessages
}

export const login = ( user: datosUsuario): Promise<loginUserResponse> => {
    const val = axios.post<loginUserResponse>(`${service.url}/usuarios`, user)
    .then(function (response) {
         return response.data;
    }).catch(err => {
        console.log(err.data);
        return {
            ...errorDefault,
            mensajeRetorno: AppMessages[err.config.message as keyof typeof AppMessages] || AppMessages.errorLogin,
            usuario: {} as User
        }
    })
    return val;
}
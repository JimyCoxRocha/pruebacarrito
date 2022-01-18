import { datosUsuario, loginUserResponse, User } from "../properties/user";
import axios from 'axios';
import { service } from "../config/AppConstants";
import { Api } from "../properties/serviceResponse";
import { AppMessages } from "../config/AppMessages";
import { product, productApirResponse } from "../properties/products";

const errorDefault: Api = {
    codigoRetorno: 'ERROR',
    mensajeRetorno: typeof AppMessages
}


export const getProducts = (): Promise<productApirResponse> => {
    const val = axios.get<productApirResponse>(`${service.url}/products`)
    .then(function (response) {
         return response.data;
    }).catch(err => {
        return {
            ...errorDefault,
            mensajeRetorno: AppMessages[err.config.message as keyof typeof AppMessages] || AppMessages.errorLogin,
            data: []
        }
    })
    return val;
}
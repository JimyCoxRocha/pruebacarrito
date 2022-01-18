import { Api } from "./serviceResponse";

export interface User {
    email: string,
    nombre: string,
    plan: number,
    telefono: string
}

export interface loginUserResponse extends Api{
    usuario: User;
}

export interface datosUsuario {
    email: string,
    password: string
}

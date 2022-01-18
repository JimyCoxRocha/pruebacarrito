import { Api } from "./serviceResponse";

export interface product {
    descripcion: string,
    precio: string,
    imagen: string
}

export interface productApirResponse extends Api{
    data: product[];
}
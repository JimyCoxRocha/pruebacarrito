import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../layouts/MainLayout';
import { product, productApirResponse } from '../../properties/products';
import { getProducts } from '../../repository/productsRepo';
import { Card } from '../../shared/Card'

export const LandingView = () => {
    const [datosProduct, setProduct] = useState<product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const hanfleApiResponse = (data: productApirResponse) => {
        setIsLoading(false)
        if(data.codigoRetorno !== 'ERROR'){
            const valor = data as productApirResponse;
            setProduct(valor.data);
            setIsError(false);
        }
        else {
            setIsError(true);
        }
        
    }

    useEffect(() => {
        getProducts().then( data => hanfleApiResponse(data) )
    }, []);

    return (
        <MainLayout>
            <div className="container pt-5">
                <div className="row">
                    
                    {  (datosProduct.length > 0) && 
                            datosProduct.map((val, key) => {
                                return <Card producto = {val} key={key}/>
                            })
                    
                    }
                </div>
            </div>
        </MainLayout>
    )
}

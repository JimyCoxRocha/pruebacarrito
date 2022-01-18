import React from 'react'
import { product } from '../properties/products'
import { setStorage } from '../services/storage/storage'
import { storage } from '../config/AppConstants';

interface producto {
    producto: product
}

export const Card = ({producto}: producto) => {

    const handleClick = () => {
        setStorage(storage.product_card, producto.descripcion);
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100">
                <div className="d-flex justify-content-between position-absolute w-100">
                </div>
                <a href="#">
                <img src={producto.imagen} className="card-img-top" alt="Product"/>
                </a>
                <div className="card-body px-2 pb-2 pt-1">
                <div className="d-flex justify-content-between">
                    <div>
                    <p className="h4 text-primary">{producto.precio}</p>
                    </div>
                    <div>
                    <a href="#" className="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                
                <p className="mb-0">
                    <strong>
                    <a href="#" className="text-secondary">{producto.descripcion}</a>
                    </strong>
                </p>
                <p className="mb-1">
                    <small>
                    <a href="#" className="text-secondary">Brands</a>
                    </small>
                </p>
                
                <div className="d-flex justify-content-between">
                    <div className="col px-0">
                    <button onClick={handleClick} className="btn btn-outline-primary btn-block">
                        Add To Cart 
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

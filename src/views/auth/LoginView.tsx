import '../auth/loginstyle.css';
import { NavLink, useNavigate  } from "react-router-dom";
import { useState } from 'react';
import { login } from '../../repository/LoginRepository';
import { datosUsuario, loginUserResponse } from '../../properties/user';
import { setStorage } from '../../services/storage/storage';
import { storage } from '../../config/AppConstants';

const init: datosUsuario = {
    email: "",
    password: "",
}

export const LoginView = () => {
    const navigate = useNavigate();
    const [datosUsuario, setDatosUsuario] = useState<datosUsuario>(init);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const hanfleApiResponse = (data: loginUserResponse) => {
        setIsLoading(false)
        if(data.codigoRetorno !== 'ERROR'){
            setStorage(storage.user, 'true');
            console.log(data);
            setIsError(false);
            navigate("/");
        }
        else {
            setIsError(true);
            setStorage(storage.user, 'false');
        }
        
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(datosUsuario.email.length != 0 || datosUsuario.password.length != 0){
            setIsLoading(true);
            login({
                ...datosUsuario
            }).then( data => hanfleApiResponse(data) )
        }

        event.preventDefault();
    }
    return (
        <div className="global-container">
            <div className="card login-form">
            <div className="card-body">
                <h3 className="card-title text-center">Log in to Codepen</h3>
                <div className="card-text">
                    {isError &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>
                    }
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" value={datosUsuario.email} onChange={(e) => setDatosUsuario({...datosUsuario, email: e.target.value!})} className="form-control form-control-sm" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <a href="#" style={{float: "right",fontSize:"12px"}}>Forgot password?</a>
                            <input 
                                value={datosUsuario.password} 
                                onChange={(e) => setDatosUsuario({...datosUsuario, password: e.target.value!})}
                                type="password" 
                                className="form-control form-control-sm"
                            />
                        </div>
                        
                        <button onClick={handleClick} className="btn btn-primary btn-block">Ingresar</button>
                        
                    </form>
                    
                    { isLoading &&
                        <div >
                            <div className="spinner-border" role="status"> </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </div>
            </div>
        <NavLink className="btn btn-success mt-0" to="/landing">Ver ofertas</NavLink>
        </div>
    </div>
    
    )
}

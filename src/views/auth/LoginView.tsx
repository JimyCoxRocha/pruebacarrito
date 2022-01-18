import '../auth/loginstyle.css';
import { useNavigate  } from "react-router-dom";
import { useState } from 'react';
import { login } from '../../config/repository/LoginRepository';
import { datosUsuario, userLogin } from '../../properties/user';

const init: datosUsuario = {
    email: "",
    password: "",
}

export const LoginView = () => {
    const navigate = useNavigate();
    const [datosUsuario, setDatosUsuario] = useState<datosUsuario>(init);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        /* const user = getStorage('user'); */
        setIsLoading(true);
        login({
            transaccion: 'autenticarUsuario',
            datosUsuario
        }).then( data => {
                setIsLoading(false)
                console.log("ejecucion:  ",data)

            }   
        )
        //navigate("/");
        event.preventDefault();
    }
    return (
        <div className="global-container">
            <div className="card login-form">
            <div className="card-body">
                <h3 className="card-title text-center">Log in to Codepen</h3>
                <div className="card-text">
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>
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
                        <button onClick={handleClick} className="btn btn-primary btn-block">Sign in</button>
                        
                    </form>

                    { isLoading &&
                        <div >
                            <div className="spinner-border" role="status"> </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
    
    )
}

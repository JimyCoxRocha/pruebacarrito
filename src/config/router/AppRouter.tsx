import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes  } from 'react-router-dom';
import { LoginView } from '../../views/auth/LoginView';
import { HomeView } from '../../views/home/HomeView';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    /* useEffect(() => {
        if( !!localStorage.getItem("token") ){

        }else{
            
            
        }

    }, [ dispatch ]);

    if( checking ){
        return <h5>Espere...</h5>
    } */

    return (
        <Router>
            <Routes>
                <Route element = {<PublicRoute isAuth={false}/>}>
                    <Route path="/login" element = {<LoginView />} />
                </Route>
                
                    
                <Route element = {<PrivateRoute isAuth={false}/>}>
                    <Route path="/" element={<HomeView/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />

            </Routes>
        </Router>
    )
}

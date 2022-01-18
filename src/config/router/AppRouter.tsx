import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes  } from 'react-router-dom';
import { getStorage } from '../../services/storage/storage';
import { LoginView } from '../../views/auth/LoginView';
import { CarView } from '../../views/home/CarView';
import { LandingView } from '../../views/landingPage/LandingView';
import { storage } from '../AppConstants';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            const user = getStorage(storage.user);
            if(!user){
                console.log('user: ', user)
                setIsAuth(false);
            }else{
                setIsAuth(true);
            }
        }, 100);
    }, [])

    return (
        <Router>
            <Routes>
                <Route element = {<PublicRoute isAuth={isAuth}/>}>
                    <Route path="/login" element = {<LoginView />} />
                    <Route path="/landing" element = {<LandingView />} />
                </Route>
                
                    
                <Route element = {<PrivateRoute isAuth={isAuth}/>}>
                    <Route path="/" element={<CarView/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />

            </Routes>
        </Router>
    )
}

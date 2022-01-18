import React, { Children } from 'react'
import { NavLink } from 'react-router-dom';

type Props = {
};
export const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <NavLink className="btn btn-primary mt-0 m-2" to="/about">Login</NavLink>
            </nav>
            {children}
        </>
    )
}

import { Navigate, Outlet } from 'react-router'


export const PublicRoute = ({isAuth}: any) => {

       return isAuth ? <Navigate to="/" /> :<Outlet/>
}

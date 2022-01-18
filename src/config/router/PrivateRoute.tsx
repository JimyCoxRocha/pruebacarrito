import { Navigate, Outlet } from 'react-router'


export const PrivateRoute = ({isAuth}: any) => {

       return isAuth ? <Outlet/> : <Navigate to="/login" />
}

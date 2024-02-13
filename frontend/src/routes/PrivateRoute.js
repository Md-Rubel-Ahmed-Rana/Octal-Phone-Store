import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if (loading){
        return <Loader />
    }

   if(!user && !user?.email){
        return <Navigate to="/login" state={{from: location}} replace />
    }


    return children

};

export default PrivateRoute;
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAuth = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('from private route : ',location);

    if(loading){
        return <span className="loading loading-bars text-blue-400 loading-lg flex mx-auto mt-[300px]"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PrivateAuth;
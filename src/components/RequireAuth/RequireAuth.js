import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} />
    }
    return children;
};

export default RequireAuth;
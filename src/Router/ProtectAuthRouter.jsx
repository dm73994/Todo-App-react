import React, { useContext } from 'react'
import { UserContext } from '../auth/user/UserContext'
import { Navigate } from 'react-router-dom';

const ProtectAuthRouter = ({ children }) => {

    const { user } = useContext(UserContext);

    return user == undefined ?
        <> {children} </>
        : <Navigate to={'/lists'} replace={true} />
}

export default ProtectAuthRouter
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../user/UserContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        user.logout();
        navigate('/auth/login', {replace: true});
    }, [])
  return <></>
}

export default Logout
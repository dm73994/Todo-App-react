import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

const UserProvider = ( { children } ) => {
  const [user, setUser] = useState(undefined)
  const navigate = useNavigate();

  useEffect(() => {
    user != undefined ? navigate('/lists', {replace: true}) : navigate('/auth/login', {replace: true})
    console.log(user)
  }, [user]);

  const login = (user) => {
    setUser(user);
  }

  const logout = () => {
    setUser(undefined)
  }

  return (
    <UserContext.Provider value={{user, login, logout}} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
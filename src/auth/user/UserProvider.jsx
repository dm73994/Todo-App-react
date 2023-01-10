import React from 'react'
import { UserContext } from './UserContext'

const UserProvider = ( {user, child} ) => {
  return (
    <UserContext.Provider value={user}>
        {child}
    </UserContext.Provider>
  )
}

export default UserProvider
import React from 'react'
import MainRouter from './Router/MainRouter'
import ThemeComponent from './theme/ThemeComponent'
import axios from 'axios'
import { API_URL } from '../config/env'
import { UserContext } from './auth/user/UserContext'
import UserProvider from './auth/user/UserProvider'



const App = () => {
  axios.defaults.baseURL = API_URL;

  return (
    <ThemeComponent>
        <UserProvider >
          <MainRouter />
        </UserProvider>
    </ThemeComponent>
  )
}

export default App
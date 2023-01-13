import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from '../auth/Router/AuthRouter'
import AppRuter from '../TodoApp/Router/AppRuter'
import ProtectAuthRouter from './ProtectAuthRouter'

const MainRouter = () => {
    return (
        <Routes>

            <Route path='auth/*' element={ 
                <ProtectAuthRouter >
                    <AuthRouter />
                </ProtectAuthRouter>
            }/>
            
            <Route path='*' element={ <AppRuter /> } />
        </Routes>
    )
}

export default MainRouter
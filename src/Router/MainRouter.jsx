import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from '../auth/Router/AuthRouter'
import AppRuter from '../TodoApp/Router/AppRuter'

const MainRouter = () => {
    return (
        <Routes>
            <Route path='auth/*' element={ <AuthRouter /> } />
            <Route path='*' element={ <AppRuter /> } />
        </Routes>
    )
}

export default MainRouter
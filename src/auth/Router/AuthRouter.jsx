import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Logout from '../pages/Logout'

const AuthRouter = () => {
    return (
        <Routes>
            <Route path='*' element={ <Login /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='register' element={ <Register /> } />
            <Route path='logout' element={ <Logout /> } />
        </Routes>
    )
}

export default AuthRouter
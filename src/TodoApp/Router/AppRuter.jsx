import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from '../pages/Tasks/Tasks'
import Categories from '../pages/Categories/Categories'

const AppRuter = () => {
    return (
        <Routes>
            <Route path='tasks' element={ <Tasks /> } />
            <Route path='categories' element={ <Categories /> } />
        </Routes>
    )
}

export default AppRuter
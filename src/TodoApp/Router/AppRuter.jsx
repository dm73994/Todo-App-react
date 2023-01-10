import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from '../pages/Tasks/Tasks'
import Categories from '../pages/Categories/Categories'
import Lists from '../pages/Lists/Lists'
import ViewList from '../pages/Lists/ViewList'


const AppRuter = () => {
    return (
        <Routes>
            <Route path='categories' element={ <Categories /> } />
            <Route path='lists' element={ <Lists /> } />
            <Route path='list' element={ <ViewList /> } />
        </Routes>
    )
}

export default AppRuter
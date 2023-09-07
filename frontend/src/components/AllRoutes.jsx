import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AuthPage } from '../pages/AuthPage'
import { ErrorPage } from '../pages/ErrorPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

import React from 'react'
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoutes = () => {

    const isAuthenticated = true; // Replace with actual authentication logic

    if(isAuthenticated) {
        return <Outlet />
    }


    return <Navigate to="/login" />
}
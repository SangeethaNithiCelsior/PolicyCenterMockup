import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';
import CreateAccountPage from '../pages/CreateAccount/CreateAccountPage';
import NewSubmissionsPage from '../pages/NewSubmissions/NewSubmissions';
import ResetPasswordPage from '../pages/ResetPassword/ResetPassword';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/desktop" element={<DesktopPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/new-submission" element={<NewSubmissionsPage />} />
            {/* Fallback route for undefined paths */}
            <Route path="*" element={<div style={{padding:'2rem',textAlign:'center'}}><h2>Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
    );
};

export default AppRoutes;

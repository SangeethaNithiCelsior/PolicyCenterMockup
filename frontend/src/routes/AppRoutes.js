import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';
import CreateAccountPage from '../pages/CreateAccount/CreateAccountPage';
import NewSubmissionsPage from '../pages/NewSubmissions/NewSubmissions';
import ResetPasswordPage from '../pages/ResetPassword/ResetPassword';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/desktop" element={<DesktopPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/create-account" element={<CreateAccountPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/new-submission" element={<NewSubmissionsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

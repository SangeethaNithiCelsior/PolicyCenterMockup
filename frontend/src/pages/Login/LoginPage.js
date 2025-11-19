import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
// import config from '../../config/config'; // Temporarily comment out config import

const LoginPage = () => {
    const [username, setUsername] = useState(''); // Blank by default
    const [password, setPassword] = useState(''); // Blank by default
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const navigate = useNavigate();

    const handleLogin = () => {
        // Temporarily skip credential check for debug
        navigate('/desktop'); // Always redirect for debug
    };

    const handleResetPassword = () => {
        navigate('/reset-password'); // Navigate to the Reset Password page
    };

    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.pageTitle}>PolicyMaster</h1>
            <div className={styles.loginFormContainer}>
                <div className={styles.loginForm}>
                    <label htmlFor="username" className={styles.inputLabel}>Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputField}
                    />
                    <label htmlFor="password" className={styles.inputLabel}>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputField}
                    />
                    <button onClick={handleLogin} className={styles.submitButton}>
                        Login
                    </button>
                    {errorMessage && (
                        <p id="login-error" className={styles.errorMessage}>{errorMessage}</p>)}
                    <button onClick={handleResetPassword} className={styles.resetPasswordLink}>
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

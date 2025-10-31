import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            setErrorMessage('Both fields are required.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        // Simulate successful password reset
        setErrorMessage('');
        setSuccessMessage('Password reset successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    };

    const handleCancel = () => {
        navigate('/login'); // Navigate back to the login page
    };

    return (
        <div className={styles.resetPasswordContainer}>
            <h1 className={styles.pageTitle}>Reset Password</h1>
            <form onSubmit={handleResetPassword} className={styles.resetPasswordForm}>
                <label htmlFor="newPassword" className={styles.inputLabel}>New Password</label>
                <input
                    id="newPassword"
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={styles.inputField}
                />
                <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={styles.inputField}
                />
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={!newPassword || !confirmPassword} // Disable button if fields are empty
                    >
                        Reset Password
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;

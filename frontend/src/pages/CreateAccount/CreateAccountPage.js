import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CreateAccountPage.module.css';

const CreateAccountPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Account');
    const [showError, setShowError] = useState(false); // State to track error visibility
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const navigate = useNavigate();

    // State to manage form fields
    const [formData, setFormData] = useState({
        organization: '',
        dateApplicationReceived: '',
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        county: '',
        state: '',
        country: 'United States', // Non-editable
        primaryEmail: '',
        officePhone: '',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle Update button click
    const handleUpdate = () => {
        const { organization, dateApplicationReceived, name, addressLine1, city, county, state } = formData;
        if (!organization || !dateApplicationReceived || !name || !addressLine1 || !city || !county || !state) {
            setShowError(true); // Show error message
            return;
        }
        setShowError(false); // Hide error message if validation passes
        setSuccessMessage('Account created successfully! Redirecting to desktop...');
        setTimeout(() => navigate('/desktop'), 3000); // Redirect to desktop after 3 seconds
    };

    // Handle Cancel button click
    const handleCancel = () => {
        navigate('/desktop'); // Navigate back to the Desktop page
    };

    // List of US states for the dropdown
    const usStates = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
    ];

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'Desktop') {
            navigate('/desktop'); // Navigate to the Desktop page
        } else if (tab === 'Submission') {
            navigate('/select-product'); // Navigate to the Select Product page
        }
    };

    const handleLogout = () => {
        navigate('/'); // Redirect to the Login Page
    };

    return (
        <div id="create-account-container" className={styles.createAccountContainer}>
            {/* Top Bar */}
            <div id="top-bar" className={styles.topBar}>
                <div id="app-name" className={styles.appName}>PolicyMaster</div>
                <Navbar
                    id="navbar"
                    tabs={['Desktop', 'Account', 'Submission', 'Contact', 'Search', 'Administration']}
                    activeTab={activeTopTab}
                    onTabClick={handleTopTabClick}
                    onLogout={handleLogout}
                />
            </div>

            {/* Page Content */}
            <div id="page-content" className={styles.pageContent}>
                {/* Title and Buttons */}
                <div id="title-container" className={styles.titleContainer}>
                    <h1 id="page-title" className={styles.pageTitle}>Create Account</h1>
                    <div id="button-container" className={styles.buttonContainer}>
                        <button id="update-button" onClick={handleUpdate} className={styles.updateButton}>
                            Update
                        </button>
                        <button id="cancel-button" onClick={handleCancel} className={styles.cancelButton}>
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Error Section */}
                {showError && (
                    <div id="error-section" className={styles.errorSection}>
                        Errors on current page
                        <div id="error-message-container" className={styles.errorMessageContainer}>
                            <div id="error-icon" className={styles.errorIcon}>!</div>
                            <div id="error-message" className={styles.errorMessage}>
                                Please fill in all mandatory fields.
                            </div>
                        </div>
                    </div>
                )}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

                {/* Form */}
                <form id="create-account-form" className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="organization">Organization <span className={styles.mandatory}>*</span></label>
                        <input
                            id="organization"
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Enter organization name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="dateApplicationReceived">Date Application Received <span className={styles.mandatory}>*</span></label>
                        <input
                            id="dateApplicationReceived"
                            type="date"
                            name="dateApplicationReceived"
                            value={formData.dateApplicationReceived}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name <span className={styles.mandatory}>*</span></label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="addressLine1">Address Line 1 <span className={styles.mandatory}>*</span></label>
                        <input
                            id="addressLine1"
                            type="text"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            placeholder="Enter address line 1"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                            id="addressLine2"
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                            placeholder="Enter address line 2"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">City <span className={styles.mandatory}>*</span></label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="county">County <span className={styles.mandatory}>*</span></label>
                        <input
                            id="county"
                            type="text"
                            name="county"
                            value={formData.county}
                            onChange={handleChange}
                            placeholder="Enter county"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="state">State <span className={styles.mandatory}>*</span></label>
                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="">Select a state</option>
                            {usStates.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="primaryEmail">Primary Email</label>
                        <input
                            id="primaryEmail"
                            type="email"
                            name="primaryEmail"
                            value={formData.primaryEmail}
                            onChange={handleChange}
                            placeholder="Enter primary email"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="officePhone">Office Phone</label>
                        <input
                            id="officePhone"
                            type="tel"
                            name="officePhone"
                            value={formData.officePhone}
                            onChange={handleChange}
                            placeholder="Enter office phone number"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            value={formData.country}
                            readOnly // Non-editable
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccountPage;


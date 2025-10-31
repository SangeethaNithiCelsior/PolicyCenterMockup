import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NewSubmissionsPage.module.css';

const NewSubmissionsPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Submission');
    const navigate = useNavigate();

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'Desktop') {
            navigate('/desktop'); // Navigate to the Desktop page
        } else if (tab === 'Account') {
            navigate('/create-account'); // Navigate to the Create Account page
        }
    };

    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/'); // Redirect to the Login Page
    };

    return (
        <div id="new-submissions-container" className={styles.newSubmissionsContainer}>
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
                <h1 id="page-title" className={styles.pageTitle}>New Submissions</h1>
                <p id="page-description">Please select a product to proceed with your submission.</p>

                <div id="table-container" className={styles.tableContainer}>
                    <table id="product-table" className={styles.table}>
                        <thead>
                            <tr>
                                <th id="column-select"></th>
                                <th id="column-product-name">Product Name</th>
                                <th id="column-product-description">Product Description</th>
                                <th id="column-status">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><button id="select-commercial-property" className={styles.selectButton}>Select</button></td>
                                <td>Commercial Property</td>
                                <td>Commercial Property</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button id="select-general-liability" className={styles.selectButton}>Select</button></td>
                                <td>General Liability</td>
                                <td>General Liability</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button id="select-cyber" className={styles.selectButton}>Select</button></td>
                                <td>Cyber</td>
                                <td>Cyber</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button id="select-inland-marine" className={styles.selectButton}>Select</button></td>
                                <td>Inland Marine</td>
                                <td>Inland Marine</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button id="select-workers-compensation" className={styles.selectButton}>Select</button></td>
                                <td>Workers' Compensation</td>
                                <td>Workers' Compensation</td>
                                <td>Available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewSubmissionsPage;

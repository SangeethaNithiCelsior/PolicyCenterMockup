import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './DesktopPage.module.css';

const DesktopPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Desktop');
    const [activeSideItem, setActiveSideItem] = useState('Summary');
    const navigate = useNavigate();

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'New Account') {
            navigate('/create-account'); // Navigate to the Create Account page
        } else if (tab === 'New Submission') {
            navigate('/new-submission'); // Navigate to the New Submissions
        } else if (tab === 'Contact') {
            alert('Contact tab clicked!'); // Placeholder for Contact functionality
        } else if (tab === 'Search') {
            alert('Search tab clicked!'); // Placeholder for Search functionality
        } else if (tab === 'Administration') {
            alert('Administration tab clicked!'); // Placeholder for Administration functionality
        }
    };

    const handleSideItemClick = (item) => setActiveSideItem(item);

    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/'); // Redirect to the Login Page
    };

    return (
        <div id="desktop-container" className={styles.desktopContainer}>
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

            {/* Content Layout */}
            <div id="content-layout" className={styles.contentLayout}>
                {/* Sidebar */}
                <Sidebar
                    id="sidebar"
                    items={[
                        'Actions',
                        'Summary',
                        'My Activities',
                        'My Accounts',
                        'My Submissions',
                        'My Renewals',
                        'Audits',
                        'Other Policy Transaction',
                        'My Queues',
                    ]}
                    activeItem={activeSideItem}
                    onItemClick={handleSideItemClick}
                />

                {/* Main Content */}
                <div id="main-content" className={styles.mainContent}>
                    <h1 id="summary-title">My Summary</h1>
                    <p id="summary-description">Welcome to your Desktop page! Here, you can view your summary.</p>
                </div>
            </div>
        </div>
    );
};

export default DesktopPage;

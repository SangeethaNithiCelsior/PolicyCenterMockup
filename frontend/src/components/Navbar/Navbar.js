import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = ({ id, tabs, activeTab, onTabClick, onLogout }) => {
    const [isAccountDropdownVisible, setIsAccountDropdownVisible] = useState(false);
    const [isSubmissionDropdownVisible, setIsSubmissionDropdownVisible] = useState(false);

    const handleAccountMouseEnter = () => {
        setIsAccountDropdownVisible(true);
    };

    const handleAccountMouseLeave = () => {
        setIsAccountDropdownVisible(false);
    };

    const handleSubmissionMouseEnter = () => {
        setIsSubmissionDropdownVisible(true);
    };

    const handleSubmissionMouseLeave = () => {
        setIsSubmissionDropdownVisible(false);
    };

    return (
        <div id={id} className={styles.navbar}>
            <div id="nav-tabs" className={styles.navTabs}>
                {tabs.map((tab, index) => {
                    if (tab === 'Account') {
                        return (
                            <div
                                key={index}
                                id="account-tab"
                                className={styles.dropdown}
                                onMouseEnter={handleAccountMouseEnter}
                                onMouseLeave={handleAccountMouseLeave}
                            >
                                <button
                                    id="account-button"
                                    className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => onTabClick(tab)}
                                >
                                    {tab} ▼ {/* Down arrow icon */}
                                </button>
                                {isAccountDropdownVisible && (
                                    <div id="account-dropdown" className={styles.dropdownContent}>
                                        <button
                                            id="new-account-button"
                                            className={styles.dropdownItem}
                                            onClick={() => onTabClick('New Account')}
                                        >
                                            New Account
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    } else if (tab === 'Submission') {
                        return (
                            <div
                                key={index}
                                id="submission-tab"
                                className={styles.dropdown}
                                onMouseEnter={handleSubmissionMouseEnter}
                                onMouseLeave={handleSubmissionMouseLeave}
                            >
                                <button
                                    id="submission-button"
                                    className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => onTabClick(tab)}
                                >
                                    {tab} ▼ {/* Down arrow icon */}
                                </button>
                                {isSubmissionDropdownVisible && (
                                    <div id="submission-dropdown" className={styles.dropdownContent}>
                                        <button
                                            id="new-submission-button"
                                            className={styles.dropdownItem}
                                            onClick={() => onTabClick('New Submission')}
                                        >
                                            New Submission
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        return (
                            <button
                                key={index}
                                id={`${tab.toLowerCase()}-button`}
                                className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                onClick={() => onTabClick(tab)}
                            >
                                {tab}
                            </button>
                        );
                    }
                })}
            </div>
            {/* Logout Button */}
            <button id="logout-button" className={styles.logoutButton} onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

Navbar.propTypes = {
    id: PropTypes.string, // Add this line
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default Navbar;
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock functions that can be reused across tests
export const createMockNavigate = () => jest.fn();

// Helper to render components with router
export const renderWithRouter = (component, options = {}) => {
  const { initialEntries = ['/'], ...renderOptions } = options;
  
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>,
    renderOptions
  );
};

// Common test data
export const testCredentials = {
  valid: {
    username: 'testuser',
    password: 'testpass'
  },
  invalid: {
    username: 'wronguser',
    password: 'wrongpass'
  }
};

// Mock config for consistent testing
export const mockConfig = {
  credentials: testCredentials.valid,
  apiBaseUrl: 'http://localhost:3000/api'
};

// Common navigation tabs for navbar testing
export const defaultNavTabs = ['Desktop', 'Account', 'Submission', 'Contact', 'Search', 'Administration'];

// Common sidebar items for sidebar testing
export const defaultSidebarItems = [
  'Actions',
  'Summary',
  'My Activities',
  'My Accounts',
  'My Submissions',
  'My Renewals',
  'Audits',
  'Other Policy Transaction',
  'My Queues'
];

// Helper to create mock props for components
export const createMockProps = (overrides = {}) => ({
  onTabClick: jest.fn(),
  onLogout: jest.fn(),
  onItemClick: jest.fn(),
  onClick: jest.fn(),
  ...overrides
});

// Helper to wait for async operations
export const waitForAsync = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to trigger hover events
export const triggerHover = {
  enter: (element) => {
    element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
  },
  leave: (element) => {
    element.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
  }
};

// Error message constants
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Your username or password may be incorrect. Please try again'
};

// Mock alert and console methods
export const mockAlert = () => {
  global.alert = jest.fn();
  return global.alert;
};

export const mockConsole = () => {
  const originalConsole = { ...console };
  console.error = jest.fn();
  console.warn = jest.fn();
  console.log = jest.fn();
  
  return {
    restore: () => {
      Object.assign(console, originalConsole);
    }
  };
};
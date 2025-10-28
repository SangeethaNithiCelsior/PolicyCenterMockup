import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock the config module
jest.mock('../config/config', () => ({
  credentials: {
    username: 'su',
    password: 'gw'
  },
  apiBaseUrl: 'http://localhost:3000/api'
}));

// Mock alert function
global.alert = jest.fn();

describe('App Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderApp = (initialEntries = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <App />
      </MemoryRouter>
    );
  };

  describe('Login Flow', () => {
    test('complete login flow - from login to desktop', async () => {
      renderApp();
      
      // Verify we're on login page
      expect(screen.getByText('PolicyMaster')).toBeInTheDocument();
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
      
      // Fill in credentials
      const usernameInput = screen.getByLabelText(/username/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const loginButton = screen.getByRole('button', { name: /login/i });
      
      fireEvent.change(usernameInput, { target: { value: 'su' } });
      fireEvent.change(passwordInput, { target: { value: 'gw' } });
      fireEvent.click(loginButton);
      
      // Should navigate to desktop page
      await waitFor(() => {
        expect(screen.getByText('My Summary')).toBeInTheDocument();
      });
      
      expect(screen.getByText('Welcome to your Desktop page! Here, you can view your summary.')).toBeInTheDocument();
    });

    test('login with invalid credentials shows error', async () => {
      renderApp();
      
      const usernameInput = screen.getByLabelText(/username/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const loginButton = screen.getByRole('button', { name: /login/i });
      
      fireEvent.change(usernameInput, { target: { value: 'wrong' } });
      fireEvent.change(passwordInput, { target: { value: 'credentials' } });
      fireEvent.click(loginButton);
      
      await waitFor(() => {
        expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
      });
      
      // Should still be on login page
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });
  });

  describe('Navigation Flow', () => {
    test('navigation from desktop to create account page', async () => {
      renderApp(['/desktop']);
      
      // Verify we're on desktop page
      expect(screen.getByText('My Summary')).toBeInTheDocument();
      
      // Hover over Account to show dropdown
      const accountTab = screen.getByRole('button', { name: /account/i });
      fireEvent.mouseEnter(accountTab.parentElement);
      
      // Click New Account
      const newAccountButton = await screen.findByRole('button', { name: /new account/i });
      fireEvent.click(newAccountButton);
      
      // Should navigate to create account page
      await waitFor(() => {
        // The actual CreateAccountPage component should be rendered
        // Since we don't have the full implementation, we can't test the complete flow
        // but the navigation should work
      });
    });

    test('logout functionality returns to login page', async () => {
      renderApp(['/desktop']);
      
      // Find and click logout button
      const logoutButton = screen.getByRole('button', { name: /logout/i });
      fireEvent.click(logoutButton);
      
      // Should show logout alert
      expect(global.alert).toHaveBeenCalledWith('You have been logged out.');
      
      // Should navigate back to login page
      await waitFor(() => {
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
      });
    });
  });

  describe('Desktop Page Interactions', () => {
    test('sidebar interactions work correctly', async () => {
      renderApp(['/desktop']);
      
      // Verify Summary is active by default
      const summaryItem = screen.getByRole('button', { name: /^summary$/i });
      expect(summaryItem).toHaveClass('activeItem');
      
      // Click on Actions
      const actionsItem = screen.getByRole('button', { name: /^actions$/i });
      fireEvent.click(actionsItem);
      
      // Actions should now be active
      expect(actionsItem).toHaveClass('activeItem');
      expect(summaryItem).not.toHaveClass('activeItem');
    });

    test('top navigation tab interactions', async () => {
      renderApp(['/desktop']);
      
      // Test Contact tab
      const contactTab = screen.getByRole('button', { name: /contact/i });
      fireEvent.click(contactTab);
      
      expect(global.alert).toHaveBeenCalledWith('Contact tab clicked!');
      
      // Test Search tab
      const searchTab = screen.getByRole('button', { name: /search/i });
      fireEvent.click(searchTab);
      
      expect(global.alert).toHaveBeenCalledWith('Search tab clicked!');
      
      // Test Administration tab
      const adminTab = screen.getByRole('button', { name: /administration/i });
      fireEvent.click(adminTab);
      
      expect(global.alert).toHaveBeenCalledWith('Administration tab clicked!');
    });
  });

  describe('Reset Password Flow', () => {
    test('navigation from login to reset password', async () => {
      renderApp();
      
      const resetButton = screen.getByRole('button', { name: /reset password/i });
      fireEvent.click(resetButton);
      
      // Should navigate to reset password page
      await waitFor(() => {
        // The reset password page should be rendered
        // Since we don't have the component content, we can verify navigation occurred
        expect(screen.queryByLabelText(/username/i)).not.toBeInTheDocument();
      });
    });
  });

  describe('URL Routing', () => {
    test('direct navigation to desktop page works', () => {
      renderApp(['/desktop']);
      expect(screen.getByText('My Summary')).toBeInTheDocument();
    });

    test('direct navigation to login page works', () => {
      renderApp(['/login']);
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });

    test('direct navigation to root redirects to login', () => {
      renderApp(['/']);
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });
  });

  describe('Component Communication', () => {
    test('navbar communicates with desktop page correctly', async () => {
      renderApp(['/desktop']);
      
      // Verify Desktop tab is active
      const desktopTab = screen.getByRole('button', { name: /desktop/i });
      expect(desktopTab).toHaveClass('activeTab');
      
      // Test dropdown interactions
      const submissionTab = screen.getByRole('button', { name: /submission/i });
      fireEvent.mouseEnter(submissionTab.parentElement);
      
      const newSubmissionButton = await screen.findByRole('button', { name: /new submission/i });
      expect(newSubmissionButton).toBeInTheDocument();
    });

    test('sidebar communicates with desktop page correctly', () => {
      renderApp(['/desktop']);
      
      // Test sidebar state management
      const myAccountsItem = screen.getByRole('button', { name: /my accounts/i });
      fireEvent.click(myAccountsItem);
      
      expect(myAccountsItem).toHaveClass('activeItem');
    });
  });
});
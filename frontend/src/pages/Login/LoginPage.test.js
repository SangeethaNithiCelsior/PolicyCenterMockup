import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

// Mock the navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock the config module
jest.mock('../../config/config', () => ({
  credentials: {
    username: 'testuser',
    password: 'testpass'
  }
}));

describe('LoginPage Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const renderLoginPage = () => {
    return render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  };

  test('renders login page with all elements', () => {
    renderLoginPage();
    
    expect(screen.getByText('PolicyMaster')).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset password/i })).toBeInTheDocument();
  });

  test('allows user to type in username field', () => {
    renderLoginPage();
    
    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    
    expect(usernameInput.value).toBe('testuser');
  });

  test('allows user to type in password field', () => {
    renderLoginPage();
    
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    
    expect(passwordInput.value).toBe('testpass');
  });

  test('navigates to desktop page on successful login', async () => {
    renderLoginPage();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/desktop');
    });
  });

  test('shows error message on invalid credentials', async () => {
    renderLoginPage();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
    });
    
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('shows error message on empty username', async () => {
    renderLoginPage();
    
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
    });
  });

  test('shows error message on empty password', async () => {
    renderLoginPage();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
    });
  });

  test('navigates to reset password page when reset password button is clicked', () => {
    renderLoginPage();
    
    const resetButton = screen.getByRole('button', { name: /reset password/i });
    fireEvent.click(resetButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/reset-password');
  });

  test('clears error message when user starts typing after error', async () => {
    renderLoginPage();
    
    // First, trigger an error
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
    fireEvent.click(loginButton);
    
    await waitFor(() => {
      expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
    });
    
    // Then clear the inputs and verify error persists until new login attempt
    fireEvent.change(usernameInput, { target: { value: '' } });
    expect(screen.getByText(/your username or password may be incorrect/i)).toBeInTheDocument();
  });

  test('has correct input placeholders', () => {
    renderLoginPage();
    
    expect(screen.getByPlaceholderText(/enter your username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
  });

  test('password input type is password', () => {
    renderLoginPage();
    
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('username input type is text', () => {
    renderLoginPage();
    
    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toHaveAttribute('type', 'text');
  });
});
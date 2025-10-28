import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

// Mock all the page components
jest.mock('../pages/Login/LoginPage', () => {
  return function MockLoginPage() {
    return <div data-testid="login-page">Login Page</div>;
  };
});

jest.mock('../pages/Desktop/DesktopPage', () => {
  return function MockDesktopPage() {
    return <div data-testid="desktop-page">Desktop Page</div>;
  };
});

jest.mock('../pages/CreateAccount/CreateAccountPage', () => {
  return function MockCreateAccountPage() {
    return <div data-testid="create-account-page">Create Account Page</div>;
  };
});

jest.mock('../pages/NewSubmissions/NewSubmissions', () => {
  return function MockNewSubmissionsPage() {
    return <div data-testid="new-submissions-page">New Submissions Page</div>;
  };
});

jest.mock('../pages/ResetPassword/ResetPassword', () => {
  return function MockResetPasswordPage() {
    return <div data-testid="reset-password-page">Reset Password Page</div>;
  };
});

describe('AppRoutes Component', () => {
  const renderWithRouter = (initialEntries = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <AppRoutes />
      </MemoryRouter>
    );
  };

  test('renders LoginPage for root path', () => {
    renderWithRouter(['/']);
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  test('renders LoginPage for /login path', () => {
    renderWithRouter(['/login']);
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  test('renders DesktopPage for /desktop path', () => {
    renderWithRouter(['/desktop']);
    expect(screen.getByTestId('desktop-page')).toBeInTheDocument();
  });

  test('renders CreateAccountPage for /create-account path', () => {
    renderWithRouter(['/create-account']);
    expect(screen.getByTestId('create-account-page')).toBeInTheDocument();
  });

  test('renders NewSubmissionsPage for /new-submission path', () => {
    renderWithRouter(['/new-submission']);
    expect(screen.getByTestId('new-submissions-page')).toBeInTheDocument();
  });

  test('renders ResetPasswordPage for /reset-password path', () => {
    renderWithRouter(['/reset-password']);
    expect(screen.getByTestId('reset-password-page')).toBeInTheDocument();
  });

  test('does not render multiple pages simultaneously', () => {
    renderWithRouter(['/desktop']);
    
    expect(screen.getByTestId('desktop-page')).toBeInTheDocument();
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('create-account-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('new-submissions-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('reset-password-page')).not.toBeInTheDocument();
  });

  test('handles navigation between routes', () => {
    const { rerender } = renderWithRouter(['/']);
    expect(screen.getByTestId('login-page')).toBeInTheDocument();

    // Simulate navigation to desktop
    rerender(
      <MemoryRouter initialEntries={['/desktop']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByTestId('desktop-page')).toBeInTheDocument();
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
  });

  test('handles invalid routes gracefully', () => {
    renderWithRouter(['/invalid-route']);
    
    // Since there's no catch-all route, React Router will not render anything
    // We can test that none of our defined routes are rendered
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('desktop-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('create-account-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('new-submissions-page')).not.toBeInTheDocument();
    expect(screen.queryByTestId('reset-password-page')).not.toBeInTheDocument();
  });

  test('router wraps the routes correctly', () => {
    const { container } = renderWithRouter(['/']);
    
    // Check that the Router is present by looking for its typical structure
    expect(container.firstChild).toBeTruthy();
  });

  test('all route paths are case sensitive', () => {
    renderWithRouter(['/DESKTOP']);
    
    // Should not match /desktop (case sensitive)
    expect(screen.queryByTestId('desktop-page')).not.toBeInTheDocument();
  });

  test('exact path matching works correctly', () => {
    renderWithRouter(['/desktop/extra']);
    
    // Should not match /desktop since we're at /desktop/extra
    expect(screen.queryByTestId('desktop-page')).not.toBeInTheDocument();
  });
});
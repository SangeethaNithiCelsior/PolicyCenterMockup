import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const defaultProps = {
    id: 'test-navbar',
    tabs: ['Desktop', 'Account', 'Submission', 'Contact', 'Search', 'Administration'],
    activeTab: 'Desktop',
    onTabClick: jest.fn(),
    onLogout: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all tabs', () => {
    render(<Navbar {...defaultProps} />);
    
    expect(screen.getByText('Desktop')).toBeInTheDocument();
    expect(screen.getByText('Account ▼')).toBeInTheDocument();
    expect(screen.getByText('Submission ▼')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Administration')).toBeInTheDocument();
  });

  test('renders logout button', () => {
    render(<Navbar {...defaultProps} />);
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });

  test('applies active tab styling', () => {
    render(<Navbar {...defaultProps} />);
    const desktopTab = screen.getByRole('button', { name: /desktop/i });
    expect(desktopTab).toHaveClass('activeTab');
  });

  test('calls onTabClick when tab is clicked', () => {
    render(<Navbar {...defaultProps} />);
    
    const contactTab = screen.getByRole('button', { name: /contact/i });
    fireEvent.click(contactTab);
    
    expect(defaultProps.onTabClick).toHaveBeenCalledWith('Contact');
  });

  test('calls onLogout when logout button is clicked', () => {
    render(<Navbar {...defaultProps} />);
    
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);
    
    expect(defaultProps.onLogout).toHaveBeenCalledTimes(1);
  });

  test('shows Account dropdown on hover', async () => {
    render(<Navbar {...defaultProps} />);
    
    const accountTab = screen.getByRole('button', { name: /account/i });
    fireEvent.mouseEnter(accountTab.parentElement);
    
    await waitFor(() => {
      expect(screen.getByText('New Account')).toBeInTheDocument();
    });
  });

  test('hides Account dropdown on mouse leave', async () => {
    render(<Navbar {...defaultProps} />);
    
    const accountTab = screen.getByRole('button', { name: /account/i });
    const accountDropdown = accountTab.parentElement;
    
    // Show dropdown
    fireEvent.mouseEnter(accountDropdown);
    await waitFor(() => {
      expect(screen.getByText('New Account')).toBeInTheDocument();
    });
    
    // Hide dropdown
    fireEvent.mouseLeave(accountDropdown);
    await waitFor(() => {
      expect(screen.queryByText('New Account')).not.toBeInTheDocument();
    });
  });

  test('shows Submission dropdown on hover', async () => {
    render(<Navbar {...defaultProps} />);
    
    const submissionTab = screen.getByRole('button', { name: /submission/i });
    fireEvent.mouseEnter(submissionTab.parentElement);
    
    await waitFor(() => {
      expect(screen.getByText('New Submission')).toBeInTheDocument();
    });
  });

  test('hides Submission dropdown on mouse leave', async () => {
    render(<Navbar {...defaultProps} />);
    
    const submissionTab = screen.getByRole('button', { name: /submission/i });
    const submissionDropdown = submissionTab.parentElement;
    
    // Show dropdown
    fireEvent.mouseEnter(submissionDropdown);
    await waitFor(() => {
      expect(screen.getByText('New Submission')).toBeInTheDocument();
    });
    
    // Hide dropdown
    fireEvent.mouseLeave(submissionDropdown);
    await waitFor(() => {
      expect(screen.queryByText('New Submission')).not.toBeInTheDocument();
    });
  });

  test('calls onTabClick with "New Account" when dropdown item is clicked', async () => {
    render(<Navbar {...defaultProps} />);
    
    const accountTab = screen.getByRole('button', { name: /account/i });
    fireEvent.mouseEnter(accountTab.parentElement);
    
    await waitFor(() => {
      expect(screen.getByText('New Account')).toBeInTheDocument();
    });
    
    const newAccountButton = screen.getByRole('button', { name: /new account/i });
    fireEvent.click(newAccountButton);
    
    expect(defaultProps.onTabClick).toHaveBeenCalledWith('New Account');
  });

  test('calls onTabClick with "New Submission" when dropdown item is clicked', async () => {
    render(<Navbar {...defaultProps} />);
    
    const submissionTab = screen.getByRole('button', { name: /submission/i });
    fireEvent.mouseEnter(submissionTab.parentElement);
    
    await waitFor(() => {
      expect(screen.getByText('New Submission')).toBeInTheDocument();
    });
    
    const newSubmissionButton = screen.getByRole('button', { name: /new submission/i });
    fireEvent.click(newSubmissionButton);
    
    expect(defaultProps.onTabClick).toHaveBeenCalledWith('New Submission');
  });

  test('applies correct id to navbar', () => {
    render(<Navbar {...defaultProps} />);
    const navbar = screen.getByTestId('test-navbar') || document.getElementById('test-navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('handles different active tab', () => {
    const props = { ...defaultProps, activeTab: 'Contact' };
    render(<Navbar {...props} />);
    
    const contactTab = screen.getByRole('button', { name: /contact/i });
    expect(contactTab).toHaveClass('activeTab');
    
    const desktopTab = screen.getByRole('button', { name: /desktop/i });
    expect(desktopTab).not.toHaveClass('activeTab');
  });

  test('renders with different tabs array', () => {
    const customProps = {
      ...defaultProps,
      tabs: ['Home', 'Profile', 'Settings'],
    };
    
    render(<Navbar {...customProps} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.queryByText('Desktop')).not.toBeInTheDocument();
  });
});
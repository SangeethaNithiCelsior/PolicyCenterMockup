import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DesktopPage from './DesktopPage';

// Mock the navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock alert function
global.alert = jest.fn();

describe('DesktopPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderDesktopPage = () => {
    return render(
      <MemoryRouter>
        <DesktopPage />
      </MemoryRouter>
    );
  };

  test('renders desktop page with all elements', () => {
    renderDesktopPage();
    
    expect(screen.getByText('PolicyMaster')).toBeInTheDocument();
    expect(screen.getByText('My Summary')).toBeInTheDocument();
    expect(screen.getByText('Welcome to your Desktop page! Here, you can view your summary.')).toBeInTheDocument();
  });

  test('renders navbar with correct tabs', () => {
    renderDesktopPage();
    
    expect(screen.getByText('Desktop')).toBeInTheDocument();
    expect(screen.getByText('Account ▼')).toBeInTheDocument();
    expect(screen.getByText('Submission ▼')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Administration')).toBeInTheDocument();
  });

  test('renders sidebar with correct items', () => {
    renderDesktopPage();
    
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('My Activities')).toBeInTheDocument();
    expect(screen.getByText('My Accounts')).toBeInTheDocument();
    expect(screen.getByText('My Submissions')).toBeInTheDocument();
    expect(screen.getByText('My Renewals')).toBeInTheDocument();
    expect(screen.getByText('Audits')).toBeInTheDocument();
    expect(screen.getByText('Other Policy Transaction')).toBeInTheDocument();
    expect(screen.getByText('My Queues')).toBeInTheDocument();
  });

  test('Desktop tab is active by default', () => {
    renderDesktopPage();
    
    const desktopTab = screen.getByRole('button', { name: /desktop/i });
    expect(desktopTab).toHaveClass('activeTab');
  });

  test('Summary sidebar item is active by default', () => {
    renderDesktopPage();
    
    const summaryItem = screen.getByRole('button', { name: /^summary$/i });
    expect(summaryItem).toHaveClass('activeItem');
  });

  test('navigates to create account page when New Account is clicked', async () => {
    renderDesktopPage();
    
    // Hover over Account to show dropdown
    const accountTab = screen.getByRole('button', { name: /account/i });
    fireEvent.mouseEnter(accountTab.parentElement);
    
    // Wait for dropdown to appear and click New Account
    const newAccountButton = await screen.findByRole('button', { name: /new account/i });
    fireEvent.click(newAccountButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/create-account');
  });

  test('navigates to new submission page when New Submission is clicked', async () => {
    renderDesktopPage();
    
    // Hover over Submission to show dropdown
    const submissionTab = screen.getByRole('button', { name: /submission/i });
    fireEvent.mouseEnter(submissionTab.parentElement);
    
    // Wait for dropdown to appear and click New Submission
    const newSubmissionButton = await screen.findByRole('button', { name: /new submission/i });
    fireEvent.click(newSubmissionButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/new-submission');
  });

  test('shows alert when Contact tab is clicked', () => {
    renderDesktopPage();
    
    const contactTab = screen.getByRole('button', { name: /contact/i });
    fireEvent.click(contactTab);
    
    expect(global.alert).toHaveBeenCalledWith('Contact tab clicked!');
  });

  test('shows alert when Search tab is clicked', () => {
    renderDesktopPage();
    
    const searchTab = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchTab);
    
    expect(global.alert).toHaveBeenCalledWith('Search tab clicked!');
  });

  test('shows alert when Administration tab is clicked', () => {
    renderDesktopPage();
    
    const administrationTab = screen.getByRole('button', { name: /administration/i });
    fireEvent.click(administrationTab);
    
    expect(global.alert).toHaveBeenCalledWith('Administration tab clicked!');
  });

  test('handles logout functionality', () => {
    renderDesktopPage();
    
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);
    
    expect(global.alert).toHaveBeenCalledWith('You have been logged out.');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('sidebar item click changes active item', () => {
    renderDesktopPage();
    
    const actionsItem = screen.getByRole('button', { name: /^actions$/i });
    fireEvent.click(actionsItem);
    
    expect(actionsItem).toHaveClass('activeItem');
  });

  test('renders all required containers with correct ids', () => {
    renderDesktopPage();
    
    expect(document.getElementById('desktop-container')).toBeInTheDocument();
    expect(document.getElementById('top-bar')).toBeInTheDocument();
    expect(document.getElementById('app-name')).toBeInTheDocument();
    expect(document.getElementById('content-layout')).toBeInTheDocument();
    expect(document.getElementById('main-content')).toBeInTheDocument();
    expect(document.getElementById('summary-title')).toBeInTheDocument();
    expect(document.getElementById('summary-description')).toBeInTheDocument();
  });

  test('handles Desktop tab click without navigation', () => {
    renderDesktopPage();
    
    const desktopTab = screen.getByRole('button', { name: /desktop/i });
    fireEvent.click(desktopTab);
    
    // Desktop tab click should not trigger navigation
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(global.alert).not.toHaveBeenCalled();
  });

  test('handles Account tab click without dropdown action', () => {
    renderDesktopPage();
    
    const accountTab = screen.getByRole('button', { name: /account/i });
    fireEvent.click(accountTab);
    
    // Account tab click should not trigger navigation or alert
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(global.alert).not.toHaveBeenCalled();
  });

  test('handles Submission tab click without dropdown action', () => {
    renderDesktopPage();
    
    const submissionTab = screen.getByRole('button', { name: /submission/i });
    fireEvent.click(submissionTab);
    
    // Submission tab click should not trigger navigation or alert
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(global.alert).not.toHaveBeenCalled();
  });
});
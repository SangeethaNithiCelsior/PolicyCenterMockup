import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  const defaultProps = {
    items: ['Actions', 'Summary', 'My Activities', 'My Accounts', 'My Submissions'],
    activeItem: 'Summary',
    onItemClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all sidebar items', () => {
    render(<Sidebar {...defaultProps} />);
    
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('My Activities')).toBeInTheDocument();
    expect(screen.getByText('My Accounts')).toBeInTheDocument();
    expect(screen.getByText('My Submissions')).toBeInTheDocument();
  });

  test('applies active styling to the active item', () => {
    render(<Sidebar {...defaultProps} />);
    
    const summaryButton = screen.getByRole('button', { name: /summary/i });
    expect(summaryButton).toHaveClass('activeItem');
  });

  test('does not apply active styling to non-active items', () => {
    render(<Sidebar {...defaultProps} />);
    
    const actionsButton = screen.getByRole('button', { name: /actions/i });
    expect(actionsButton).not.toHaveClass('activeItem');
  });

  test('calls onItemClick when item is clicked', () => {
    render(<Sidebar {...defaultProps} />);
    
    const actionsButton = screen.getByRole('button', { name: /actions/i });
    fireEvent.click(actionsButton);
    
    expect(defaultProps.onItemClick).toHaveBeenCalledWith('Actions');
    expect(defaultProps.onItemClick).toHaveBeenCalledTimes(1);
  });

  test('calls onItemClick with correct item name for different items', () => {
    render(<Sidebar {...defaultProps} />);
    
    const myAccountsButton = screen.getByRole('button', { name: /my accounts/i });
    fireEvent.click(myAccountsButton);
    
    expect(defaultProps.onItemClick).toHaveBeenCalledWith('My Accounts');
  });

  test('generates correct ids for sidebar items', () => {
    render(<Sidebar {...defaultProps} />);
    
    // Check that buttons have the expected IDs
    expect(document.getElementById('sidebar-item-actions')).toBeInTheDocument();
    expect(document.getElementById('sidebar-item-summary')).toBeInTheDocument();
    expect(document.getElementById('sidebar-item-my-activities')).toBeInTheDocument();
    expect(document.getElementById('sidebar-item-my-accounts')).toBeInTheDocument();
    expect(document.getElementById('sidebar-item-my-submissions')).toBeInTheDocument();
  });

  test('handles items with spaces in names correctly', () => {
    const props = {
      ...defaultProps,
      items: ['My Activities', 'Other Policy Transaction'],
      activeItem: 'My Activities',
    };
    
    render(<Sidebar {...props} />);
    
    expect(document.getElementById('sidebar-item-my-activities')).toBeInTheDocument();
    expect(document.getElementById('sidebar-item-other-policy-transaction')).toBeInTheDocument();
  });

  test('changes active item when different item is set as active', () => {
    const props = {
      ...defaultProps,
      activeItem: 'Actions',
    };
    
    render(<Sidebar {...props} />);
    
    const actionsButton = screen.getByRole('button', { name: /actions/i });
    const summaryButton = screen.getByRole('button', { name: /summary/i });
    
    expect(actionsButton).toHaveClass('activeItem');
    expect(summaryButton).not.toHaveClass('activeItem');
  });

  test('renders with empty items array', () => {
    const props = {
      ...defaultProps,
      items: [],
      activeItem: '',
    };
    
    render(<Sidebar {...props} />);
    
    const sidebar = document.getElementById('sidebar-container');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar.children).toHaveLength(0);
  });

  test('renders with single item', () => {
    const props = {
      ...defaultProps,
      items: ['Single Item'],
      activeItem: 'Single Item',
    };
    
    render(<Sidebar {...props} />);
    
    expect(screen.getByText('Single Item')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /single item/i })).toHaveClass('activeItem');
  });

  test('handles multiple clicks on same item', () => {
    render(<Sidebar {...defaultProps} />);
    
    const summaryButton = screen.getByRole('button', { name: /summary/i });
    fireEvent.click(summaryButton);
    fireEvent.click(summaryButton);
    fireEvent.click(summaryButton);
    
    expect(defaultProps.onItemClick).toHaveBeenCalledTimes(3);
    expect(defaultProps.onItemClick).toHaveBeenCalledWith('Summary');
  });

  test('renders sidebar container with correct id', () => {
    render(<Sidebar {...defaultProps} />);
    
    const sidebarContainer = document.getElementById('sidebar-container');
    expect(sidebarContainer).toBeInTheDocument();
  });
});
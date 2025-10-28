import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary variant class by default', () => {
    render(<Button label="Primary Button" />);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('button', 'primary');
  });

  test('applies secondary variant class when specified', () => {
    render(<Button label="Secondary Button" variant="secondary" />);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('button', 'secondary');
  });

  test('applies danger variant class when specified', () => {
    render(<Button label="Danger Button" variant="danger" />);
    const button = screen.getByRole('button', { name: /danger button/i });
    expect(button).toHaveClass('button', 'danger');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  test('is not disabled by default', () => {
    render(<Button label="Enabled Button" />);
    const button = screen.getByRole('button', { name: /enabled button/i });
    expect(button).not.toBeDisabled();
  });

  test('applies custom id when provided', () => {
    render(<Button label="Button with ID" id="custom-button-id" />);
    const button = screen.getByRole('button', { name: /button with id/i });
    expect(button).toHaveAttribute('id', 'custom-button-id');
  });

  test('does not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    render(<Button label="Disabled Button" onClick={mockOnClick} disabled={true} />);
    
    const button = screen.getByRole('button', { name: /disabled button/i });
    fireEvent.click(button);
    
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('has default onClick function that does not throw error', () => {
    expect(() => {
      render(<Button label="Default onClick" />);
      const button = screen.getByRole('button', { name: /default onclick/i });
      fireEvent.click(button);
    }).not.toThrow();
  });
});
# Unit Tests for PolicyCenterMockup

This document provides comprehensive information about the unit testing setup for the PolicyCenterMockup React application.

## 🚀 Quick Start

### Running Tests

```bash
# Run all tests once
npm test -- --watchAll=false

# Run tests in watch mode (recommended for development)
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests for CI environment
npm run test:ci
```

### Using the Test Runner

```bash
# Navigate to frontend directory
cd frontend

# Run specific test commands
node test-runner.js all       # Run all tests once
node test-runner.js coverage  # Run with coverage
node test-runner.js watch     # Watch mode
node test-runner.js ci        # CI mode
```

## 📁 Test Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.js
│   │   └── Button.test.js
│   ├── Navbar/
│   │   ├── Navbar.js
│   │   └── Navbar.test.js
│   └── Sidebar/
│       ├── Sidebar.js
│       └── Sidebar.test.js
├── pages/
│   ├── Login/
│   │   ├── LoginPage.js
│   │   └── LoginPage.test.js
│   └── Desktop/
│       ├── DesktopPage.js
│       └── DesktopPage.test.js
├── routes/
│   ├── AppRoutes.js
│   └── AppRoutes.test.js
├── config/
│   ├── config.js
│   └── config.test.js
├── tests/
│   └── integration.test.js
├── utils/
│   └── testUtils.js
├── App.js
├── App.test.js
└── setupTests.js
```

## 🧪 Test Coverage

### Current Test Coverage

The test suite covers the following components and functionality:

#### ✅ **Components**
- **Button Component**: Props validation, click handlers, styling variants, disabled state
- **Navbar Component**: Tab rendering, dropdown interactions, active states, navigation
- **Sidebar Component**: Item rendering, active states, click handlers, ID generation

#### ✅ **Pages**
- **LoginPage**: Form validation, authentication, error handling, navigation
- **DesktopPage**: Component integration, navigation, sidebar interactions, alerts

#### ✅ **Routing**
- **AppRoutes**: Route configuration, navigation between pages, path matching

#### ✅ **Configuration**
- **Config Module**: Credential validation, API URL configuration

#### ✅ **Integration Tests**
- **Complete User Flows**: Login → Desktop navigation
- **Component Communication**: Navbar ↔ Desktop page interaction
- **Error Handling**: Invalid login attempts

### Coverage Thresholds

```javascript
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
}
```

## 🛠 Testing Technologies

### Core Testing Stack
- **Jest**: Test framework and test runner
- **React Testing Library**: Component testing utilities
- **jsdom**: DOM environment for tests

### Key Testing Patterns

#### 1. Component Testing
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const mockOnClick = jest.fn();
  render(<Button label="Click Me" onClick={mockOnClick} />);
  
  fireEvent.click(screen.getByRole('button'));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
```

#### 2. Router Testing
```javascript
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component, { initialEntries = ['/'] } = {}) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};
```

#### 3. Mocking
```javascript
// Mock external dependencies
jest.mock('./config/config', () => ({
  credentials: { username: 'test', password: 'test' }
}));

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));
```

## 📊 Test Categories

### Unit Tests
- **Component behavior**: Props, state, events
- **Utility functions**: Pure function testing
- **Configuration**: Static configuration validation

### Integration Tests
- **Component interaction**: Parent-child communication
- **User workflows**: Complete user journeys
- **Navigation flow**: Route transitions

### Accessibility Tests
Tests include accessibility considerations:
- ARIA labels and roles
- Keyboard navigation
- Screen reader compatibility

## 🔧 Test Utilities

### Custom Test Helpers (`src/utils/testUtils.js`)

```javascript
// Render with router context
renderWithRouter(component, options)

// Mock props generator
createMockProps(overrides)

// Common test data
testCredentials, mockConfig, defaultNavTabs

// Mock functions
mockAlert(), mockConsole()
```

## 📝 Writing New Tests

### Component Test Template

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import YourComponent from './YourComponent';

describe('YourComponent', () => {
  const defaultProps = {
    // Define default props
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    render(<YourComponent {...defaultProps} />);
    // Add assertions
  });

  test('handles user interaction', () => {
    render(<YourComponent {...defaultProps} />);
    // Test user interactions
  });
});
```

### Test Naming Conventions

- **Files**: `ComponentName.test.js`
- **Describe blocks**: Component/feature name
- **Test cases**: Descriptive behavior statements

```javascript
describe('LoginPage Component', () => {
  test('displays error message on invalid credentials', () => {
    // Test implementation
  });
});
```

## 🐛 Debugging Tests

### Debug Mode
```bash
npm run test:debug
```

### Common Issues

#### 1. Router Errors
**Problem**: Components using `useNavigate` fail in tests
**Solution**: Wrap components in `MemoryRouter` or use `renderWithRouter`

#### 2. CSS Module Issues
**Problem**: CSS class assertions fail
**Solution**: Use `identity-obj-proxy` for CSS modules (already configured)

#### 3. Async Operations
**Problem**: Tests fail due to timing issues
**Solution**: Use `waitFor` and `findBy` queries

```javascript
await waitFor(() => {
  expect(screen.getByText('Loading complete')).toBeInTheDocument();
});
```

## 📈 Continuous Integration

### CI Configuration
Tests are configured to run in CI environments with:
- No watch mode (`--watchAll=false`)
- Coverage reporting
- JUnit output format for reporting

### Pre-commit Hooks (Recommended)
Add to `package.json`:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run test:ci"
    }
  }
}
```

## 🎯 Best Practices

### 1. Test Structure
- **Arrange**: Set up test data and mocks
- **Act**: Perform the action being tested
- **Assert**: Verify the expected outcome

### 2. Test Isolation
- Each test should be independent
- Use `beforeEach` to reset state
- Clean up mocks between tests

### 3. User-Centric Testing
- Test from user perspective
- Use accessible queries (`getByRole`, `getByLabelText`)
- Focus on behavior, not implementation

### 4. Coverage Goals
- Aim for meaningful coverage, not just high percentages
- Test error conditions and edge cases
- Include both happy path and error scenarios

## 🔄 Maintenance

### Regular Tasks
- Review and update tests when adding features
- Maintain test utilities and helpers
- Monitor test performance and reliability
- Update coverage thresholds as needed

### Test Review Checklist
- [ ] Tests cover main functionality
- [ ] Error cases are tested
- [ ] Accessibility considerations included
- [ ] Mocks are properly configured
- [ ] Tests are maintainable and readable

---

For questions or issues with the testing setup, please refer to the [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/) or [Jest documentation](https://jestjs.io/docs/getting-started).
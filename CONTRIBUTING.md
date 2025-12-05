# Contributing Guide

## Welcome! 👋

Thank you for your interest in contributing to react-big-calendar-analytics! This guide will help you get started with development.

## Getting Started

### 1. Fork and Clone
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/react-big-calendar-analytics.git
cd react-big-calendar-analytics
```

### 2. Create a Branch
```bash
# Create a feature branch
git checkout -b feature/amazing-feature

# Or create a bug fix branch
git checkout -b fix/bug-description
```

### 3. Install and Run
```bash
npm install
npm run dev
```

## Development Workflow

### Code Style

#### JavaScript/React
- Use ES6+ syntax
- Functional components with hooks (no class components)
- Use const/let, avoid var
- Clear, descriptive variable names
- Comments for complex logic

#### Example:
```javascript
// Good ✓
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.value, 0)
}

// Bad ✗
var calc = (i) => {
  // calculate total
  return i.reduce((s, x) => s + x.value, 0)
}
```

### CSS Conventions
- Use BEM naming: `.block__element--modifier`
- Mobile-first responsive design
- CSS variables for theming
- Group related properties

#### Example:
```css
/* Good ✓ */
.modal__header {
  padding: 1.5rem;
}

.modal__close-button {
  cursor: pointer;
}

@media (max-width: 768px) {
  .modal__header {
    padding: 1rem;
  }
}

/* Bad ✗ */
.modal .header { }
.close_btn { }
```

### File Organization

```
components/
├── MyComponent.jsx      # Main component
├── MyComponent.css      # Component styles
├── MyComponent.test.js  # Tests
└── MySubComponent.jsx   # Sub-component (if needed)
```

## Adding Features

### Example: Adding a New Component

#### 1. Create Component File
```javascript
// src/components/MyComponent.jsx
import React from 'react'
import './MyComponent.css'

function MyComponent({ prop1, prop2 }) {
  return (
    <div className="my-component">
      {/* Component JSX */}
    </div>
  )
}

export default MyComponent
```

#### 2. Add Styles
```css
/* src/components/MyComponent.css */
.my-component {
  /* Styles */
}

@media (max-width: 768px) {
  .my-component {
    /* Mobile styles */
  }
}
```

#### 3. Create Tests
```javascript
// src/components/MyComponent.test.js
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
```

#### 4. Update Parent Component
```javascript
// Import and use the component
import MyComponent from './MyComponent'

// In JSX
<MyComponent prop1="value" prop2="value" />
```

### Example: Adding Redux State

#### 1. Create Slice
```javascript
// src/store/mySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload
    },
  },
})

export const { setValue } = mySlice.actions
export default mySlice.reducer
```

#### 2. Add to Store
```javascript
// src/store/store.js
import myReducer from './mySlice'

const store = configureStore({
  reducer: {
    // ... existing reducers
    my: myReducer,
  },
})
```

#### 3. Use in Component
```javascript
// src/components/MyComponent.jsx
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../store/mySlice'

function MyComponent() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.my.value)

  const handleClick = () => {
    dispatch(setValue('new value'))
  }

  return (
    <button onClick={handleClick}>
      {value}
    </button>
  )
}
```

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Writing Tests

#### Component Tests
```javascript
import { render, screen, fireEvent } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('should render with initial state', () => {
    render(<MyComponent />)
    expect(screen.getByText(/expected text/i)).toBeInTheDocument()
  })

  it('should handle user interaction', () => {
    render(<MyComponent />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText(/updated text/i)).toBeInTheDocument()
  })
})
```

#### Utility Tests
```javascript
import { myFunction } from './utils'

describe('myFunction', () => {
  it('should return expected value', () => {
    expect(myFunction(input)).toBe(expectedOutput)
  })

  it('should handle edge cases', () => {
    expect(myFunction(null)).toBe(defaultValue)
  })
})
```

### Test Checklist
- [ ] Tests pass locally
- [ ] Code coverage is adequate
- [ ] Edge cases are covered
- [ ] Mocks are used appropriately

## Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning
- **refactor**: Code change that neither fixes nor adds feature
- **perf**: Code change that improves performance
- **test**: Adding missing tests

### Examples
```bash
git commit -m "feat(calendar): add day view support"
git commit -m "fix(modal): close modal on backdrop click"
git commit -m "docs: update README with new features"
git commit -m "test(utils): add dateUtils unit tests"
```

## Pull Request Process

### 1. Before Submitting
- [ ] Code follows style guidelines
- [ ] Tests pass (`npm test`)
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Responsive design tested

### 2. Create Pull Request
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing Done
- [ ] Unit tests
- [ ] Manual testing
- [ ] Browser testing

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
```

### 3. Code Review
- Respond to feedback promptly
- Make requested changes
- Push updates to the same branch

## Common Tasks

### Adding Mock Data
```javascript
// src/data/mockData.js
const mockData = {
  'DD-MM-YYYY': [
    { 'user_1': value },
    { 'user_2': value },
  ],
}
```

### Updating Styles
1. Find the component's CSS file
2. Add or modify CSS rules
3. Test responsive design
4. Update all breakpoints

### Fixing a Bug
1. Create a test that reproduces the bug
2. Fix the code
3. Verify test passes
4. Check for similar issues

### Adding a New View Type
1. Update CalendarComponent
2. Update Vite configuration if needed
3. Add tests
4. Update documentation

## Documentation

### Update README if:
- Adding/removing features
- Changing setup steps
- Adding new dependencies
- Changing folder structure

### Update ARCHITECTURE.md if:
- Adding new Redux slices
- Adding new components
- Changing data flow
- Adding new utilities

### Code Comments
```javascript
// Good ✓
// Convert date string from DD-MM-YYYY to Date object
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('-')
  return new Date(year, month - 1, day)
}

// Less helpful ✗
// parse date
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('-')
  return new Date(year, month - 1, day)
}
```

## Performance Tips

### General
- Use `useCallback` for event handlers
- Use `useMemo` for expensive computations
- Avoid unnecessary re-renders
- Profile with React DevTools

### Redux
- Use selectors efficiently
- Avoid deeply nested state
- Normalize data structure
- Consider memoization

### CSS
- Use CSS Grid/Flexbox
- Minimize animations
- Avoid !important
- Optimize media queries

## Debugging

### Browser DevTools
- React DevTools extension
- Redux DevTools extension
- Console for errors
- Network tab for API calls

### Common Issues

**Issue**: Component not re-rendering
```javascript
// Check if Redux state is updating
// Use React DevTools to inspect props
// Verify useSelector is correct
```

**Issue**: Styling not applying
```javascript
// Check CSS file is imported
// Verify class names match
// Check CSS specificity
// Clear browser cache
```

**Issue**: Tests failing
```bash
# Run tests with verbose output
npm test -- --verbose

# Update snapshots if needed
npm test -- --updateSnapshot
```

## Getting Help

- **Documentation**: Check README.md and ARCHITECTURE.md
- **Examples**: Look at existing components
- **Issues**: Check existing issues
- **Discussion**: Open a new issue to discuss ideas

## Code Review Checklist for Reviewers

- [ ] Code follows style guidelines
- [ ] Tests are included and passing
- [ ] No unnecessary dependencies added
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Responsive design is working
- [ ] Performance is acceptable
- [ ] No breaking changes

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Given credit for features

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion
- Ask in comments on your PR

---

**Happy Contributing!** 🚀

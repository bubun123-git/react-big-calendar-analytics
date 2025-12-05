# Architecture Documentation

## System Overview

This React application uses a modular, component-based architecture with Redux Toolkit for state management. The system is designed to be maintainable, testable, and scalable.

```
┌─────────────────────────────────────────────────────────┐
│                    React Application                    │
│                      (App.jsx)                          │
└────────────────┬────────────────────────────────────────┘
                 │
         ┌───────▼────────┐
         │   Redux Store   │
         └─────┬──┬─────┬──┘
               │  │     │
         ┌─────▼──▼─┐  ┌▼──────────┐
         │  Redux   │  │   Redux   │
         │  Slices  │  │  Actions  │
         └─────┬────┘  └───────────┘
               │
       ┌───────▼──────────┐
       │   React Components │
       │  ┌──────────────┐ │
       │  │   Calendar   │ │
       │  ├──────────────┤ │
       │  │    Modal     │ │
       │  ├──────────────┤ │
       │  │  DataGraph   │ │
       │  └──────────────┘ │
       └───────────────────┘
```

## Directory Structure

```
react-big-calendar-analytics/
│
├── src/
│   ├── components/                    # React Components
│   │   ├── CalendarComponent.jsx      # Main calendar with React Big Calendar
│   │   ├── CalendarComponent.test.js  # Calendar tests
│   │   ├── CalendarContainer.jsx      # Wrapper component
│   │   ├── EventModal.jsx             # Modal for displaying date data
│   │   ├── EventModal.test.js         # Modal tests
│   │   ├── DataGraph.jsx              # Recharts bar graph
│   │   ├── DataGraph.test.js          # Graph tests
│   │   ├── Calendar.css               # Calendar styling
│   │   ├── Modal.css                  # Modal styling
│   │   ├── DataGraph.css              # Graph styling
│   │   └── CalendarContainer.css      # Container styling
│   │
│   ├── store/                         # Redux State Management
│   │   ├── store.js                   # Redux store configuration
│   │   ├── calendarDataSlice.js       # Calendar data slice
│   │   ├── modalSlice.js              # Modal state slice
│   │   └── selectedDateSlice.js       # Selected date slice
│   │
│   ├── data/                          # Data Files
│   │   └── mockData.js                # Mock user activity data
│   │
│   ├── utils/                         # Utility Functions
│   │   ├── dateUtils.js               # Date formatting and parsing
│   │   └── dateUtils.test.js          # Date utility tests
│   │
│   ├── App.jsx                        # Main application component
│   ├── App.css                        # Application styles
│   ├── main.jsx                       # React DOM entry point
│   ├── index.css                      # Global styles
│   └── setupTests.js                  # Jest test configuration
│
├── index.html                         # HTML entry point
├── vite.config.js                     # Vite build configuration
├── jest.config.js                     # Jest test configuration
├── .babelrc                           # Babel transpilation config
├── .gitignore                         # Git ignore rules
├── package.json                       # Project dependencies
├── README.md                          # Detailed documentation
├── QUICKSTART.md                      # Quick start guide
└── ARCHITECTURE.md                    # This file
```

## Data Flow

### 1. Initial Load
```
App Mounts
    ↓
Redux Store Initializes with mockData
    ↓
CalendarContainer Renders
    ↓
CalendarComponent Receives Data from Redux
    ↓
React Big Calendar Renders with Events
```

### 2. User Interaction (Click Date)
```
User Clicks Date
    ↓
CalendarComponent.handleSelectSlot() triggered
    ↓
Check if Date has Data (dateHasData utility)
    ↓
├─ Has Data:
│  ├─ Get Data (getDateData utility)
│  ├─ Convert to Chart Format (convertToChartData)
│  └─ Dispatch openModal({ hasData: true, data })
│
└─ No Data:
   └─ Dispatch openModal({ hasData: false, data: null })
    ↓
Redux Updates modal State
    ↓
EventModal Component Re-renders
    ↓
├─ hasData === true:  → Show DataGraph
└─ hasData === false: → Show No Data Message
```

### 3. Modal Close
```
User Clicks Close Button / Backdrop
    ↓
EventModal.handleClose() triggered
    ↓
Dispatch closeModal() action
    ↓
Redux Updates modal state (isOpen = false)
    ↓
EventModal Component Unmounts
    ↓
User Returns to Calendar View
```

## Redux Store Architecture

### Store Structure
```javascript
store = {
  calendarData: {
    data: { /* dates with user activity */ },
    loading: false,
    error: null
  },
  modal: {
    isOpen: false,
    hasData: false,
    selectedDateData: null
  },
  selectedDate: {
    selectedDate: Date object or null
  }
}
```

### Slices Overview

#### 1. **calendarDataSlice**
Manages all calendar data and related states.

**Initial State:**
```javascript
{
  data: mockData,      // Dictionary of dates and user activity
  loading: false,      // Loading state for async operations
  error: null          // Error messages
}
```

**Actions:**
- `loadCalendarData(data)` - Replace calendar data
- `setDataLoading(boolean)` - Set loading state
- `setDataError(error)` - Set error state

**Use Cases:**
- Loading initial mock data
- Fetching from API
- Error handling during data operations

#### 2. **modalSlice**
Manages modal visibility and content state.

**Initial State:**
```javascript
{
  isOpen: false,           // Whether modal is visible
  hasData: false,          // Whether selected date has data
  selectedDateData: null   // Chart data for selected date
}
```

**Actions:**
- `openModal({ hasData, selectedDateData })` - Open modal with data
- `closeModal()` - Close modal and clear state

**Use Cases:**
- Opening/closing modal on date click
- Storing date data for graph rendering
- Determining which view to show (graph or no-data)

#### 3. **selectedDateSlice**
Manages the currently selected date.

**Initial State:**
```javascript
{
  selectedDate: null  // Currently selected date (Date object)
}
```

**Actions:**
- `setSelectedDate(date)` - Set selected date
- `clearSelectedDate()` - Clear selected date

**Use Cases:**
- Highlighting selected date
- Displaying selected date in modal header
- Maintaining selection across navigation

## Component Architecture

### Component Hierarchy
```
App
└── CalendarContainer
    └── CalendarComponent
        ├── React Big Calendar
        └── EventModal (conditionally)
            └── DataGraph
```

### Component Responsibilities

#### **App.jsx**
- Root component
- Wraps application with Redux Provider
- Renders header and main layout
- Global styling and layout management

#### **CalendarContainer.jsx**
- Simple wrapper component
- Provides consistent container styling
- Passes props to CalendarComponent

#### **CalendarComponent.jsx**
- Main calendar logic
- Integrates React Big Calendar
- Handles date selection logic
- Manages view switching (month/week/day)
- Dispatches Redux actions on user interaction
- Styled event highlighting

**Key Props Passed to Calendar:**
- `events` - Array of events with data
- `view` - Current calendar view (month/week/day)
- `onSelectSlot` - Handles clicking empty slots
- `onSelectEvent` - Handles clicking events
- `eventPropGetter` - Custom event styling

#### **EventModal.jsx**
- Displays selected date information
- Conditionally renders DataGraph or no-data message
- Handles modal open/close
- Receives Redux state (modal, selectedDate)
- Backdrop click handling

#### **DataGraph.jsx**
- Renders Recharts BarChart
- Receives data array and formats it
- Handles empty/null data gracefully
- Responsive chart container

## State Management Flow

### 1. Calendar Data Loading
```javascript
// In store.js
const store = configureStore({
  reducer: {
    calendarData: calendarDataReducer,
    modal: modalReducer,
    selectedDate: selectedDateReducer,
  },
})

// CalendarComponent useSelector
const { data } = useSelector(state => state.calendarData)
```

### 2. Date Selection Flow
```javascript
// In CalendarComponent
const handleSelectSlot = (slotInfo) => {
  // 1. Get the date
  const selectedDate = slotInfo.start
  
  // 2. Check if date has data
  if (dateHasData(selectedDate)) {
    // 3. Get and convert data
    const chartData = convertToChartData(getDateData(selectedDate))
    // 4. Dispatch action
    dispatch(openModal({ hasData: true, selectedDateData: chartData }))
  } else {
    dispatch(openModal({ hasData: false, selectedDateData: null }))
  }
}
```

### 3. Modal State Update
```javascript
// modalSlice reducer
openModal(state, action) {
  state.isOpen = true                                          // Open modal
  state.hasData = action.payload.hasData                       // Type of content
  state.selectedDateData = action.payload.selectedDateData     // Graph data
}
```

## Utility Functions

### **dateUtils.js**

#### `formatDate(date: Date): string`
- Converts Date object to "DD-MM-YYYY" string
- Used throughout the app for date display and lookup
- Handles zero-padding for single digits

#### `parseDate(dateString: string): Date`
- Converts "DD-MM-YYYY" string to Date object
- Returns null for invalid input
- Used when reading from mock data

#### `dateHasData(date: Date): boolean`
- Checks if a date has corresponding data in mockData
- Called before opening modal
- Determines which modal view to show

#### `getDateData(date: Date): Array | null`
- Returns data array for a given date
- Returns null if no data found
- Data format: [{ user_1: 10 }, { user_2: 15 }, ...]

#### `convertToChartData(dateData: Array): Array`
- Transforms mock data format to Recharts format
- Maps { user_x: value } to { name: user_x, value: value }
- Returns empty array for null/invalid input

#### `getAllDatesWithData(): Array`
- Returns array of all dates that have data
- Used for calendar event generation
- Returns Date objects

## Styling Architecture

### Global Styles
- `index.css` - Reset, fonts, base styles

### Component Styles
- `App.css` - Layout, header, main container
- `Calendar.css` - Calendar and toolbar styling
- `Modal.css` - Modal, backdrop, animations
- `DataGraph.css` - Graph container styling
- `CalendarContainer.css` - Wrapper styling

### CSS Features
- CSS Grid and Flexbox for layout
- CSS Variables for consistent theming
- CSS Animations for smooth interactions
- Media queries for responsive design
- Global namespace management with :global()

### Responsive Design Breakpoints
```css
Desktop:  1920px+
Tablet:   768px - 1919px
Mobile:   Below 768px
```

## Testing Architecture

### Test Structure
```
src/
├── utils/
│   └── dateUtils.test.js      # Unit tests for utilities
├── components/
│   ├── CalendarComponent.test.js
│   ├── EventModal.test.js
│   └── DataGraph.test.js
└── setupTests.js               # Jest configuration
```

### Testing Strategy

#### **Unit Tests** (Utilities)
- Test date formatting and parsing
- Test data existence checking
- Test data conversion functions

#### **Component Tests**
- Test rendering
- Test user interactions
- Test Redux integration
- Test conditional rendering

#### **Integration Tests** (Future)
- Test complete user flows
- Test Redux state updates
- Test event propagation

### Testing Tools
- **Jest** - Test framework
- **React Testing Library** - Component testing
- **Mocking** - Mock React Big Calendar in tests

## Performance Considerations

### 1. Component Optimization
- React.memo for expensive components
- useCallback for event handlers
- useMemo for computed values

### 2. Redux Optimization
- Slice-based state organization
- Normalized state structure
- Efficient selectors

### 3. Calendar Optimization
- Events array only updated when data changes
- Efficient date lookups using dictionary
- Lazy rendering of events

### 4. Chart Optimization
- ResponsiveContainer for responsive rendering
- Data conversion only on selected date change
- Efficient chart re-renders

## Error Handling

### Strategies
1. **Graceful Degradation** - Show appropriate UI for missing data
2. **Validation** - Check data structure before use
3. **Try-Catch** - Wrapper functions for date parsing
4. **Default Values** - Fallback for edge cases

### Examples
```javascript
// Date parsing with fallback
const parseDate = (dateString) => {
  if (!dateString) return null
  // ... parsing logic
}

// Data checking before rendering
const getDateData = (date) => {
  const formattedDate = formatDate(date)
  return mockData[formattedDate] || null
}
```

## Future Extensibility

### Easy to Add:
- **New Redux Slices** - For additional state
- **New Components** - Following existing patterns
- **API Integration** - Replace mockData with API calls
- **Features** - Export, filtering, search

### Architecture Supports:
- State persistence (localStorage)
- Redux middleware (logging, analytics)
- Custom hooks for shared logic
- Multi-user data
- Advanced filtering and sorting

## Deployment Considerations

### Build Process
- Vite builds to `dist/` folder
- Optimized production bundle
- Code splitting for performance

### Hosting Options
- Static hosting (Vercel, Netlify, GitHub Pages)
- CDN deployment
- Server-side rendering (with modifications)

### Environment Variables
- `.env` files for configuration
- Vite-specific environment variable handling

## Development Workflow

### Adding a New Feature
1. Create Redux slice if needed
2. Add utility functions if needed
3. Create component(s)
4. Add styles
5. Add tests
6. Update documentation

### Code Style
- Functional components with hooks
- Clear, descriptive variable names
- Comments for complex logic
- Consistent formatting

## Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.2.0 | UI framework |
| react-dom | 18.2.0 | DOM rendering |
| react-big-calendar | 1.8.5 | Calendar component |
| @reduxjs/toolkit | 1.9.7 | State management |
| react-redux | 8.1.3 | React-Redux bindings |
| recharts | 2.10.3 | Chart library |
| date-fns | 2.30.0 | Date utilities |
| vite | 5.0.8 | Build tool |
| jest | 29.7.0 | Testing framework |

---

**This architecture is designed for clarity, maintainability, and scalability.**

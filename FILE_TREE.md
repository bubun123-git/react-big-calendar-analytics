# Project File Tree

Complete visual representation of the react-big-calendar-analytics project structure.

```
react-big-calendar-analytics/
│
├── 📄 .babelrc                           # Babel configuration for transpilation
├── 📄 .gitignore                         # Git ignore rules
├── 📄 package.json                       # Project dependencies and scripts
├── 📄 vite.config.js                     # Vite build configuration
├── 📄 jest.config.js                     # Jest testing configuration
├── 📄 index.html                         # HTML entry point
│
├── 📘 README.md                          # Complete project documentation
├── 📘 QUICKSTART.md                      # Quick start guide (3 steps)
├── 📘 ARCHITECTURE.md                    # System architecture documentation
├── 📘 CONTRIBUTING.md                    # Contributing guidelines
├── 📘 PROJECT_SUMMARY.md                 # Project completion summary
│
└── 📁 src/                               # Source code directory
    │
    ├── 📄 main.jsx                       # React DOM entry point
    ├── 📄 App.jsx                        # Root application component
    ├── 📄 App.css                        # Application global styles
    ├── 📄 index.css                      # Global styles (reset, fonts)
    ├── 📄 setupTests.js                  # Jest test setup
    │
    ├── 📁 components/                    # React components
    │   ├── CalendarComponent.jsx         # Main calendar with React Big Calendar
    │   ├── CalendarComponent.test.js     # Calendar component tests
    │   ├── Calendar.css                  # Calendar styling
    │   │
    │   ├── CalendarContainer.jsx         # Calendar wrapper component
    │   ├── CalendarContainer.css         # Container styling
    │   │
    │   ├── EventModal.jsx                # Modal popup component
    │   ├── EventModal.test.js            # Modal tests
    │   ├── Modal.css                     # Modal styling & animations
    │   │
    │   ├── DataGraph.jsx                 # Recharts bar graph component
    │   ├── DataGraph.test.js             # Graph tests
    │   └── DataGraph.css                 # Graph styling
    │
    ├── 📁 store/                         # Redux state management
    │   ├── store.js                      # Redux store configuration
    │   ├── calendarDataSlice.js          # Slice: Calendar data state
    │   ├── modalSlice.js                 # Slice: Modal state
    │   └── selectedDateSlice.js          # Slice: Selected date state
    │
    ├── 📁 data/                          # Data files
    │   └── mockData.js                   # Mock user activity data
    │                                      # Format: { "DD-MM-YYYY": [...] }
    │
    └── 📁 utils/                         # Utility functions
        ├── dateUtils.js                  # Date formatting & parsing functions
        └── dateUtils.test.js             # Date utility tests
```

## File Descriptions

### Root Configuration Files

**`.babelrc`**
- Babel configuration for JSX and ES6+ transpilation
- Presets: @babel/preset-env, @babel/preset-react

**`jest.config.js`**
- Jest test runner configuration
- Test environment: jsdom
- Module name mapper for CSS imports

**`vite.config.js`**
- Vite build tool configuration
- React plugin integration
- Development server settings

**`package.json`**
- Project metadata and version
- Dependencies: React, Redux, Recharts, React Big Calendar
- Dev dependencies: Jest, RTL, Babel, Vite
- Scripts: dev, build, preview, test, test:watch, test:coverage

**`index.html`**
- HTML entry point
- Root div for React app
- Script reference to main.jsx

### Documentation Files

**`README.md`** (⭐ Start here)
- Comprehensive project documentation
- Features list and tech stack
- Setup instructions (npm install, npm run dev)
- Data structure explanation
- Testing scenarios with step-by-step guides
- Redux store structure
- Browser support and troubleshooting

**`QUICKSTART.md`**
- Quick start in 3 steps
- Available scripts table
- Key features overview
- Responsive breakpoints
- FAQ section
- Customization tips

**`ARCHITECTURE.md`**
- System overview and data flow diagrams
- Component hierarchy and responsibilities
- Redux store architecture explanation
- Data flow sequence for calendar interaction
- Utility functions reference
- Performance considerations

**`CONTRIBUTING.md`**
- Development workflow guide
- Code style conventions (JS, CSS)
- How to add features and Redux slices
- Testing guidelines and examples
- Commit message format
- Pull request process

**`PROJECT_SUMMARY.md`**
- Completion checklist
- Feature implementation status
- Test coverage summary
- Quick reference for key features

### Source Code - Components

**`components/CalendarComponent.jsx`**
- Main calendar integration with React Big Calendar
- Handles date selection logic
- Event highlighting for dates with data
- View switching (month, week, day)
- Redux integration (dispatch actions on date click)

**`components/CalendarContainer.jsx`**
- Wrapper component for the calendar
- Provides consistent container styling
- Routes to CalendarComponent

**`components/EventModal.jsx`**
- Popup modal for displaying date information
- Shows bar graph if data exists
- Shows "No data found" message if no data
- Close button and backdrop click handling
- Redux state integration

**`components/DataGraph.jsx`**
- Recharts bar chart component
- Displays user activity data
- Responsive container
- Handles empty data gracefully

### Source Code - Redux Store

**`store/store.js`**
- Redux store configuration
- Combines all reducers
- Export for Provider wrapping

**`store/calendarDataSlice.js`**
- Manages: calendar data, loading state, error state
- Actions: loadCalendarData, setDataLoading, setDataError
- Initial state: mock data loaded

**`store/modalSlice.js`**
- Manages: modal visibility, hasData flag, selected date data
- Actions: openModal, closeModal
- Stores chart data for DataGraph

**`store/selectedDateSlice.js`**
- Manages: currently selected date (Date object)
- Actions: setSelectedDate, clearSelectedDate
- Used for modal header display

### Source Code - Data & Utils

**`data/mockData.js`**
- Mock user activity data
- Format: `{ "DD-MM-YYYY": [{ user_x: value }, ...] }`
- 7 sample dates with data
- Ready for replacement with API calls

**`utils/dateUtils.js`**
- `formatDate(date)` - Convert Date to "DD-MM-YYYY"
- `parseDate(string)` - Convert "DD-MM-YYYY" to Date
- `dateHasData(date)` - Check if date has data
- `getDateData(date)` - Get data for a date
- `convertToChartData(data)` - Format for Recharts
- `getAllDatesWithData()` - Get all dates with data

### Source Code - Styling

**`App.css`**
- Header styling with gradient
- Main container layout
- Responsive breakpoints

**`components/Calendar.css`**
- React Big Calendar styling
- Toolbar buttons and navigation
- Event highlighting (green for data dates)
- Cell hover effects
- Media queries for tablet/mobile

**`components/Modal.css`**
- Modal backdrop and overlay
- Modal container and animations
- Header, body, footer sections
- Close button styling
- Responsive modal sizing

**`components/DataGraph.css`**
- Chart container styling
- Responsive height management
- SVG responsive wrapper

**`index.css`**
- Global styles and resets
- Font configuration
- Base element styling

### Tests

**`utils/dateUtils.test.js`**
- formatDate() tests
- parseDate() tests
- dateHasData() tests
- getDateData() tests
- convertToChartData() tests

**`components/CalendarComponent.test.js`**
- Calendar rendering test
- Date selection with data test
- Date selection without data test
- Event highlighting test

**`components/EventModal.test.js`**
- Modal rendering with data test
- Modal no-data message test
- Close button rendering test

**`components/DataGraph.test.js`**
- Graph rendering test
- Empty data handling test
- Null data handling test

## File Statistics

| Category | Count | Files |
|----------|-------|-------|
| Components | 5 | JSX component files |
| Component Tests | 4 | Test files |
| Styles | 5 | CSS files |
| Redux Slices | 3 | State management |
| Utilities | 2 | Helper functions |
| Config | 6 | Configuration files |
| Documentation | 5 | Markdown guides |
| **Total** | **30** | **Total files** |

## Lines of Code

- **React Components**: ~600 LOC
- **Redux Store**: ~150 LOC
- **Utilities**: ~100 LOC
- **Styling**: ~800 LOC
- **Tests**: ~400 LOC
- **Configuration**: ~150 LOC
- **Total**: ~2,200 LOC (excluding node_modules)

## Dependencies Tree

```
react-big-calendar-analytics
├── react (18.2.0)
│   ├── react-dom (18.2.0)
│   └── react-big-calendar (1.8.5)
│       └── date-fns (2.30.0)
│
├── Redux
│   ├── redux (4.2.1)
│   ├── @reduxjs/toolkit (1.9.7)
│   └── react-redux (8.1.3)
│
├── recharts (2.10.3)
│
├── Build Tool
│   └── vite (5.0.8)
│       └── @vitejs/plugin-react (4.2.1)
│
└── Testing
    ├── jest (29.7.0)
    ├── @testing-library/react (14.1.2)
    ├── @testing-library/jest-dom (6.1.5)
    └── babel-jest (29.7.0)
```

---

**Total Project Size**: ~2,200 lines of code (excluding node_modules)
**Ready for**: GitHub submission, production deployment, code review

# React Big Calendar Analytics

A comprehensive React application that integrates **React Big Calendar** with **Redux Toolkit** state management and **Recharts** visualization. This project provides a calendar interface to view user activity data with a responsive modal popup displaying analytics for selected dates.

## Features

✨ **Calendar Integration**
- View calendar in three different modes: Month, Week, and Day
- Seamless navigation between months/weeks/days
- Highlighted dates with available data
- Responsive design for all device sizes

📊 **Data Visualization**
- Bar graph representation of user activity data
- Real-time data updates through Redux state management
- Clean and intuitive UI with smooth animations

🎯 **Interactive Modals**
- Click on any date to view data
- Dates with data show an interactive bar graph
- Dates without data display a user-friendly message
- Smooth modal animations and responsive behavior

🔄 **State Management**
- Redux Toolkit for predictable state management
- Separate slices for calendar data, selected dates, and modal state
- Easy to extend and maintain

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **State Management**: Redux Toolkit 1.9.7 & React-Redux 8.1.3
- **Calendar**: React Big Calendar 1.8.5
- **Charts**: Recharts 2.10.3
- **Date Handling**: date-fns 2.30.0
- **Testing**: Jest 29.7.0 & React Testing Library 14.1.2

## Project Structure

```
react-big-calendar-analytics/
├── src/
│   ├── components/           # React components
│   │   ├── CalendarComponent.jsx
│   │   ├── CalendarComponent.test.js
│   │   ├── CalendarContainer.jsx
│   │   ├── CalendarContainer.css
│   │   ├── EventModal.jsx
│   │   ├── EventModal.test.js
│   │   ├── DataGraph.jsx
│   │   ├── DataGraph.test.js
│   │   ├── Calendar.css
│   │   ├── Modal.css
│   │   └── DataGraph.css
│   ├── store/                # Redux store and slices
│   │   ├── store.js          # Redux store configuration
│   │   ├── calendarDataSlice.js
│   │   ├── modalSlice.js
│   │   └── selectedDateSlice.js
│   ├── data/                 # Mock data and data utilities
│   │   └── mockData.js       # Mock user activity data
│   ├── utils/                # Utility functions
│   │   ├── dateUtils.js      # Date formatting and parsing
│   │   └── dateUtils.test.js
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── main.jsx              # React DOM entry point
│   ├── index.css             # Global styles
│   └── setupTests.js         # Jest configuration
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── jest.config.js            # Jest configuration
├── .babelrc                  # Babel configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js 14+ and npm/yarn installed
- Git (for version control)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd react-big-calendar-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will automatically open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

   The optimized build will be created in the `dist/` directory.

5. **Preview the production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Running Tests

### Run all tests
```bash
npm test
# or
yarn test
```

### Run tests in watch mode
```bash
npm run test:watch
# or
yarn test:watch
```

### Generate coverage report
```bash
npm run test:coverage
# or
yarn test:coverage
```

## Data Structure

The mock data is structured in `src/data/mockData.js` with dates as keys (DD-MM-YYYY format) and arrays of user activity objects as values:

```javascript
{
  "01-12-2025": [
    { "user_1": 10 },
    { "user_2": 15 },
    { "user_3": 8 },
    { "user_4": 12 }
  ],
  "03-12-2025": [
    { "user_1": 20 },
    { "user_2": 18 },
    { "user_3": 22 },
    { "user_4": 16 }
  ],
  // ... more dates
}
```

Each date contains an array of objects where:
- Keys are user identifiers (user_1, user_2, etc.)
- Values are activity counts (numbers)

## How to Use

### Viewing the Calendar

1. **Launch the application** - The calendar loads in Month view by default
2. **Change views** - Use the toolbar buttons to switch between Month, Week, and Day views
3. **Navigate** - Use the navigation arrows or month/year selector to navigate through dates

### Interacting with Data

1. **Dates with data** are highlighted with a green badge (📊 Data Available)
2. **Click on any highlighted date** to open a modal showing the bar graph
3. **Click on any non-highlighted date** to see a "No data found" message
4. **Close the modal** by clicking the Close button or the X button

### Understanding the Bar Graph

The bar graph displays:
- **X-axis**: User identifiers (user_1, user_2, etc.)
- **Y-axis**: Activity count values
- **Bars**: Each user's activity count for the selected date

## Testing Scenarios

### Test Case 1: Calendar Rendering
- **Goal**: Verify the calendar renders correctly
- **Steps**:
  1. Launch the application
  2. Confirm the calendar is visible in month view
  3. Verify all dates are displayed
- **Expected**: Calendar renders without errors

### Test Case 2: Dates with Data
- **Goal**: Verify dates with data are highlighted and show correct data
- **Steps**:
  1. Locate a highlighted date (e.g., 01-12-2025)
  2. Click on the highlighted date
  3. Verify the modal opens with the bar graph
  4. Check that user data is displayed correctly
- **Expected**: Modal shows the correct bar graph with user activity data

### Test Case 3: Dates Without Data
- **Goal**: Verify dates without data show appropriate message
- **Steps**:
  1. Click on a non-highlighted date (e.g., 02-12-2025)
  2. Verify the modal opens
  3. Check for "No data found for the selected date" message
- **Expected**: Modal displays the no-data message with the date

### Test Case 4: Navigation
- **Goal**: Verify navigation works across months/weeks/days
- **Steps**:
  1. Click the navigation arrows to move between months
  2. Switch to Week view and verify dates display correctly
  3. Switch to Day view and verify single day displays
  4. Return to Month view
- **Expected**: All views display correctly with proper date highlighting

### Test Case 5: Modal Interactions
- **Goal**: Verify modal open/close functionality
- **Steps**:
  1. Click on a date to open the modal
  2. Click the X button to close the modal
  3. Click on another date to verify modal reopens
  4. Click outside the modal (on backdrop) to close it
- **Expected**: Modal opens and closes smoothly

### Test Case 6: Responsive Design
- **Goal**: Verify UI is responsive on different screen sizes
- **Steps**:
  1. Test on desktop (1920x1080)
  2. Test on tablet (768x1024)
  3. Test on mobile (375x667)
  4. Verify all elements are accessible and readable
- **Expected**: UI is responsive and functional on all screen sizes

### Test Case 7: Data Integrity
- **Goal**: Verify data is correctly displayed in graphs
- **Steps**:
  1. Click on 01-12-2025 (has data: user_1:10, user_2:15, user_3:8, user_4:12)
  2. Verify the bar graph shows correct values
  3. Click on a different date with data
  4. Verify the graph updates correctly
- **Expected**: Bar graph accurately represents the data for each date

## Redux Store Structure

### calendarDataSlice
Manages calendar event data:
```javascript
{
  data: { /* mock data */ },
  loading: false,
  error: null
}
```

**Actions:**
- `loadCalendarData(data)` - Load calendar data
- `setDataLoading(boolean)` - Set loading state
- `setDataError(error)` - Set error state

### modalSlice
Manages modal visibility and content:
```javascript
{
  isOpen: false,
  hasData: false,
  selectedDateData: null
}
```

**Actions:**
- `openModal({ hasData, selectedDateData })` - Open modal with data
- `closeModal()` - Close modal

### selectedDateSlice
Manages the currently selected date:
```javascript
{
  selectedDate: null
}
```

**Actions:**
- `setSelectedDate(date)` - Set selected date
- `clearSelectedDate()` - Clear selected date

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Calendar efficiently handles date navigation
- Redux prevents unnecessary re-renders through memoization
- Chart updates only when date changes
- Responsive images and CSS optimizations for mobile devices

## Troubleshooting

### Issue: Calendar not displaying dates
**Solution**: Clear browser cache and reload the page

### Issue: Modal not opening
**Solution**: Check browser console for errors, ensure Redux store is properly connected

### Issue: Chart not rendering
**Solution**: Verify data format matches expected structure, check Recharts dependencies

### Issue: Styling looks broken
**Solution**: Ensure all CSS files are imported, clear CSS cache in browser DevTools

## Future Enhancements

- [ ] Add date filtering and search functionality
- [ ] Export data as CSV/PDF
- [ ] Add multiple year support
- [ ] User authentication and personalization
- [ ] Backend integration for real-time data
- [ ] Advanced analytics and insights
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository or contact the maintainers.

---

**Happy Coding!** 🚀

# React Big Calendar Analytics

A React application that integrates **React Big Calendar** with **Redux Toolkit** state management and **Recharts** visualization for viewing user activity data.

## Tech Stack

- React 18.2.0, Vite 5.0.8, Redux Toolkit 1.9.7
- React Big Calendar 1.8.5, Recharts 2.10.3
- Jest 29.7.0, React Testing Library 14.1.2

## Quick Start

### Prerequisites
- Node.js 14+

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Opens at `http://localhost:3000`

### Other Commands
```bash
npm run build          # Build for production
npm run preview        # Preview production build
npm test              # Run tests
npm run test:watch    # Tests in watch mode
npm run test:coverage # Coverage report
```

## Features

- **Calendar Views**: Month, Week, Day
- **Interactive Modal**: Click dates to view data
- **Bar Graph**: Visualize user activity with Recharts
- **Redux State Management**: Predictable data flow
- **Responsive Design**: Works on all devices

## How to Use

1. **View Calendar**: Opens in Month view by default
2. **Change Views**: Use toolbar buttons for Week/Day views
3. **Click Dates**: Highlighted dates show a bar graph in a modal
4. **No Data**: Non-highlighted dates show "No data found" message

## Data Structure

Mock data in `src/data/mockData.js` (DD-MM-YYYY format):
```javascript
{
  "01-12-2025": [
    { "user_1": 10 },
    { "user_2": 15 }
  ]
}
```

## Project Structure

```
src/
├── components/          # Calendar, Modal, Graph components
├── store/              # Redux slices
├── data/               # Mock data
├── utils/              # Utility functions
└── App.jsx
```

## Testing

Run tests:
```bash
npm test
npm run test:coverage
```





# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Step 3: Explore the Calendar
- 📅 View the calendar in Month, Week, or Day view
- 🟢 Click on green highlighted dates (dates with data)
- 📊 See the bar graph showing user activity
- ❌ Click on non-highlighted dates to see "No data" message

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |

## 📊 What's Included

✅ **Calendar Component** - React Big Calendar with multiple views
✅ **Redux State Management** - Centralized state with Redux Toolkit
✅ **Modal Popup** - Display date data with smooth animations
✅ **Bar Chart** - Recharts visualization of user activity
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Unit Tests** - Jest + React Testing Library
✅ **Mock Data** - Pre-loaded sample data for testing

## 🎯 Key Features

- **Multi-view Calendar**: Switch between Month, Week, and Day views
- **Data Highlighting**: Dates with data are visually highlighted
- **Interactive Modals**: Click dates to see detailed analytics
- **Responsive UI**: Mobile-friendly with graceful degradation
- **State Management**: Redux Toolkit for predictable state
- **Charts**: Recharts bar graphs for data visualization

## 📱 Responsive Breakpoints

- **Desktop**: 1920px+ (full feature set)
- **Tablet**: 768px - 1919px (optimized layout)
- **Mobile**: Below 768px (touch-friendly interface)

## 🧪 Testing

Run tests to verify everything is working:

```bash
# All tests
npm test

# Watch mode for development
npm run test:watch

# Coverage report
npm run test:coverage
```

## 🛠️ Customization

### Add More Mock Data
Edit `src/data/mockData.js` to add more dates:
```javascript
"DD-MM-YYYY": [
  { "user_1": 10 },
  { "user_2": 15 },
  // ... more users
]
```

### Change Colors
Modify CSS variables in component CSS files:
- `src/components/Calendar.css`
- `src/components/Modal.css`
- `src/App.css`

### Adjust Chart Size
Edit the `height` prop in `src/components/DataGraph.jsx`:
```javascript
<ResponsiveContainer width="100%" height={400}>
```

## 📦 Project Structure

```
src/
├── components/     - React components (Calendar, Modal, Graph)
├── store/         - Redux slices and store configuration
├── data/          - Mock data
├── utils/         - Helper functions (date formatting, etc)
└── App.jsx        - Main app component
```

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ❓ FAQ

**Q: How do I add new dates with data?**
A: Edit `src/data/mockData.js` and add new date entries following the existing format.

**Q: Can I change the chart colors?**
A: Yes, edit the `Bar` component in `src/components/DataGraph.jsx` or the CSS files.

**Q: How do I deploy this app?**
A: Run `npm run build` and deploy the `dist/` folder to any static hosting service.

**Q: Where can I find the Redux state?**
A: Check `src/store/` for all Redux slices and configuration.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

MIT License - Feel free to use this project for personal or commercial use.

---

**Happy Coding!** 🎉

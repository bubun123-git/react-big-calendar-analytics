# Getting Started - Complete Setup Guide

Welcome to **react-big-calendar-analytics**! This guide will walk you through everything from initial setup to running the project.

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)
- A code editor (VS Code recommended)

### Verify Installation

```bash
node --version    # Should show v14.0.0 or higher
npm --version     # Should show 6.0.0 or higher
```

## 🚀 Step-by-Step Setup

### Step 1: Navigate to Project Directory

```bash
cd react-big-calendar-analytics
```

### Step 2: Install Dependencies

This downloads all required packages (takes 1-2 minutes):

```bash
npm install
```

You'll see a lot of output - this is normal. When it's done, you should see:
```
added XXX packages
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

The app will automatically open in your browser at `http://localhost:3000/`

### Step 4: Explore the Application

1. **View the Calendar** - You should see a calendar in Month view
2. **Look for Green Highlighted Dates** - These have data (Dec 1, 3, 5, 10, 15, 20, 25, 2025)
3. **Click a Green Date** - A modal should open showing a bar graph
4. **Click a Non-Green Date** - A modal should show "No data found"
5. **Use Toolbar Buttons** - Switch between Month, Week, and Day views

## 🧪 Running Tests

### Run All Tests

```bash
npm test
```

This will run all test files and show results.

### Watch Mode (For Development)

```bash
npm run test:watch
```

Tests automatically re-run when you save files.

### View Test Coverage

```bash
npm run test:coverage
```

Shows which parts of the code are tested.

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder (~200KB gzipped).

### Preview Production Build

```bash
npm run preview
```

Shows how the app will look in production.

## 📚 Understanding the Project

### Key Directories

```
src/
├── components/    # React components (Calendar, Modal, Graph)
├── store/        # Redux state management
├── data/         # Mock data
└── utils/        # Helper functions
```

### Main Concepts

**Calendar**: Interactive calendar showing dates with data highlighted in green.

**Modal**: Popup window that appears when you click a date. Shows:
- Bar graph if date has data
- "No data found" message if date has no data

**Redux**: Manages application state (which date is selected, is modal open, etc.)

**Bar Graph**: Recharts visualization showing user activity data.

## 🔧 Common Tasks

### Add More Mock Data

Edit `src/data/mockData.js`:

```javascript
"26-12-2025": [
  { "user_1": 25 },
  { "user_2": 30 },
  { "user_3": 22 },
  { "user_4": 28 }
],
```

Save the file - the app updates automatically!

### Change Colors

Edit `src/App.css` and look for color values like `#667eea`:

```css
/* Header gradient colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Chart Height

Edit `src/components/DataGraph.jsx`:

```javascript
<ResponsiveContainer width="100%" height={300}>  {/* Change 300 */}
```

## 🐛 Troubleshooting

### "npm: command not found"
- **Solution**: Install Node.js from https://nodejs.org/

### "Port 3000 is already in use"
- **Solution**: Either:
  - Close the other application using port 3000
  - Or run: `npm run dev -- --port 3001`

### "Module not found" error
- **Solution**: Run `npm install` again

### Calendar not showing data
- **Solution**: Check browser console (F12) for errors
- Clear browser cache (Ctrl+Shift+Delete)

### Styles look broken
- **Solution**: Hard refresh browser (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)

## 📖 Documentation Files

Read these for more information:

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation (🌟 START HERE) |
| `QUICKSTART.md` | Quick 3-step guide |
| `ARCHITECTURE.md` | How the app is structured |
| `CONTRIBUTING.md` | How to contribute and modify |
| `FILE_TREE.md` | Complete file structure |
| `PROJECT_SUMMARY.md` | What's implemented |

## 💡 Tips & Tricks

### Keyboard Shortcuts (in Terminal)
- `Ctrl+C` - Stop the development server
- `Ctrl+` - Open DevTools in browser

### Browser DevTools
- Press `F12` to open DevTools
- **Console tab** - See errors and messages
- **Network tab** - See API calls
- Install **Redux DevTools** extension to inspect state

### Code Editor (VS Code)
- Install "ES7+ React/Redux/React-Native snippets"
- Install "Prettier" for code formatting
- Use `Ctrl+Shift+F` to search across files

## 🎯 Next Steps

After setting up:

1. **Read README.md** - Understand the project features
2. **Explore the Code** - Open `src/components/CalendarComponent.jsx`
3. **Run Tests** - Execute `npm test` to see all tests pass
4. **Modify Mock Data** - Add more dates to `src/data/mockData.js`
5. **Try the Features**:
   - Switch between calendar views
   - Click on dates with data
   - Try clicking dates without data
   - Close modal by clicking X or outside

## 🚀 Ready to Deploy?

When you're ready to share or deploy:

1. **Build**: `npm run build`
2. **Deploy** to:
   - Vercel: Connect GitHub, auto-deploys
   - Netlify: Drag & drop the `dist/` folder
   - GitHub Pages: Push `dist/` folder
   - Any static hosting service

## 📞 Getting Help

### If Something Doesn't Work:

1. Check the **Troubleshooting** section above
2. Check browser console for errors (F12)
3. Read `README.md` for feature documentation
4. Read `ARCHITECTURE.md` to understand how it works
5. Check if there's a related issue in the code comments

### Common Questions:

**Q: How do I change the selected date format?**
A: Edit the date format in `src/utils/dateUtils.js`

**Q: Can I use real data from an API?**
A: Yes! Replace mockData.js imports with API calls in Redux slices

**Q: How do I customize the chart?**
A: Edit `src/components/DataGraph.jsx` to modify Recharts configuration

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts server without errors
- [ ] Browser opens and shows calendar
- [ ] Calendar displays dates correctly
- [ ] Green highlighted dates are visible
- [ ] Clicking a green date shows modal with graph
- [ ] Clicking a non-green date shows "No data" message
- [ ] Modal close button works
- [ ] Calendar view switching works
- [ ] `npm test` shows all tests pass

## 🎉 You're All Set!

Congratulations! You have successfully set up react-big-calendar-analytics.

**What to do now:**
1. Explore the application features
2. Read the documentation
3. Review the code structure
4. Customize the data
5. Make it your own!

---

## 📞 Quick Reference

```bash
npm install              # Install dependencies
npm run dev             # Start development server
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run build           # Build for production
npm run preview         # Preview production build
```

**Happy coding!** 🚀

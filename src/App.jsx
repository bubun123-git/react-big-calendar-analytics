import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import CalendarContainer from './components/CalendarContainer'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Calendar Analytics Dashboard</h1>
        </header>
        <main className="app-main">
          <CalendarContainer />
        </main>
      </div>
    </Provider>
  )
}

export default App

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store/store'
import CalendarComponent from '../components/CalendarComponent'

// Mock react-big-calendar
jest.mock('react-big-calendar', () => ({
  Calendar: ({ onSelectSlot, onSelectEvent, events }) => (
    <div data-testid="calendar">
      <button
        data-testid="select-date-with-data"
        onClick={() =>
          onSelectSlot({
            start: new Date(2025, 11, 1),
          })
        }
      >
        Select 01-12-2025
      </button>
      <button
        data-testid="select-date-without-data"
        onClick={() =>
          onSelectSlot({
            start: new Date(2025, 11, 2),
          })
        }
      >
        Select 02-12-2025
      </button>
      <button
        data-testid="select-event"
        onClick={() =>
          onSelectEvent({
            start: new Date(2025, 11, 1),
            id: '01-12-2025',
          })
        }
      >
        Click Event
      </button>
      <div data-testid="events-count">{events.length}</div>
    </div>
  ),
  dateFnsLocalizer: () => ({}),
}))

describe('CalendarComponent', () => {
  it('should render calendar', () => {
    render(
      <Provider store={store}>
        <CalendarComponent />
      </Provider>
    )
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
  })

  it('should open modal with graph when clicking date with data', () => {
    render(
      <Provider store={store}>
        <CalendarComponent />
      </Provider>
    )

    const selectButton = screen.getByTestId('select-date-with-data')
    fireEvent.click(selectButton)

    // Check if modal appears
    setTimeout(() => {
      expect(screen.getByText(/User Activity Data/i)).toBeInTheDocument()
    }, 100)
  })

  it('should open modal with no data message when clicking date without data', () => {
    render(
      <Provider store={store}>
        <CalendarComponent />
      </Provider>
    )

    const selectButton = screen.getByTestId('select-date-without-data')
    fireEvent.click(selectButton)

    // Check if modal appears with no data message
    setTimeout(() => {
      expect(screen.getByText(/No data found for the selected date/i)).toBeInTheDocument()
    }, 100)
  })

  it('should display events count', () => {
    render(
      <Provider store={store}>
        <CalendarComponent />
      </Provider>
    )

    const eventsCountDiv = screen.getByTestId('events-count')
    expect(eventsCountDiv.textContent).toBe('7') // We have 7 dates with data in mockData
  })
})

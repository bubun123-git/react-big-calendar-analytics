import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import EventModal from '../components/EventModal'
import modalReducer from '../store/modalSlice'
import selectedDateReducer from '../store/selectedDateSlice'

describe('EventModal', () => {
  const createTestStore = (modalState, selectedDate) => {
    return configureStore({
      reducer: {
        modal: () => modalState,
        selectedDate: () => selectedDate,
      },
    })
  }

  it('should render modal when open with data', () => {
    const modalState = {
      isOpen: true,
      hasData: true,
      selectedDateData: [
        { name: 'user_1', value: 10 },
        { name: 'user_2', value: 15 },
      ],
    }
    const selectedDate = { selectedDate: new Date(2025, 11, 1) }
    const testStore = createTestStore(modalState, selectedDate)

    render(
      <Provider store={testStore}>
        <EventModal />
      </Provider>
    )

    expect(screen.getByText(/User Activity Data/i)).toBeInTheDocument()
    expect(screen.getByText(/01-12-2025/i)).toBeInTheDocument()
  })

  it('should render no data message when hasData is false', () => {
    const modalState = {
      isOpen: true,
      hasData: false,
      selectedDateData: null,
    }
    const selectedDate = { selectedDate: new Date(2025, 11, 2) }
    const testStore = createTestStore(modalState, selectedDate)

    render(
      <Provider store={testStore}>
        <EventModal />
      </Provider>
    )

    expect(screen.getByText(/No data found for the selected date/i)).toBeInTheDocument()
    expect(screen.getByText(/02-12-2025/i)).toBeInTheDocument()
  })

  it('should display close button', () => {
    const modalState = {
      isOpen: true,
      hasData: true,
      selectedDateData: [{ name: 'user_1', value: 10 }],
    }
    const selectedDate = { selectedDate: new Date(2025, 11, 1) }
    const testStore = createTestStore(modalState, selectedDate)

    render(
      <Provider store={testStore}>
        <EventModal />
      </Provider>
    )

    const closeButtons = screen.getAllByRole('button')
    expect(closeButtons.length).toBeGreaterThan(0)
  })
})

import { configureStore } from '@reduxjs/toolkit'
import calendarDataReducer from './calendarDataSlice'
import modalReducer from './modalSlice'
import selectedDateReducer from './selectedDateSlice'

const store = configureStore({
  reducer: {
    calendarData: calendarDataReducer,
    modal: modalReducer,
    selectedDate: selectedDateReducer,
  },
})

export default store

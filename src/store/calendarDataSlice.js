import { createSlice } from '@reduxjs/toolkit'
import mockData from '../data/mockData'

const initialState = {
  data: mockData,
  loading: false,
  error: null,
}

const calendarDataSlice = createSlice({
  name: 'calendarData',
  initialState,
  reducers: {
    loadCalendarData(state, action) {
      state.data = action.payload
      state.error = null
    },
    setDataLoading(state, action) {
      state.loading = action.payload
    },
    setDataError(state, action) {
      state.error = action.payload
    },
  },
})

export const { loadCalendarData, setDataLoading, setDataError } = calendarDataSlice.actions
export default calendarDataSlice.reducer

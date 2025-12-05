import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  hasData: false,
  selectedDateData: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true
      state.hasData = action.payload.hasData
      state.selectedDateData = action.payload.selectedDateData
    },
    closeModal(state) {
      state.isOpen = false
      state.hasData = false
      state.selectedDateData = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer

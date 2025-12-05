import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../store/modalSlice'
import { formatDate } from '../utils/dateUtils'
import DataGraph from './DataGraph'
import './Modal.css'

function EventModal() {
  const dispatch = useDispatch()
  const { isOpen, hasData, selectedDateData } = useSelector((state) => state.modal)
  const selectedDate = useSelector((state) => state.selectedDate.selectedDate)

  if (!isOpen || !selectedDate) return null

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Date: {formatDate(selectedDate)}</h2>
          <button className="modal-close" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {hasData ? (
            <>
              <p className="modal-subtitle">User Activity Data</p>
              <DataGraph data={selectedDateData} />
            </>
          ) : (
            <div className="no-data-message">
              <p>No data found for the selected date.</p>
              <p className="date-display">{formatDate(selectedDate)}</p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn-close" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventModal

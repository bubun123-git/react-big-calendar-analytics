import React, { useState, useMemo } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDate } from '../store/selectedDateSlice'
import { openModal } from '../store/modalSlice'
import { dateHasData, getDateData, convertToChartData } from '../utils/dateUtils'
import EventModal from './EventModal'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function CalendarComponent() {
  const [view, setView] = useState('month')
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)
  const calendarData = useSelector((state) => state.calendarData.data)

  // Create events for dates with data to highlight them
  const events = useMemo(() => {
    return Object.keys(calendarData).map((dateStr) => {
      const [day, month, year] = dateStr.split('-')
      return {
        id: dateStr,
        title: '📊 Data Available',
        start: new Date(year, month - 1, day),
        end: new Date(year, month - 1, day),
        resource: { hasData: true },
      }
    })
  }, [calendarData])

  const handleSelectSlot = (slotInfo) => {
    const selectedDate = slotInfo.start
    console.log('Slot clicked:', selectedDate)
    dispatch(setSelectedDate(selectedDate))

    if (dateHasData(selectedDate)) {
      const data = getDateData(selectedDate)
      const chartData = convertToChartData(data)
      console.log('Opening modal with data:', chartData)
      dispatch(
        openModal({
          hasData: true,
          selectedDateData: chartData,
        })
      )
    } else {
      console.log('Opening modal without data')
      dispatch(
        openModal({
          hasData: false,
          selectedDateData: null,
        })
      )
    }
  }

  const handleSelectEvent = (event) => {
    const selectedDate = event.start
    console.log('Event clicked:', selectedDate)
    dispatch(setSelectedDate(selectedDate))

    if (dateHasData(selectedDate)) {
      const data = getDateData(selectedDate)
      const chartData = convertToChartData(data)
      console.log('Opening modal with event data:', chartData)
      dispatch(
        openModal({
          hasData: true,
          selectedDateData: chartData,
        })
      )
    } else {
      console.log('Opening modal without event data')
      dispatch(
        openModal({
          hasData: false,
          selectedDateData: null,
        })
      )
    }
  }

  const eventStyleGetter = (event) => {
    if (event.resource && event.resource.hasData) {
      return {
        style: {
          backgroundColor: '#4caf50',
          borderRadius: '5px',
          opacity: 0.8,
          color: 'white',
          border: '2px solid #388e3c',
          display: 'block',
        },
      }
    }
    return {}
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable
          eventPropGetter={eventStyleGetter}
          popup
          views={['month', 'week', 'day']}
          defaultView="month"
        />
      </div>
      {isOpen && <EventModal />}
    </div>
  )
}

export default CalendarComponent

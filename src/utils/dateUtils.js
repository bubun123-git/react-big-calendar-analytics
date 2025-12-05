import mockData from '../data/mockData'

/**
 * Convert date from DD-MM-YYYY format to Date object
 */
export const parseDate = (dateString) => {
  if (!dateString) return null
  const [day, month, year] = dateString.split('-')
  return new Date(year, month - 1, day)
}

/**
 * Convert Date object to DD-MM-YYYY format
 */
export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

/**
 * Check if a date has data in the mock data
 */
export const dateHasData = (date) => {
  const formattedDate = formatDate(date)
  return mockData.hasOwnProperty(formattedDate)
}

/**
 * Get data for a specific date
 */
export const getDateData = (date) => {
  const formattedDate = formatDate(date)
  return mockData[formattedDate] || null
}

/**
 * Convert mock data to recharts format
 */
export const convertToChartData = (dateData) => {
  if (!Array.isArray(dateData) || dateData.length === 0) {
    return []
  }

  return dateData.map((item) => {
    const [userName, value] = Object.entries(item)[0]
    return {
      name: userName,
      value: value,
    }
  })
}

/**
 * Get all dates with data
 */
export const getAllDatesWithData = () => {
  return Object.keys(mockData).map((dateStr) => parseDate(dateStr))
}

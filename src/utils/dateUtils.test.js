import { formatDate, parseDate, dateHasData, getDateData, convertToChartData } from '../utils/dateUtils'

describe('dateUtils', () => {
  describe('formatDate', () => {
    it('should format date correctly to DD-MM-YYYY', () => {
      const date = new Date(2025, 11, 1) // December 1, 2025
      expect(formatDate(date)).toBe('01-12-2025')
    })

    it('should pad single digit day and month', () => {
      const date = new Date(2025, 0, 5) // January 5, 2025
      expect(formatDate(date)).toBe('05-01-2025')
    })
  })

  describe('parseDate', () => {
    it('should parse date string correctly', () => {
      const parsed = parseDate('01-12-2025')
      expect(parsed.getDate()).toBe(1)
      expect(parsed.getMonth()).toBe(11) // December (0-indexed)
      expect(parsed.getFullYear()).toBe(2025)
    })

    it('should return null for invalid input', () => {
      expect(parseDate(null)).toBe(null)
      expect(parseDate(undefined)).toBe(null)
    })
  })

  describe('dateHasData', () => {
    it('should return true for dates with data', () => {
      const date = new Date(2025, 11, 1) // 01-12-2025
      expect(dateHasData(date)).toBe(true)
    })

    it('should return false for dates without data', () => {
      const date = new Date(2025, 11, 2) // 02-12-2025 (no data)
      expect(dateHasData(date)).toBe(false)
    })
  })

  describe('getDateData', () => {
    it('should return data for a valid date', () => {
      const date = new Date(2025, 11, 1) // 01-12-2025
      const data = getDateData(date)
      expect(Array.isArray(data)).toBe(true)
      expect(data.length).toBeGreaterThan(0)
    })

    it('should return null for dates without data', () => {
      const date = new Date(2025, 11, 2) // 02-12-2025 (no data)
      expect(getDateData(date)).toBe(null)
    })
  })

  describe('convertToChartData', () => {
    it('should convert mock data to chart format', () => {
      const mockData = [
        { user_1: 10 },
        { user_2: 15 },
        { user_3: 8 },
      ]
      const chartData = convertToChartData(mockData)
      expect(chartData).toEqual([
        { name: 'user_1', value: 10 },
        { name: 'user_2', value: 15 },
        { name: 'user_3', value: 8 },
      ])
    })

    it('should return empty array for empty input', () => {
      expect(convertToChartData([])).toEqual([])
      expect(convertToChartData(null)).toEqual([])
    })
  })
})

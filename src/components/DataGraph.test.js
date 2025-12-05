import React from 'react'
import { render, screen } from '@testing-library/react'
import DataGraph from '../components/DataGraph'

describe('DataGraph', () => {
  it('should render graph with valid data', () => {
    const data = [
      { name: 'user_1', value: 10 },
      { name: 'user_2', value: 15 },
      { name: 'user_3', value: 8 },
    ]

    const { container } = render(<DataGraph data={data} />)

    expect(container.querySelector('.graph-container')).toBeInTheDocument()
  })

  it('should display no data message for empty data', () => {
    render(<DataGraph data={[]} />)
    expect(screen.getByText(/No data available for visualization/i)).toBeInTheDocument()
  })

  it('should display no data message for null data', () => {
    render(<DataGraph data={null} />)
    expect(screen.getByText(/No data available for visualization/i)).toBeInTheDocument()
  })
})

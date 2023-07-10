import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello world link', () => {
  render(<App />)
  const hellowWorld = screen.getByText(/Hello World/i)
  expect(hellowWorld).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

// Placeholder test: proves the test runner and CI are wired up.
// Replace with real tests as features land.
describe('App', () => {
  it('renders the project title', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /AI Tools for Student Skill Assessment/i }),
    ).toBeInTheDocument()
  })
})

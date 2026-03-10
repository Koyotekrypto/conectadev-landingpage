import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)
        expect(document.body).toBeInTheDocument()
    })

    it('renders navbar with navigation links', () => {
        render(<App />)
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
        const blogLinks = screen.getAllByRole('link', { name: /blog/i })
        const casesLinks = screen.getAllByRole('link', { name: /cases/i })
        expect(blogLinks.length).toBeGreaterThanOrEqual(1)
        expect(casesLinks.length).toBeGreaterThanOrEqual(1)
    })
})

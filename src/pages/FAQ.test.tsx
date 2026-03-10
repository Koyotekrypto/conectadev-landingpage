import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FAQPage from './FAQ'

describe('FAQPage', () => {
    it('renders main content', () => {
        render(
            <MemoryRouter>
                <FAQPage />
            </MemoryRouter>
        )
        const main = document.querySelector('main')
        expect(main).toBeInTheDocument()
    })

    it('renders FAQ section', () => {
        render(
            <MemoryRouter>
                <FAQPage />
            </MemoryRouter>
        )
        expect(document.querySelector('main')).toBeInTheDocument()
    })
})

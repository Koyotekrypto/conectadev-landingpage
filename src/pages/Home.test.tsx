import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'

describe('Home', () => {
    it('renders main content', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const main = document.querySelector('main')
        expect(main).toBeInTheDocument()
    })
})

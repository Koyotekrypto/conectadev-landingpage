import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Cases } from './Cases'
import { CASE_STUDIES } from '../data/contentData'

describe('Cases', () => {
    it('renders main and page title', () => {
        render(
            <MemoryRouter>
                <Cases />
            </MemoryRouter>
        )
        const main = document.querySelector('main')
        expect(main).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /Quais resultados a ConectaDev entrega/i })).toBeInTheDocument()
    })

    it('renders all case study cards', () => {
        render(
            <MemoryRouter>
                <Cases />
            </MemoryRouter>
        )
        expect(CASE_STUDIES.length).toBeGreaterThan(0)
        CASE_STUDIES.forEach((study) => {
            expect(screen.getByText(study.title)).toBeInTheDocument()
        })
    })
})

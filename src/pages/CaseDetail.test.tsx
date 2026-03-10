import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CaseDetail from './CaseDetail'
import { CASE_STUDIES } from '../data/contentData'

const firstSlug = CASE_STUDIES[0]?.slug ?? 'soapia-ai'

function renderCaseDetail(entry: string) {
    return render(
        <MemoryRouter initialEntries={[entry]}>
            <Routes>
                <Route path="/cases/:slug" element={<CaseDetail />} />
            </Routes>
        </MemoryRouter>
    )
}

describe('CaseDetail', () => {
    it('renders case detail for valid slug', () => {
        renderCaseDetail(`/cases/${firstSlug}`)
        const study = CASE_STUDIES.find((s) => s.slug === firstSlug)
        expect(study).toBeDefined()
        if (study) {
            expect(screen.getByText(study.title)).toBeInTheDocument()
        }
    })

    it('renders back or navigation link', () => {
        renderCaseDetail(`/cases/${firstSlug}`)
        const link = screen.getByRole('link', { name: /voltar|cases/i })
        expect(link).toBeInTheDocument()
    })
})

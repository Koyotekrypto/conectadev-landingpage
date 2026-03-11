import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Blog } from './Blog'

vi.mock('../hooks/useSanityQueries', () => ({
    useBlogPosts: vi.fn(() => ({ posts: [], loading: false })),
}))

const { useBlogPosts } = await import('../hooks/useSanityQueries')

const mockPosts = [
    {
        id: '1',
        slug: 'post-1',
        title: 'Post de teste',
        description: 'Descrição',
        content: '',
        date: '01 jan. 2025',
        category: 'Tendências',
        image: '',
        author: 'ConectaDev',
    },
] as { id: string; slug: string; title: string; description: string; content: string; date: string; category: string; image: string; author: string }[]

describe('Blog', () => {
    beforeEach(() => {
        vi.mocked(useBlogPosts).mockReturnValue({ posts: mockPosts, loading: false })
    })

    it('renders main and title', () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        )
        const main = document.querySelector('main')
        expect(main).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /insights de.*engenharia|IA empresarial/i })).toBeInTheDocument()
    })

    it('shows posts when not loading', () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        )
        expect(screen.getByText('Post de teste')).toBeInTheDocument()
    })

    it('shows loading state when loading', () => {
        vi.mocked(useBlogPosts).mockReturnValue({ posts: [], loading: true })
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        )
        const main = document.querySelector('main')
        expect(main).toBeInTheDocument()
    })
})

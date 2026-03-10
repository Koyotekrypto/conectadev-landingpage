import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import BlogPost from './BlogPost'

vi.mock('../hooks/useSanityQueries', () => ({
    useBlogPosts: vi.fn(() => ({ posts: [], loading: false })),
}))

const { useBlogPosts } = await import('../hooks/useSanityQueries')

const mockPost = {
    id: '1',
    slug: 'meu-post',
    title: 'Título do post',
    description: 'Descrição do post',
    content: '<p>Conteúdo</p>',
    date: '01 jan. 2025',
    category: 'Tendências',
    image: '',
    author: 'ConectaDev',
}

function renderBlogPost(entry: string) {
    return render(
        <MemoryRouter initialEntries={[entry]}>
            <Routes>
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </MemoryRouter>
    )
}

describe('BlogPost', () => {
    beforeEach(() => {
        vi.mocked(useBlogPosts).mockReturnValue({ posts: [mockPost], loading: false })
    })

    it('renders post when slug exists', () => {
        renderBlogPost('/blog/meu-post')
        expect(screen.getByText('Título do post')).toBeInTheDocument()
        expect(screen.getByText(/Voltar para o Blog/)).toBeInTheDocument()
    })

    it('renders not found when slug does not exist', () => {
        vi.mocked(useBlogPosts).mockReturnValue({ posts: [], loading: false })
        renderBlogPost('/blog/slug-inexistente')
        expect(screen.getByText(/Post não encontrado|não encontrado/i)).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /Voltar para o Blog/i })).toBeInTheDocument()
    })
})

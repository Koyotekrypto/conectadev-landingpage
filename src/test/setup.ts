import '@testing-library/jest-dom/vitest'

// jsdom does not implement scrollTo
window.scrollTo = () => {}

// jsdom does not implement matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
})

// jsdom does not implement IntersectionObserver (used by framer-motion, etc.)
class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null
    readonly rootMargin = ''
    readonly thresholds: ReadonlyArray<number> = []
    observe = () => {}
    unobserve = () => {}
    disconnect = () => {}
    takeRecords(): IntersectionObserverEntry[] { return [] }
}
window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver

// jsdom does not implement ResizeObserver (used by vapour-text-effect, etc.)
class MockResizeObserver implements ResizeObserver {
    observe = () => {}
    unobserve = () => {}
    disconnect = () => {}
}
window.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import ScrollToTop from './components/utils/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Cases = lazy(() => import('./pages/Cases').then((m) => ({ default: m.Cases })));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const FAQPage = lazy(() => import('./pages/FAQ'));

function RouteFallback() {
    return <div className="min-h-[60vh] flex items-center justify-center bg-transparent" aria-hidden />;
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<RouteFallback />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/cases" element={<Cases />} />
                    <Route path="/cases/:slug" element={<CaseDetail />} />
                    <Route path="/clinicas" element={<Navigate to="/cases/soapia-ai" replace />} />
                    <Route path="/restaurantes" element={<Navigate to="/cases/vibefood" replace />} />
                    <Route path="/faq" element={<FAQPage />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black text-white font-display selection:bg-orange-500/30 selection:text-orange-500">
                <ScrollToTop />
                <CustomCursor />
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

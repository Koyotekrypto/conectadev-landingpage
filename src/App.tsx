import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Cases } from './pages/Cases';
import { Clinicas } from './pages/Clinicas';
import { Restaurantes } from './pages/Restaurantes';
import FAQPage from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import CaseDetail from './pages/CaseDetail';
import ScrollToTop from './components/utils/ScrollToTop';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/cases/:slug" element={<CaseDetail />} />
                <Route path="/clinicas" element={<Clinicas />} />
                <Route path="/restaurantes" element={<Restaurantes />} />
                <Route path="/faq" element={<FAQPage />} />
            </Routes>
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

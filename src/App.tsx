import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { NewHero } from './components/sections/NewHero';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { ExpertiseReveal } from './components/sections/ExpertiseReveal';
import { Stats } from './components/sections/Stats';
import { Marquee } from './components/sections/Marquee';
import { Process } from './components/sections/Process';
import { FAQ } from './components/sections/FAQ';
import { Partners } from './components/sections/Partners';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main>
                <NewHero />
                <Hero />
                <Manifesto />
                <Services />
                <Portfolio />
                <ExpertiseReveal />
                <Stats />
                <Marquee />
                <Process />
                <FAQ />
                <Partners />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

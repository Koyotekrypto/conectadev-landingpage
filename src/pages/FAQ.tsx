import { FAQ } from '../components/sections/FAQ';
import { Process } from '../components/sections/Process';
import { Contact } from '../components/sections/Contact';

export default function FAQPage() {
    return (
        <main className="min-h-screen">
            <div className="pt-24">
                <FAQ />
                <Process />
                <Contact />
            </div>
        </main>
    );
}

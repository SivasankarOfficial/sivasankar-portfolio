import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StickySocials from './components/StickySocials';
import ScrollToTop from './components/ScrollToTop';
import abstractOrb from './assets/abstract_orb.png';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <HashRouter>
            <div className="bg-gray-50 text-gray-900 dark:bg-darkBg dark:text-gray-100 min-h-screen transition-colors duration-300">
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                {/* Global Background Images */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <img
                        src={abstractOrb}
                        alt="abstract background design"
                        className="absolute -right-64 top-40 w-[600px] h-[600px] opacity-[0.03] dark:opacity-[0.15] animate-spin-slow"
                    />
                    <img
                        src={abstractOrb}
                        alt="abstract background design"
                        className="absolute -left-64 bottom-40 w-[500px] h-[500px] opacity-[0.03] dark:opacity-[0.15] animate-float max-h-screen"
                    />
                </div>

                <StickySocials />
                <ScrollToTop />

                <main className="pt-20 relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;

import { useRef } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import resumePdf from '../assets/Sivasankar_Resume.pdf';
import { portfolioData } from '../data/portfolioData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProfilePic from '../components/ProfilePic';
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
    const { name, title, overview } = portfolioData.personalInfo;
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.hero-element', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2
        });
    }, { scope: containerRef });

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" ref={containerRef} className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0">
            {/* Background Animation */}
            <div className="absolute inset-0 z-[-1] opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-indigo-300 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 bg-400% animate-bg-shift blur-3xl"></div>
            </div>

            <div className="w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl order-2 lg:order-1 pt-4 lg:pt-0">
                        <p className="hero-element text-primary dark:text-blue-400 font-medium tracking-wide mb-2 uppercase text-sm">
                            Hi, my name is
                        </p>
                        <h1 className="hero-element text-5xl md:text-7xl font-extrabold tracking-tight mb-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-300% animate-text-gradient">
                            {name}.
                        </h1>
                        <h2 className="hero-element text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-6 group">
                            I'm a {title}.
                        </h2>
                        <p className="hero-element text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
                            {overview.split('\n\n')[0]}
                        </p>

                        <div className="hero-element flex flex-wrap gap-4">
                            <button
                                onClick={() => handleScrollTo('projects')}
                                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                            >
                                Check out my work <FiArrowRight />
                            </button>
                            <button
                                onClick={() => handleScrollTo('contact')}
                                className="bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                            >
                                Contact Me
                            </button>
                            <a
                                href={resumePdf}
                                download="Sivasankar_Resume.pdf"
                                className="bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                            >
                                <FiDownload /> Resume
                            </a>
                        </div>

                        <div className="hero-element flex gap-6 mt-8">
                            <a
                                href={portfolioData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] transition-colors text-3xl hover:-translate-y-1 transform duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={portfolioData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-3xl hover:-translate-y-1 transform duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={`mailto:${portfolioData.personalInfo.email}`}
                                className="text-gray-600 hover:text-[#EA4335] dark:text-gray-400 dark:hover:text-[#EA4335] transition-colors text-3xl hover:-translate-y-1 transform duration-300"
                                aria-label="Gmail"
                            >
                                <SiGmail />
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <ProfilePic src={profileImg} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

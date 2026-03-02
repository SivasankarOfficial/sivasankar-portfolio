import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const { personalInfo } = portfolioData;

    return (
        <footer className="py-8 bg-gray-100 dark:bg-darkBg border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
                <div className="flex gap-6 mb-4">
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] transition-colors text-2xl hover:-translate-y-1 transform duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-2xl hover:-translate-y-1 transform duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-600 hover:text-[#EA4335] dark:text-gray-400 dark:hover:text-[#EA4335] transition-colors text-2xl hover:-translate-y-1 transform duration-300"
                        aria-label="Gmail"
                    >
                        <SiGmail />
                    </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

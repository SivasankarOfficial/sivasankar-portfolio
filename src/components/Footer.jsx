import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { name } = portfolioData.personalInfo;

    return (
        <footer className="py-8 bg-gray-100 dark:bg-darkBg border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} {name}. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

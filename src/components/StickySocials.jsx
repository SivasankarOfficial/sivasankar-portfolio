import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const iconMap = {
    github: <FiGithub size={20} />,
    linkedin: <FiLinkedin size={20} />,
    mail: <FiMail size={20} />
};

const StickySocials = () => {
    return (
        <div className="hidden lg:flex flex-col fixed left-0 top-1/2 -translate-y-1/2 z-50">
            {portfolioData.socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-white/80 dark:bg-darkCard/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-3 mb-2 rounded-r-xl shadow-md hover:pl-6 hover:bg-primary dark:hover:bg-primary transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white"
                >
                    <span className="relative z-10">{iconMap[link.icon]}</span>

                    {/* Tooltip to show text on hover */}
                    <span className="absolute left-14 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 font-medium whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm pointer-events-none">
                        {link.name}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default StickySocials;

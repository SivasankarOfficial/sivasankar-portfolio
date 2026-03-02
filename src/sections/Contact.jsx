import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    const { personalInfo, socialLinks } = portfolioData;

    const iconMap = {
        github: <FaGithub className="text-xl" />,
        linkedin: <FaLinkedin className="text-xl" />,
        mail: <SiGmail className="text-xl" />
    };

    return (
        <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">
                What's Next?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold transition-colors duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
                Say Hello
            </a>

            <div className="mt-20 flex justify-center gap-8">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2 hover:-translate-y-1 transform"
                    >
                        {iconMap[link.icon]} <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;

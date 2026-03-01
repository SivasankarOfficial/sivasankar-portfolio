import { portfolioData } from '../data/portfolioData';

const About = () => {
    const { overview } = portfolioData.personalInfo;

    // Split paragraph by double newline to render separate p tags
    const paragraphs = overview.split('\n\n');

    return (
        <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    About Me
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
            </div>
        </section>
    );
};

export default About;

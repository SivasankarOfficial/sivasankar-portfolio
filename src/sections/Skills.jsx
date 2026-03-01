import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const categories = Object.keys(skills);

    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Technical Skills
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <div key={category} className="bg-white dark:bg-darkCard p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-1 duration-300 hover:animate-electric">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 capitalize mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
                            {category.replace('_', ' ')}
                        </h3>
                        <ul className="space-y-3">
                            {skills[category].map((skill, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

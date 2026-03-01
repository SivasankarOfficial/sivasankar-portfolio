import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Work Experience
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div className="space-y-12">
                {experience.map((job) => (
                    <div key={job.id} className="relative pl-8 md:pl-0">
                        {/* Timeline Line for Mobile */}
                        <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>

                        <div className="md:flex gap-8 group">
                            <div className="md:w-1/4 mb-4 md:mb-0 relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute right-[-2.35rem] top-2 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-darkBg group-hover:bg-primary transition-colors z-10"></div>
                                <div className="md:hidden absolute left-[-2.25rem] top-2 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-darkBg group-hover:bg-primary transition-colors z-10"></div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {job.company}
                                </h3>
                                <p className="text-primary font-medium dark:text-blue-400 mt-1">
                                    {job.duration}
                                </p>
                            </div>

                            <div className="md:w-3/4 relative">
                                {/* Timeline Line for Desktop */}
                                <div className="hidden md:block absolute left-[-2rem] top-6 bottom-[-3rem] w-px bg-gray-200 dark:bg-gray-800"></div>

                                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                    {job.role}
                                </h4>
                                <ul className="space-y-3">
                                    {job.description.map((desc, index) => (
                                        <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                            <span className="text-primary mt-1.5 opacity-60">▹</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

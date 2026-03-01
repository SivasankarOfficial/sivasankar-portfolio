import { portfolioData } from '../data/portfolioData';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Education & Certifications
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education View */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                        <FiBookOpen className="text-primary" /> Education
                    </h3>
                    <div className="space-y-8">
                        {education.map((item) => (
                            <div key={item.id} className="bg-white/50 dark:bg-darkCard/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {item.degree}
                                </h4>
                                <div className="flex justify-between items-center text-primary dark:text-gray-400 font-medium text-sm mt-2 mb-4">
                                    <span>{item.institution}</span>
                                    <span>{item.year}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications View */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                        <FiAward className="text-primary" /> Certifications
                    </h3>
                    <div className="space-y-6">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="flex gap-4 items-center bg-white/50 dark:bg-darkCard/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 group hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FiAward size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        {cert.name}
                                    </h4>
                                    <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                        <span>{cert.issuer}</span>
                                        <span>•</span>
                                        <span>{cert.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

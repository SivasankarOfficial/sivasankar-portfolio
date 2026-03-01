import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    Some Things I've Built
                </h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ElectricBorder from './ElectricBorder';

const ProjectCard = ({ project }) => {
    return (
        <ElectricBorder
            color="#3b82f6"
            speed={1}
            chaos={0.12}
            borderRadius={16}
            className="h-full flex flex-col group p-0"
        >
            <div className="bg-white dark:bg-darkCard overflow-hidden shadow-sm flex flex-col h-full rounded-[inherit] relative z-10">
                <div className="relative overflow-hidden aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.githubLink && project.githubLink !== '#' && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors">
                                <FiGithub size={20} />
                            </a>
                        )}
                        {project.liveLink && project.liveLink !== '#' && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors">
                                <FiExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ElectricBorder>
    );
};

export default ProjectCard;

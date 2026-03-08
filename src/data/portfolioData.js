import aiProject1 from '../assets/ai_project_1.png';
import aiProject2 from '../assets/ai_project_2.png';
import aiProject3 from '../assets/ai_project_3.png';

export const portfolioData = {
    personalInfo: {
        name: "Sivasankar S",
        title: "AI Systems Architect & Software Engineer",
        email: "sivasankarsiva2001@gmail.com",
        overview: "3 years of hands-on experience in cutting-edge web development, specializing in building responsive, high-performance intelligent interfaces using HTML, CSS, JavaScript, and React.js. Additional deep expertise in backend architecture using Node.js, Express.js, MongoDB, and PostgreSQL.\n\nStrong proficiency in building next-generation futuristic, user-friendly UI logic using modern HTML5, CSS3, JavaScript (ES6+), and React.js best practices mapping to advanced state-management workflows.\n\nExperienced in developing robust RESTful APIs and secure server-side applications using Node.js and Express.js to power full-stack neural development tasks.\n\nSkilled in working with MongoDB and PostgreSQL for building intelligent schemas, writing optimized data processing algorithms, and managing high-load data in cloud-based web applications.\n\nCapable of integrating third-party APIs, implementing machine-grade authentication workflows (JWT/OAuth), and ensuring completely secure backend data logic where required.\n\nFast learner with the ability to quickly adapt to novel neural networks, programming languages, and intelligent AI-assisted tooling in dynamic development environments.",
        github: "https://github.com/SivasankarOfficial",
        linkedin: "https://www.linkedin.com/in/sivasankar-s-8693ab218/"
    },
    socialLinks: [
        { name: "GitHub", url: "https://github.com/SivasankarOfficial", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/sivasankar-s-8693ab218/", icon: "linkedin" },
        { name: "Email", url: "mailto:sivasankarsiva2001@gmail.com", icon: "mail" }
    ],
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "ReactJs", "Animated UI/UX"],
        backend: ["Node.js", "Express.js", "RESTful Data Pipelines"],
        database_orm: ["MongoDB", "PostgreSQL", "Data Architecture", "Prisma"],
        tools: ["Git", "GitHub", "Cloud Deployment", "AI Tooling", "JWT Auth", "OAuth"]
    },
    experience: [
        {
            id: 1,
            role: "Senior Software Engineer",
            company: "The Cloudside Technologies",
            duration: "2025 - Present",
            description: [
                "Leading the development of highly responsive and interactive frontend applications using React.js and advanced predictive rendering.",
                "Designing reusable React UI components, implementing complex scalable state management, and optimizing the application cognitive load.",
                "Collaborating on full-stack AI/feature delivery using Node.js and Express, contributing to distributed REST API development."
            ]
        },
        {
            id: 2,
            role: "Software Engineer",
            company: "The Cloudside Technologies",
            duration: "2023 - 2024",
            description: [
                "Developed scalable full-stack web applications and integrated interactive, intelligent frontend interfaces.",
                "Worked with MongoDB and PostgreSQL for building database schemas, handling secure storage queries, and managing complex payloads.",
                "Implemented secure authentication workflows using JWT and handled sensitive API security interactions.",
                "Integrated third-party APIs and machine-learning driven tools into web applications to enable dynamic content and pipeline automation.",
                "Performed comprehensive API integration testing and debugging tools using Postman to strictly validate node endpoints."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Cybernetic Frontend Dashboard",
            description: "Developed interactive frontend AI-driven control dashboard rendering seamless user experiences with high performance graphical abstractions.",
            techStack: ["React.js", "JavaScript", "Advanced UI", "CSS3"],
            githubLink: "https://github.com/",
            liveLink: "https://demo.com",
            image: aiProject1
        },
        {
            id: 2,
            title: "Neural Network Backend Core",
            description: "Collaborated on full-stack features, integrating the frontend with a secure Node.js/Express backend algorithm, managing high-volume data streams.",
            techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
            githubLink: "https://github.com/",
            liveLink: "https://demo.com",
            image: aiProject2
        },
        {
            id: 3,
            title: "WapCar Content Automation AI",
            description: "Customized and integrated content management solutions alongside intelligent specific web solutions. Managed third-party pipeline automation for the WapCar platform.",
            techStack: ["CMS", "Third-Party Pipelines"],
            githubLink: "#",
            liveLink: "https://www.wapcar.my/",
            image: aiProject3
        }
    ],
    education: [
        {
            id: 1,
            degree: "Bachelor of Science, Information Technology",
            institution: "University",
            year: "2022",
            description: "Completed comprehensive studies in technology, algorithm logic programming, and complex systems architecture."
        }
    ],
    certifications: [
        {
            id: 1,
            name: "Certified Full Stack Systems Developer",
            issuer: "Certification Authority",
            year: "2022",
            link: "#"
        }
    ]
};

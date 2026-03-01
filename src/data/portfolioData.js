export const portfolioData = {
    personalInfo: {
        name: "Sivasankar S",
        title: "Senior Software Engineer",
        email: "sivasankarsiva2001@gmail.com",
        overview: "3 years of hands-on experience in frontend-focused web development, specializing in HTML, CSS, JavaScript, and React.js, with additional experience in backend development using Node.js, Express.js, MongoDB, and PostgreSQL.\n\nStrong proficiency in building responsive, high-performance, and user-friendly interfaces using modern HTML5, CSS3, JavaScript (ES6+), and React.js best practices.\n\nExperienced in developing RESTful APIs and server-side applications using Node.js and Express.js as part of full-stack development tasks.\n\nSkilled in working with MongoDB and PostgreSQL for building schemas, writing queries, and managing data in web applications.\n\nCapable of integrating third-party APIs, implementing authentication (JWT/OAuth), and ensuring secure backend logic where required.",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
    },
    socialLinks: [
        { name: "GitHub", url: "https://github.com/", icon: "github" },
        { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
        { name: "Email", url: "mailto:sivasankarsiva2001@gmail.com", icon: "mail" }
    ],
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "ReactJs", "Responsive UI"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        database_orm: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
        tools: ["Git", "GitHub", "npm", "yarn", "Postman", "WordPress", "JWT", "OAuth"]
    },
    experience: [
        {
            id: 1,
            role: "Senior Software Engineer",
            company: "The Cloudside",
            duration: "Present",
            description: [
                "Developed responsive and interactive frontend applications using HTML, CSS, JavaScript, and React.js, ensuring high performance.",
                "Built reusable React components, implemented state management, and optimized UI rendering.",
                "Collaborated on full-stack features using Node.js and Express, contributing to REST API development.",
                "Worked with MongoDB and PostgreSQL for building basic schemas and writing queries.",
                "Implemented basic authentication workflows using JWT and handled secure API interactions.",
                "Integrated third-party APIs into web applications to enable dynamic content and automation.",
                "Performed API testing and debugging using Postman to validate endpoints."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Interactive Frontend Applications",
            description: "Developed responsive frontend applications rendering seamless user experiences with high performance and optimized UI states.",
            techStack: ["React.js", "JavaScript", "HTML5", "CSS3"],
            githubLink: "https://github.com/",
            liveLink: "https://demo.com",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Full-Stack Web Module",
            description: "Collaborated on full-stack features, integrating frontend with Node.js/Express backend, managing databases and securing APIs.",
            techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
            githubLink: "https://github.com/",
            liveLink: "https://demo.com",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "CMS Integration Platform",
            description: "Customized and integrated WordPress plugins/themes alongside specific web solutions. Managed third-party API automation.",
            techStack: ["WordPress", "Third-Party APIs"],
            githubLink: "https://github.com/",
            liveLink: "https://demo.com",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
        }
    ],
    education: [
        {
            id: 1,
            degree: "Bachelor of Science, Information Technology",
            institution: "University",
            year: "2022",
            description: "Completed comprehensive studies in technology, programming, and system architecture."
        }
    ],
    certifications: [
        {
            id: 1,
            name: "Certified as a Full Stack Developer",
            issuer: "Certification Authority",
            year: "2022",
            link: "#"
        }
    ]
};

export const portfolioData = {
    name: 'Debasish Das',
    title: 'Full-Stack Developer & UI/UX Designer',
    tagline: 'Building beautiful, functional digital experiences',
    email: 'welldebasish@gmail.com',
    phone: '9439450858',
    location: 'India',

    about: `I'm a passionate full-stack developer with 2+ years of experience crafting elegant solutions to complex problems. I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me exploring design trends, contributing to open source, or documenting my learning journey.`,

    skills: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vue.js'],
        backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
        tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'CI/CD'],
    },

    projects: [
        {
            id: 1,
            title: 'Design System Pro',
            description: 'A comprehensive design system with 100+ reusable components, built with React and Storybook. Includes documentation, accessibility guidelines, and animated component previews.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d440a0b0?w=500&h=300&fit=crop',
            tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
        {
            id: 2,
            title: 'Analytics Dashboard',
            description: 'Real-time analytics platform with interactive charts, user behavior tracking, and customizable dashboards. Built with Next.js and D3.js for advanced visualizations.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
        {
            id: 3,
            title: 'Social Commerce App',
            description: 'Full-stack e-commerce platform with social features, real-time notifications, and payment integration. Mobile-first design with React Native and Node.js backend.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
            tags: ['React Native', 'Node.js', 'Stripe', 'Socket.io'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
        {
            id: 4,
            title: 'AI Content Generator',
            description: 'Intelligent content generation tool powered by GPT-4 API. Features include template-based generation, batch processing, and content history management.',
            image: 'https://images.unsplash.com/photo-1677442d019cecf8978b4e580fcc2f4c9c6e1d7a?w=500&h=300&fit=crop',
            tags: ['React', 'OpenAI API', 'Express', 'MongoDB'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
    ],

    experience: [
        {
            id: 1,
            role: "Full Stack Engineer",
            company: "Think Talent Services",
            period: "2025 - Present",
            description: "Working on both frontend and backend development. Migrated a legacy Java Spring Boot 2 application to Spring Boot 3, resolving Jakarta namespace changes and dependency compatibility issues. Enhanced Spring Security by replacing deprecated WebSecurityConfigurerAdapter with SecurityFilterChain configuration, improving authentication and authorization handling. Developed responsive UI using React and TypeScript, integrated REST APIs, handled CORS configuration, and participated in deployment and version control using Git and GitHub.",
            skills: [
                "React",
                "TypeScript",
                "Java",
                "Spring Boot 3",
                "Spring Security",
                "REST APIs",
                "Git",
                "GitHub"
            ]
        },
        {
            id: 2,
            role: "Software Engineering Intern",
            company: "Think Talent Services",
            period: "2024 - 2025",
            description: "Contributed to development and maintenance of web applications using React and Spring Boot. Implemented API integration, form validation, and state management. Fixed bugs, improved UI responsiveness, and assisted in backend endpoint development. Worked with Git-based workflows and learned debugging, API testing, and deployment fundamentals.",
            skills: [
                "React",
                "JavaScript",
                "Java",
                "Spring Boot",
                "REST APIs",
                "Git",
                "GitHub"
            ]
        }
        /*{
            id: 3,
            role: 'Frontend Developer',
            company: 'DesignStudio',
            period: '2019 - 2020',
            description: 'Developed responsive web applications and collaborated closely with design team. Improved mobile performance by 35%.',
            skills: ['React', 'CSS', 'Figma'],
        },*/
    ],

    socialLinks: [
        {label: 'GitHub', url: 'https://github.com/iamddas', icon: 'Github'},
        {label: 'LinkedIn', url: 'www.linkedin.com/in/debasishdas199', icon: 'Linkedin'},
        {label: 'Twitter', url: 'https://x.com/dasdebasish199', icon: 'Twitter'},
        {label: 'Email', url: 'mailto:welldebasish@gmail.com', icon: 'Mail'},
    ],
};

export const portfolioData = {
    name: 'Debasish Das',
    title: 'Software Engineer — Frontend-leaning Full Stack',
    tagline: 'Building thoughtful web experiences from interface to API',
    email: 'welldebasish@gmail.com',
    location: 'India',
    linkedin: 'https://www.linkedin.com/in/debasishdasofficial',
    github: 'https://github.com/iamddas',

    about: `I'm a passionate full-stack developer with ${Math.max(new Date().getFullYear() - 2024, 0)}+ years of experience crafting elegant solutions to complex problems. I specialize in React, TypeScript, and Spring Boot. When I'm not coding, you'll find me exploring design trends, contributing to open source, or documenting my learning journey.`,

    skills: {
        frontend: [
            'React',
            'TypeScript',
            'HTML5 / CSS3',
            'Responsive Design',
            'React Hooks',
            'Form Handling & Validation',
            'API Integration (Axios/Fetch)',
            'Component-Based Architecture',
        ],

        backend: [
            'Spring Boot',
            'Spring Security',
            'REST API Development',
            'JWT / Session Auth',
            'MVC Architecture',
            'JPA / Hibernate',
            'Exception Handling',
        ],

        database: [
            'MySQL',
            'PostgreSQL',
            'Schema Design',
            'Entity Relationships',
        ],

        tools: [
            'Git & GitHub',
            'Postman',
            'Maven / Gradle',
            'IntelliJ IDEA',
            'VS Code',
            'Linux Basics',
            'Debugging & Log Analysis',
        ],

        practices: [
            'Clean Code',
            'Code Refactoring',
            'Modular Design',
            'Reading Existing Codebases',
        ],
    },

    projects: [
        {
            id: 1,
            title: 'Design System Pro',
            description: 'A comprehensive design system with 100+ reusable components, built with React and Storybook. Includes documentation, accessibility guidelines, and animated component previews.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d440a0b0?w=600&h=340&fit=crop',
            tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
            github: 'https://github.com/iamddas',
            demo: 'https://github.com/iamddas',
        },
        {
            id: 2,
            title: 'Analytics Dashboard',
            description: 'Real-time analytics platform with interactive charts, user behavior tracking, and customizable dashboards. Built with Next.js and D3.js for advanced visualizations.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
            tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com/iamddas',
            demo: 'https://github.com/iamddas',
        },
        {
            id: 3,
            title: 'Social Commerce App',
            description: 'Full-stack e-commerce platform with social features, real-time notifications, and payment integration. Mobile-first design with React Native and Node.js backend.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop',
            tags: ['React Native', 'Node.js', 'Stripe', 'Socket.io'],
            github: 'https://github.com/iamddas',
            demo: 'https://github.com/iamddas',
        },
        {
            id: 4,
            title: 'AI Content Generator',
            description: 'Intelligent content generation tool powered by GPT-4 API. Features include template-based generation, batch processing, and content history management.',
            image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop',
            tags: ['React', 'OpenAI API', 'Express', 'MongoDB'],
            github: 'https://github.com/iamddas',
            demo: 'https://github.com/iamddas',
        },
    ],

    experience: [
        {
            id: 1,
            role: 'Full Stack Engineer',
            company: 'Think Talent Services',
            period: '2025 – Present',
            description: 'Working on both frontend and backend development. Migrated a legacy Java Spring Boot 2 application to Spring Boot 3, resolving Jakarta namespace changes and dependency compatibility issues. Enhanced Spring Security by replacing deprecated WebSecurityConfigurerAdapter with SecurityFilterChain configuration. Developed responsive UI using React and TypeScript, integrated REST APIs, and handled CORS configuration.',
            skills: ['React', 'TypeScript', 'Spring Boot 3', 'Spring Security', 'REST APIs', 'Git'],
        },
        {
            id: 2,
            role: 'Software Engineering Intern',
            company: 'Think Talent Services',
            period: '2024 – 2025',
            description: 'Contributed to development and maintenance of web applications using React and Spring Boot. Implemented API integration, form validation, and state management. Fixed bugs, improved UI responsiveness, and assisted in backend endpoint development. Worked with Git-based workflows and learned debugging, API testing, and deployment fundamentals.',
            skills: ['React', 'JavaScript', 'Spring Boot', 'REST APIs', 'Git'],
        },
    ],

    socialLinks: [
        { label: 'GitHub',   url: 'https://github.com/iamddas',                      icon: 'Github'   },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/debasishdasofficial', icon: 'Linkedin' },
        { label: 'Twitter',  url: 'https://x.com/dasdebasish199',                    icon: 'Twitter'  },
        { label: 'Email',    url: 'mailto:welldebasish@gmail.com',                    icon: 'Mail'     },
    ],
};

import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    coderoom,
    crosslynxus_logo,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Crosslynx Technologies Servives Pvt. Ltd.",
        icon: crosslynxus_logo,
        date: "Jul 2024 - Ongoing",
        points: [
            "Developed scalable RESTful APIs using Django REST Framework with optimized PostgreSQL and Redis caching for enhanced performance.",
            "Implemented IoT device connectivity with the MQTT Pub/Sub model using EMQX, ensuring seamless real-time data processing.",
            "Optimized backend workflows with Pandas, NumPy, Celery, and DRF, enabling efficient data processing and asynchronous task execution.",
            "Managed high-traffic API requests for navigation, weather, and document verification while collaborating with cross-functional teams."
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Crosslynx Technologies Servives Pvt. Ltd.",
        icon: crosslynxus_logo,
        date: "Jan 2024 - Jun 2024",
        points: [
            "Built an automated test platform for remote meter testing with real-time reporting, background job scheduling, and seamless execution.",
            "Developed a scalable Pytest framework integrating SOAP APIs for automated test execution and efficient data retrieval.",
            "Designed a secure multi-tenant system using Microsoft Auth 2.0 and PostgreSQL to manage test records with high data accuracy."
        ],
    }
];

const projects = [
    {
        name: "CODEROOM",
        description: "A real-time collaborative coding platform that enables seamless teamwork with synchronized code editing, voice calls, and chat. Create virtual rooms, work together effortlessly, and access your projects anytime for continuous collaboration and efficient problem-solving.",
        tags: ["reactjs", "nodejs", "expressjs", "mongodb", "socket.io"],
        image: coderoom,
        source_code_link: "https://coderoom-anurag.netlify.app/",
    },
    {
        name: "ATTENDANCE TRACKER",
        description: "A real-time collaborative coding platform that enables seamless teamwork with synchronized code editing, voice calls, and chat. Create virtual rooms, work together effortlessly, and access your projects anytime for continuous collaboration and efficient problem-solving.",
        tags: ["reactjs", "nodejs", "expressjs", "mongodb", "socket.io"],
        image: coderoom,
        source_code_link: "https://github.com/",
    },

];

export { technologies, experiences, projects };
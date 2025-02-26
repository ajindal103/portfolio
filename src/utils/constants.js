import python from "../assets/tech/python.png";
import cpp from "../assets/tech/cpp.png";
import django from "../assets/tech/django.png";
import postgresql from "../assets/tech/postgresql.png";
import redis from "../assets/tech/redis.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import nodejs from "../assets/tech/nodejs.png";
import expressjs from "../assets/tech/expressjs.png";
import mongodb from "../assets/tech/mongodb.png";
import docker from "../assets/tech/docker.png";
import git from "../assets/tech/git.png";
import redux from "../assets/tech/redux.png";
import azure from "../assets/tech/azure.png";

import crosslynxus_logo from "../assets/company/crosslynxus_logo.png";
import coderoom from "../assets/projects/project-coderoom.png";

const navLinks = [
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

const skills = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Django",
        icon: django,
    },
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Azure DevOps",
        icon: azure,
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
        description: "A real-time AI-powered attendance tracker that automates attendance management with face recognition, enabling seamless tracking, instant verification, and accurate record-keeping. Easily monitor attendance, enhance security, and access data anytime for efficient management.",
        tags: ["python", "tkinter", "opencv", "mysql", "numpy"],
        image: coderoom,
        source_code_link: "https://github.com/ajindal103/attendance-tracker",
    },

];

export { navLinks, skills, experiences, projects };
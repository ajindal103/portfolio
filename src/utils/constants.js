import python from "../assets/tech/python.png";
import django from "../assets/tech/django.png";
import fastapi from "../assets/tech/fastapi.png"
import postgresql from "../assets/tech/postgresql.png";
import redis from "../assets/tech/redis.png";
import cpp from "../assets/tech/cpp.png";
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
import postman from "../assets/tech/postman.png";
import azure from "../assets/tech/azure.png";
import celery from "../assets/tech/celery.png";
import ws from "../assets/tech/websockets.svg";
import mqtt from "../assets/tech/mqtt.png";

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
        name: "Django",
        icon: django,
    },
    {
        name: "FastAPI",
        icon: fastapi,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "Celery",
        icon: celery,
    },
    {
        name: "WebSockets",
        icon: ws,
    },
    {
        name: "MQTT",
        icon: mqtt,
    },
    {
        name: "C++",
        icon: cpp,
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
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "GIT",
        icon: git,
    },
    {
        name: "Postman",
        icon: postman,
    },
    {   
        name: "Docker",
        icon: docker,
    },
    {
        name: "Azure DevOps",
        icon: azure,
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
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Crosslynx Technologies Servives Pvt. Ltd.",
        icon: crosslynxus_logo,
        date: "Jul 2024 - Present",
        points: [
            "Designed and implemented scalable REST APIs for tracker onboarding, trip lifecycle, telemetry persistence, and meter data orchestration using Django/DRF, FastAPI, and PostgreSQL.",
            "Integrated real-time IoT telemetry ingestion using MQTT (EMQX broker) to process high-frequency GPS and sensor data streams with validation and structured storage.",
            "Improved performance and scalability using Redis caching, asynchronous processing, and PostgreSQL query optimization, enabling stable API latency while supporting 1000+ concurrent trackers.",
            "Built a high-throughput FastAPI billing microservice capable of generating thousands of bills per second, performing real-time wallet deductions using Redis + Celery, and optimizing data-heavy APIs for large datasets."
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Crosslynx Technologies Servives Pvt. Ltd.",
        icon: crosslynxus_logo,
        date: "Jan 2024 - Jun 2024",
        points: [
            "Developed an automated test execution platform using Python, Django, and Pytest, enabling remote test execution, real-time reporting, and reducing manual testing effort by 60%.",
            "Built a multi-tenant testing framework integrated with SOAP APIs, PostgreSQL, and Microsoft OAuth 2.0, supporting 10,000+ meters while maintaining 99.9% data accuracy.",
        ],
    }
];

const projects = [
    {
        name: "CODEROOM",
        description: "A real-time collaborative coding platform that enables seamless teamwork with synchronized code editing, voice calls, and chat. Create virtual rooms, work together effortlessly, and access your projects anytime for continuous collaboration and efficient problem-solving.",
        tags: ["reactjs", "nodejs", "express", "mongodb", "socket.io"],
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
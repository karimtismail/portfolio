import { Github, Twitter, Figma, Linkedin, Facebook } from "lucide-react";

import LogoJava from "/public/images/logos/java.svg";
import LogoSpringBoot from "/public/images/logos/Spring_Boot.svg";
import LogoOracle from "/public/images/logos/oraclesvg.svg";
import LogoDocker from "/public/images/logos/docker.svg";
import LogoMSSQL from "/public/images/logos/mssql.svg";
import LogoMySql from "/public/images/logos/mysql.svg";
import LogoAngular from "/public/images/logos/angular.svg";
import LogoNextJs from "/public/images/logos/icon-nextjs.svg";
import LogoPrometheus from "/public/images/logos/Prometheus.svg";
import LogoGrafana from "/public/images/logos/Grafana_icon.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoAsset from "/public/images/logos/asset.webp";
import LogoIntercom from "/public/images/logos/Intercom-Logo-1.png";
import ProjectPOSH from "/public/images/projects/posh.png";
import ProjectChatUP from "/public/images/projects/chatup.png";
import ProjectAirMAK from "/public/images/projects/airmak.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
  CourceDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/karimtismail",
  GITHUB_REPO: "https://github.com/karimtismail/My-Profile",
  LINKEDIN: "https://linkedin.com/in/karimtismail",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: Github,
    url: "https://github.com/karimtismail",
  },
  {
    id: 2,
    icon: Linkedin,
    url: "https://linkedin.com/in/karimtismail",
  },
  {
    id: 3,
    icon: Facebook,
    url: "https://www.facebook.com/karimTismail",
  },
];
export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Java",
    logo: LogoJava,
    url: "https://www.java.com/",
  },
  {
    label: "Spring",
    logo: LogoSpringBoot,
    url: "https://spring.io/projects/spring-boot",
  },
  {
    label: "Oracle Database",
    logo: LogoOracle,
    url: "https://www.oracle.com/database/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "MSSQL",
    logo: LogoMSSQL,
    url: "https://www.microsoft.com/en-us/sql-server",
  },
  {
    label: "MySQL",
    logo: LogoMySql,
    url: "https://www.mysql.com/",
  },
  {
    label: "Angular",
    logo: LogoAngular,
    url: "https://angular.dev/",
  },
  {
    label: "NextJs",
    logo: LogoNextJs,
    url: "https://nextjs.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Prometheus",
    logo: LogoPrometheus,
    url: "https://prometheus.io/",
  },
  {
    label: "Grafana",
    logo: LogoGrafana,
    url: "https://grafana.com/",
  },
];

export const COURCES: CourceDetails[] = [
  {
    id: "cloud",
    name: "[NEW] Master Microservices with SpringBoot,Docker,Kubernetes",
    institution: "Udemy",
    duration: "40 hour",
    progress: 50,
    skills: [
      "Spring Cloud",
      "Docker",
      "Kibernetes",
      "Microservice Architecture",
    ],
  },
  {
    id: "design-pattern",
    name: "Ultimate Design Patterns",
    institution: "Udemy",
    duration: "11 hour",
    progress: 15,
    skills: ["Solid Principles", "Design Patterns"],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoIntercom,
    logoAlt: "Intercom logo",
    position: "Backend Engineer",
    startDate: new Date(2023, 11),
    currentlyWorkHere: true,
    summary: [
      "Collaborating with cross-functional teams to deliver robust backend solutions for prosecution-related digital services.",
      "Working extensively with Java technologies, Spring Boot, Oracle, Docker, and JWT to build secure and scalable services.",
      "Improving system architecture and database performance to handle complex document extraction processes.",
      "Integrating APIs with frontend technologies and ensuring seamless communication between microservices.",
    ],
  },
  {
    logo: LogoAsset,
    darkModeLogo: LogoAsset,
    logoAlt: "Asset logo",
    position: "Software Developer",
    startDate: new Date(2023, 8),
    endDate: new Date(2023, 11),
    summary: [
      "Collaborated with cross-functional teams to gather requirements and meet project deliverables:",
      "Worked with technologies such as Fiorano middleware, Message Queue, Middleware, ESB, Java Message Service (JMS), RESTful Web-Services, SOAP.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "AirMAK - Property Community Platform",
    description:
      "Developed as part of the ITI 9-Month program, AirMAK is a comprehensive platform for renting flats or rooms in Egypt. Users can browse through hundreds of verified listings, and complete secure online payments. The platform streamlines the entire rental process, from search to occupancy.",
    url: "https://github.com/karimtismail/ITI-Graduation-Project",
    previewImage: ProjectAirMAK,
    technologies: [
      "Spring Boot",
      "Hibernate",
      "MySql",
      "Angular",
      "TypeScript",
      "Google Maps",
      "Google Authentication",
      "Stripe API",
    ],
  },
  {
    name: "ChatUP - Desktop Messaging Application",
    description:
      "ChatUP, another significant project from the ITI 9-Month curriculum, is a sophisticated desktop messaging application. This Java-based project demonstrates proficiency in desktop application development and database management. It features real-time messaging, user authentication, and message persistence, showcasing practical application of core Java concepts.",
    url: "https://github.com/karimtismail/ChatUP",
    previewImage: ProjectChatUP,
    technologies: ["JavaX", "Java", "JDBC"],
  },
  {
    name: "POSH - Auto Parts E-Commerce",
    description:
      "POSH represents a culmination of web development skills acquired during the ITI 9-Month program. This comprehensive e-commerce platform for auto parts leverages a wide array of technologies, from Jakarta EE to front-end frameworks. The project highlights expertise in building scalable, database-driven web applications with features like product cataloging, user authentication, and secure transactions.",
    url: "https://github.com/karimtismail/POSH-WebApplication",
    previewImage: ProjectPOSH,
    technologies: [
      "Java",
      "Apache Tomcat 10.1",
      "Jakarta Persistence (Hibernate)",
      "MySQL",
      "Jakarta Server Pages",
      "Jakarta Servlet",
      "Jakarta Standard Tag Library",
      "Ajax",
      "JSON",
      "Bean Validation (Hibernate Validator)",
      "Jakarta Mail",
      "HTML5",
      "JavaScript",
      "JQuery",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
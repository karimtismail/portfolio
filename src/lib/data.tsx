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
import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
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
    name: "ChatUP",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: ["JavaX", "Java", "JDBC"],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
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

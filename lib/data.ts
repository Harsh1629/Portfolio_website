import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web and Core Team Member",
    Company: "Technology Adventure Society",
    location: "Kharagpur, India",
    description:
      "In charge of developing a user landing page so that participants can sign up for the adventure weekend event",
      icon: React.createElement(FaReact),
    date: "Feb 2023-Present",
  },
  {
    title: "Development Member",
    Company: "Developers' Society",
    location: "Kharagpur, India",
    description:
      "Responsible for designing and implementing the graphic layout for the Apnalnsti app - a comprehensive platform that streamlines all your needs for a smoother campus experience",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - Present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Diwali Sales Analysis:",
    description:
      "Performed Exploratory Data Analysis (EDA) using pandas, matplotlib, and seaborn libraries. Identified the most popular product categories, which will aid in inventory planning and deciding on lucrative offers to increase sales.",
    tags: ["EDA(Exploratoty Data Analysis)", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Movie-Recommender System:",
    description:
      "The implementation demonstrated Bag of Words algorithm and efficacy in analyzing user preferences along with providing noteworthy movie suggestions, to enhance the overall user experience. ",
    tags: ["Streamlit", "Bag of Words", "Machine Learning"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Front-end Development",
  "Data Science",
  "Machine Learning",
  "Java",
  "Python",
  "C++",
  "Git",
 
] as const;


//"HTML",
// "CSS",
// "JavaScript",
// "Next.js",
// "Tailwind",
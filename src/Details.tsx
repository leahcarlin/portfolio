// Tech stack images
import aws from "../src/assets/aws.svg";
import css from "../src/assets/css3.svg";
import express from "../src/assets/express.svg";
import figma from "../src/assets/figma.svg";
import git from "../src/assets/git.svg";
import github from "../src/assets/github.svg";
import html from "../src/assets/html5.svg";
import js from "../src/assets/javascript.svg";
import json from "../src/assets/json.svg";
import nodejs from "../src/assets/nodejs.svg";
import postgresSQL from "../src/assets/postgres_sql.svg";
import react from "../src/assets/react.svg";
import redux from "../src/assets/redux.svg";
import sass from "../src/assets/sass.svg";
import typescript from "../src/assets/typescript.svg";
import vue from "../src/assets/vuejs.svg";
// Project images
import mosaic from "../src/assets/mosaic.png";
import disney from "../src/assets/disney.jpg";

export interface IExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
}

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const workDetails: IExperience[] = [
  {
    title: "Frontend / Full Stack Developer",
    company: "Epiphany RBC",
    location: "Amsterdam, Netherlands",
    duration: "2021 - 2025",
  },
  {
    title: "Software Trainer & Special Projects Manager",
    company: "Massachusetts General Hospital",
    location: "Boston, Massachusetts",
    duration: "2015 - 2021",
  },
  {
    title: "Business Owner",
    company: "Find Your Fit",
    location: "Amsterdam, Netherlands",
    duration: "2017 - 2021",
  },
  {
    title: "Clinical Social Worker",
    company: "Massachusetts General Hospital",
    location: "Boston, Massachusetts",
    duration: "2014 - 2016",
  },
];

export const educationDetails: IExperience[] = [
  {
    title: "Codaisseur",
    company: "Full Stack Development Certification",
    location: "Amsterdam, Netherlands",
    duration: "2021",
  },
  {
    title: "Skillcrush",
    company: "Web Development and Design Certification",
    location: "Online",
    duration: "2021",
  },
  {
    title: "Boston College",
    company: "Master's Degree in Clinical Social Work",
    location: "Boston, Massachusetts",
    duration: "2007 - 2010",
  },
  {
    title: "Boston College",
    company: "Bachelor's Degree in Human Development",
    location: "Boston, Massachusetts",
    duration: "2005 - 2009",
  },
];

export const techStackDetails = [
  { url: aws, title: "AWS" },
  { url: css, title: "CSS3" },
  { url: express, title: "Express" },
  { url: figma, title: "Figma" },
  { url: git, title: "Git" },
  { url: github, title: "GitHub" },
  { url: html, title: "HTML5" },
  { url: js, title: "Javascript" },
  { url: json, title: "JSON" },
  { url: nodejs, title: "NodeJS" },
  { url: postgresSQL, title: "PostgreSQL" },
  { url: react, title: "React" },
  { url: redux, title: "Redux" },
  { url: sass, title: "SASS" },
  { url: typescript, title: "Typescript" },
  { url: vue, title: "Vue3" },
];

export const projectDetails = [
  {
    title: "Photo Mosaic Generator",
    image: mosaic,
    description:
      "Built in VueJS, upload an image to create an new image composed of smaller photos, sourced from Unsplash API to showcase my front and backend skills",
    techstack: "HTML/CSS, JavaScript, VueJS, Express",
    previewLink: "https://leahcarlin.github.io/vue-mosaic-generator/",
    githubLink: "https://github.com/leahcarlin/vue-mosaic-generator",
  },
  {
    title: "Disney Quiz",
    image: disney,
    description: `Built in React to demonstrate my frontend capabilities, utilizing DisneyAPI, state management and GSAP animations`,
    techstack: "HTML/CSS, JavaScript, React, GSAP",
    previewLink: "https://leahcarlin.github.io/react-disney-quiz/",
    githubLink: "https://github.com/leahcarlin/react-disney-quiz",
  },
];

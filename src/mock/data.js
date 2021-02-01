import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Software Developer in the Tampa Bay Area. I am currently a student in Lambda School Full Stack - Web Development, polishing my coding skills. I have background knowledge of React, Javascript, HTML, CSS, Node.js, Python, and more.',
  paragraphTwo: 'When I am not designing a new app or website, you can find me at the beach with a bloody mary in hand; or playing an MMORPG.',
  paragraphThree: 'Feel free to contact me if you have any ideas for an app or webpage',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'express-groomer',
    title: 'Express Groomer',
    info: 'An app that allows customers to search for pet groomers and request appointments; while allowing pet groomers to list their services and accept appointments.',
    info2: 'HTML | CSS | JavaScript | React | Context Api | Docker | pgAdmin 4 ',
    url: 'https://b.expressgroomer.dev/info',
    repo: 'https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-FE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Expat-Journal',
    title: 'Expat-Journal',
    info: 'A website that allows users to show off the places they have been and their memories.',
    info2: 'NodeJS | Express | SQL | Knex | SQLite3 | PostgreSQL',
    url: 'https://5f6d32b431b9c9a934d4f999--hungry-saha-bc9fd0.netlify.app/login',
    repo: 'https://github.com/Build-Week-PTCT-Expat-Journal-3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'water-my-plants',
    title: 'Water My Plants',
    info: 'WaterMyPlants is an easy to use interface for creating a plant watering schedule tailored to each individual plant.',
    info2: 'HTML | CSS | JavaScript | React | Redux',
    url: 'https://waterrmyplants3.netlify.app/index.html',
    repo: 'https://github.com/Build-Week-Water-Plants3', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'asf@mail.usf.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andre-freeman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/waveownage',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

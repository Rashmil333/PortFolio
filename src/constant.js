import BannerLogo from './static/tropical-leaves.png';
import BG from './static/flowerFavicon.jpg';
import githubIcon from './static/githubIcon.svg';
import gmailIcon from './static/gmailIcon.svg';
import telePhoneIcon from './static/telephoneIcon.svg';
import copyIcon from './static/copyIcon.svg';
import GoGreenCover from './static/go-greenImage.PNG';
import rightarrowIcon from './static/right-arrow1.svg';


export {
    BannerLogo,
    BG,
    gmailIcon,
    githubIcon, telePhoneIcon, copyIcon, GoGreenCover, rightarrowIcon
};

export const Links = [
    { icon: telePhoneIcon, value: '8859472687' },
    { icon: gmailIcon, value: 'rashmilrajpoot333@gmail.com' },
    { icon: githubIcon, value: 'https://github.com/Rashmil333?tab=repositories', target: 'github' },
]


export const Description = "Rashmil Rajpoot is a software developer mostly engaged in front-end using React and made a project using MERN stack. Rashmil have graduated in IT in 2022 with an aggregate of 74%.He has worked for 2 years as a Front-End developer."

export const Paths = {
    HOME: '/',
    EDUCATION: '/education',
    SKILLS: '/skills',
    PROJECTS: '/projects'
};

export const CATEGORIES = {
    EDUCATION: 'EDUCATION',
    SKILLS: 'SKILLS',
    PROJECTS: 'PROJECTS'
}

export const MainLinks = [
    { title: CATEGORIES.EDUCATION, path: Paths.EDUCATION },
    { title: CATEGORIES.SKILLS, path: Paths.SKILLS },
    { title: CATEGORIES.PROJECTS, path: Paths.PROJECTS },
]

export const VARIANTS = {
    HEADER: 'header',
    FOOTER: 'footer'
}


export const EDUCATIONARRAY = [
    {
        title: 'Currently learning',
        description: 'Python DSA, Nest'
    },
    {
        title: 'Xcelpros Technologies private Limited(during grad)',
        description: 'Full time Engaged on NextJs, typescript, scss,graphql'
    },
    {
        title: 'B-TECH IT',
        description: 'aggregate 74%'
    },
    {
        title: 'Internship on React',
        description: 'In Oye labs'
    },
    {
        title: 'Internship on React',
        description: 'In Triluxo Technologies private limited.'
    },
    {
        title: 'Mern Stack (DEPRESSOR)',
        description: 'A type of social networking website.'
    },
    {
        title: 'Python',
        description: 'Achieved 4.2 stars on hackkerank till nov 2021'
    },
    {
        title: 'Coursera courses on python',
        description: 'Around 4 certificates related to python basics,algos,some data structures'
    },
    {
        title: '12th Education(Science)',
        description: '76%'
    },
    {
        title: '10th',
        description: '88%'
    },
]

export const SKILLSARRAY = [
    {
        title: 'NextJS',
        description: 'Last worked recently',
        level: 'Intermediate'
    },
    {
        title: 'React JS',
        description: 'Last worked Daily',
        level: 'More Than Intermediate'
    },
    {
        title: 'SCSS',
        description: 'Last worked Daily',
        level: 'Intermediate'
    },
    {
        title: 'Graphql',
        description: 'Last worked recently in Xcelpros',
        level: 'Beginner'
    },
    {
        title: 'Typescript',
        description: 'Last worked recently in Xcelpros',
        level: 'Intermediate'
    },
    {
        title: 'Web Sockets',
        description: 'Last worked recently in Xcelpros and in MERN Project.',
        level: 'More than beginner'
    },
    {
        title: 'Node Js',
        description: 'Last worked in nov 2021 for backend using express.',
        level: 'Beginner'
    },
    {
        title: 'Python',
        description: 'Last worked in nov 2021',
        level: 'Beginner'
    },
    {
        title: 'HTML',
        description: 'Last worked daily',
        level: 'No -level'
    },
    {
        title: 'CSS',
        description: 'Last worked daily',
        level: 'Intermediate'
    },
    {
        title: 'JS',
        description: 'Last worked daily',
        level: 'Intermediate'
    }
]
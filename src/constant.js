import BannerLogo from './static/tropical-leaves.png';
import BG from './static/flowerFavicon.jpg';
import githubIcon from './static/githubIcon.svg';
import gmailIcon from './static/gmailIcon.svg';
import telePhoneIcon from './static/telephoneIcon.svg';
import copyIcon from './static/copyIcon.svg';
import GoGreenCover from './static/go-greenImage.PNG';
import rightarrowIcon from './static/right-arrow1.svg';
import rightarrowIconNew from './static/rightArrowNew.svg';
import rightarrowIconLatest from './static/rightArrowLatest.svg';
import festivaleCover from './static/festival.png';
import bubblesCover from './static/bubbles.png';
import aumCover from './static/aum.png';
import bmiCover from './static/bmi.png';
import depressorCover from './static/depressor.png';
import fireflyCover from './static/firefly.png';
import lightsCover from './static/lights.png';
import loaderCover from './static/loader.png';
import cardThreeCover from './static/cardthree.png';
import babyWritingCover from './static/babyWriting.png';
import rightArrowRed from './static/rightArrowred.svg';
import { CallSVG, GithubSvg, Mailsvg } from './SVG/LinksIcons';

export {
    BannerLogo,
    BG,
    gmailIcon,
    githubIcon, telePhoneIcon, copyIcon, GoGreenCover, rightarrowIcon, rightarrowIconNew, rightarrowIconLatest,
    bubblesCover, aumCover, bmiCover, depressorCover, fireflyCover, lightsCover, loaderCover, festivaleCover, cardThreeCover, babyWritingCover, rightArrowRed
};

export const Links = [
    { activeIcon: telePhoneIcon, value: '+91 8859472687', icon: <CallSVG /> },
    { activeIcon: gmailIcon, value: 'rashmilrajpoot333@gmail.com', icon: <Mailsvg /> },
    { activeIcon: githubIcon, value: 'https://github.com/Rashmil333?tab=repositories', icon: <GithubSvg />, target: 'github' },
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
];


export const GIHUBARRAY = [
    {
        title: 'Pagination with MultipleFilters',
        description: 'This repository have the basic logics of multiple filterings of data and implementation of pagination concepts by using simple indexes logic'
    },
    {
        title: 'Weather App',
        description: 'This is an app made using real time API and React Js. It tells the max and min temperature and humidity of any city around the world.'
    },
    {
        title: 'Depressor',
        description: 'This is the front-end website using HTML,CSS,BOOTSTRAP,JAVASCRIPT.It is based on the benefit for society.It provides the community to the people who are suffering from depression,anxiety,stress,ten…'
    },
    {
        title: 'CSS Profile',
        description: 'It is my CSS Profile which consist of amazing CSS Effects.'
    },
    {
        title: 'Dashboard-ReactJs-Redux',
        description: 'It is a front-end UI created by using ReactJS and Redux. It consist of Login, Logout, Dashboard of users functionality.'
    },
    {
        title: 'DEPRESSOR-MERN-STACK',
        description: 'This is a social networking website made by using MERN STACK. It is made for the purpose to relax the person suffering from depression, stress, anxiety, tension, suicidal thoughts. It includes Real…'
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

export const STATICLINKS = {
    coverlink: 'https://react-three-fiber-3.web.app/react-house',
    github: 'https://github.com/Rashmil333?tab=repositories'
};

export const CODEPENARRAY = [
    {
        title: 'R3f Model Flow stepping G-Green',
        description: 'It is about to show the model for any project with declarative steps.',
        link: 'https://react-three-fiber-3.web.app/react-house',
        img: GoGreenCover,
    },
    {
        title: 'Random Vertical bars in frame loops Lights',
        description: 'Just positioned the bars randomly and added a text geometry also.',
        link: 'https://react-three-fiber-3.web.app/',
        img: lightsCover,
    },
    {
        title: 'Muliple geometries placed with model Festival',
        description: 'I placed multiple geometries outside the model and invoked inside frame loop',
        link: 'https://react-three-fiber-3.web.app/shivum',
        img: festivaleCover,
    },
    {
        title: 'Simple demo of Geometries Particulation AUM',
        description: 'Tried to control the unit geometry of large geometry.',
        link: 'https://react-three-fiber-3.web.app/aum',
        img: aumCover,
    },
    {
        title: 'Checked if i can use the mouse cordinates and using them make something fancy Firefly',
        description: 'Just used the mousemove event in JS to get the cordinates and use them',
        link: 'https://react-three-fiber-3.web.app/firefly',
        img: fireflyCover,
    },
    {
        title: 'Example of 3D Card',
        description: 'Still working on it',
        link: 'https://react-three-fiber-3.web.app/sakhis',
        img: cardThreeCover,
    },
    {
        title: 'Simple bmi calc having the textured geometries background BMI CALC',
        description: 'Learned textured geometries',
        link: 'https://react-three-fiber-3.web.app/bmi',
        img: bmiCover,
    },
    {
        title: 'Dynamically updating frames Loader',
        description: 'I tried to update the positions with every frame.',
        link: 'https://react-three-fiber-3.web.app/loader-1',
        img: loaderCover,
    },
    {
        title: 'Just playing with SVG and animations',
        description: 'SVG and animations',
        link: 'https://react-three-fiber-3.web.app/babyWriting',
        img: babyWritingCover,
    }
]
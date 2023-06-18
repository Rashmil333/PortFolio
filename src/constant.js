import BannerLogo from "./static/tropical-leaves.png";
import githubIcon from "./static/githubIcon.svg";
import gmailIcon from "./static/gmailIcon.svg";
import telePhoneIcon from "./static/telephoneIcon.svg";
import copyIcon from "./static/copyIcon.svg";
import GoGreenCover from "./static/go-greenImage.PNG";
import SpaceTour from "./static/space-tour.png";
import PendulumWavesCover from "./static/pendulum-waves.png";
import rightarrowIcon from "./static/right-arrow1.svg";
import rightarrowIconNew from "./static/rightArrowNew.svg";
import rightarrowIconLatest from "./static/rightArrowLatest.svg";
import festivaleCover from "./static/festival.png";
import bubblesCover from "./static/bubbles.png";
import weatherAppCover from "./static/weather-app.png";
import aumCover from "./static/aum.png";
import bmiCover from "./static/bmi.png";
import depressorCover from "./static/depressor.png";
import fireflyCover from "./static/firefly.png";
import lightsCover from "./static/lights.png";
import spiralingorbsCover from "./static/spiraling-orbs.png";
import loaderCover from "./static/loader.png";
import cardThreeCover from "./static/cardthree.png";
import babyWritingCover from "./static/babyWriting.png";
import rightArrowRed from "./static/rightArrowred.svg";
import CakeCover from "./static/Cake.png";
import TextPCover from "./static/textp.png";
import { CallSVG, GithubSvg, Mailsvg } from "./SVG/LinksIcons";
import robotSoon from "./static/robot.png";
import circularloopSoon from "./static/waveloop.png";
import sunflower from "./static/sunflower.png";
import stackCover from "./static/stackCover.png";
import circularLoopCover from "./static/circularLoopCover.png";

export {
  SpaceTour,
  BannerLogo,
  gmailIcon,
  githubIcon,
  telePhoneIcon,
  copyIcon,
  GoGreenCover,
  rightarrowIcon,
  rightarrowIconNew,
  rightarrowIconLatest,
  bubblesCover,
  aumCover,
  bmiCover,
  depressorCover,
  fireflyCover,
  lightsCover,
  loaderCover,
  festivaleCover,
  cardThreeCover,
  babyWritingCover,
  rightArrowRed,
  spiralingorbsCover,
  robotSoon,
  circularloopSoon,
  sunflower,
  stackCover
};

export const Links = [
  { activeIcon: telePhoneIcon, value: "+91 8859472687", icon: <CallSVG /> },
  {
    activeIcon: gmailIcon,
    value: "rashmilrajpoot333@gmail.com",
    icon: <Mailsvg />,
  },
  {
    activeIcon: githubIcon,
    value: "https://github.com/Rashmil333?tab=repositories",
    icon: <GithubSvg />,
    target: "github",
  },
];

export const Description =
  "Rashmil Rajpoot is a software developer mostly engaged in front-end using React and made a project using MERN stack.He has worked for 2 years as a Front-End developer.";

export const Paths = {
  HOME: "/",
  EDUCATION: "/education",
  SKILLS: "/skills",
  PROJECTS: "/projects",
};

export const CATEGORIES = {
  EDUCATION: "EDUCATION",
  SKILLS: "SKILLS",
  PROJECTS: "PROJECTS",
};

export const MainLinks = [
  { title: CATEGORIES.EDUCATION, path: Paths.EDUCATION },
  { title: CATEGORIES.SKILLS, path: Paths.SKILLS },
  { title: CATEGORIES.PROJECTS, path: Paths.PROJECTS },
];

export const VARIANTS = {
  HEADER: "header",
  FOOTER: "footer",
};

export const EDUCATIONARRAY = [
  {
    title: "Currently looking",
    description: "Full stack/React jobs",
  },
  {
    title: "Xcelpros Technologies private Limited(during grad)",
    description: "Full time Engaged on NextJs, typescript, scss,graphql",
  },
  {
    title: "B-TECH IT",
    description: "aggregate 78%",
  },
  {
    title: "Internship on React",
    description: "In Oye labs",
  },
  {
    title: "Internship on React",
    description: "In Triluxo Technologies private limited.",
  },
  {
    title: "Mern Stack (DEPRESSOR)",
    description: "A type of social networking website.",
  },
  {
    title: "Python",
    description: "Achieved 4.2 stars on hackkerank till nov 2021",
  },
  {
    title: "Coursera courses on python",
    description:
      "Around 4 certificates related to python basics,algos,some data structures",
  },
  {
    title: "12th Education(Science)",
    description: "76%",
  },
  {
    title: "10th",
    description: "88%",
  },
];

export const GIHUBARRAY = [
  {
    title: "Pagination with Multiple Filters",
    description:
      "This repository have the basic logics of multiple filterings of data and implementation of pagination concepts by using simple indexes logic",
    link: "https://github.com/Rashmil333/PaginationWithMultipleFlters",
  },
  {
    title: "Weather App",
    description:
      "This is an app made using real time API and React Js. It tells the max and min temperature and humidity of any city around the world.",
    link: "https://github.com/Rashmil333/WeatherAPP",
  },
  {
    title: "Depressor",
    description:
      "This is the front-end website using HTML,CSS,BOOTSTRAP,JAVASCRIPT.It is based on the benefit for society.It provides the community to the people who are suffering from any issues.",
    link: "https://github.com/Rashmil333/Depressor",
  },
  {
    title: "CSS Profile",
    description: "It is my CSS Profile which consist of amazing CSS Effects.",
    link: "https://github.com/Rashmil333/MY-CSS-Profile",
  },
  {
    title: "Dashboard-ReactJs-Redux",
    description:
      "It is a front-end UI created by using ReactJS and Redux. It consist of Login, Logout, Dashboard of users functionality.",
    link: "https://github.com/Rashmil333/Xcelpros-ReactJs-Redux",
  },
  {
    title: "DEPRESSOR-MERN-STACK",
    description:
      "This is a social networking website made by using MERN STACK.",
    link: "https://bitbucket.org/rashmilrajpoot333/depressor/src/master/",
  },
];

export const SKILLSARRAY = [
  {
    title: "NextJS",
    description: "Last worked recently",
    level: "Intermediate",
  },
  {
    title: "React JS",
    description: "Last worked Daily",
    level: "More Than Intermediate",
  },
  {
    title: "SCSS",
    description: "Last worked Daily",
    level: "Intermediate",
  },
  {
    title: "Graphql",
    description: "Last worked recently in Xcelpros",
    level: "Beginner",
  },
  {
    title: "Typescript",
    description: "Last worked recently in Xcelpros",
    level: "Intermediate",
  },
  {
    title: "Web Sockets",
    description: "Last worked recently in Xcelpros and in MERN Project.",
    level: "More than beginner",
  },
  {
    title: "Node Js",
    description: "Last worked in nov 2021 for backend using express.",
    level: "Beginner",
  },
  {
    title: "Python",
    description: "Last worked in nov 2021",
    level: "Beginner",
  },
  {
    title: "HTML",
    description: "Last worked daily",
    level: "No -level",
  },
  {
    title: "CSS",
    description: "Last worked daily",
    level: "Intermediate",
  },
  {
    title: "JS",
    description: "Last worked daily",
    level: "Intermediate",
  },
];

export const STATICLINKS = {
  coverlink: "https://new-projects-pen.web.app/stack",
  github: "https://github.com/Rashmil333?tab=repositories",
};

export const CODEPENARRAY = [
  {
    title: "Circular-Wave",
    description: "Geometries in loop",
    link: "https://new-projects-pen.web.app/circular-loop",
    img: circularLoopCover,
  },
  {
    title: "Stack",
    description: "Tried Basics of Rigging",
    link: "https://new-projects-pen.web.app/stack",
    img: stackCover,
  },
  {
    title: "Spiraling-orbs",
    description: "Unexpected patterns shown by spirals..",
    link: "https://react-three-fiber-3.web.app/spiraling-orbs",
    img: spiralingorbsCover,
  },
  {
    title: "PENDULUM-WAVES",
    description: "A short visualization of Pendulum-waves.",
    link: "https://react-three-fiber-3.web.app/pendulum-waves",
    img: PendulumWavesCover,
  },
  {
    title: "Small tour for Kids",
    description:
      "Tried to create a small tour having some info of the planets.",
    link: "https://react-three-fiber-3.web.app/space-tour",
    img: SpaceTour,
  },
  {
    title: "MERN STACK Website",
    description:
      "It is a type of social networking website,still working on it",
    link: "https://mern-depressor-dev.web.app/",
    img: depressorCover,
  },
  {
    title: "R3f Model Flow stepping G-Green",
    description:
      "It is about to show the model for any project with declarative steps.",
    link: "https://react-three-fiber-3.web.app/react-house",
    img: GoGreenCover,
  },
  {
    title: "Random Vertical bars in frame loops Lights",
    description:
      "Just positioned the bars randomly and added a text geometry also.",
    link: "https://react-three-fiber-3.web.app/",
    img: lightsCover,
  },
  {
    title: "Muliple geometries placed with model Festival",
    description:
      "I placed multiple geometries outside the model and invoked inside frame loop",
    link: "https://react-three-fiber-3.web.app/shivum",
    img: festivaleCover,
  },
  {
    title: "Simple demo of Geometries Particulation AUM",
    description: "Tried to control the unit geometry of large geometry.",
    link: "https://react-three-fiber-3.web.app/aum",
    img: aumCover,
  },
  {
    title:
      "Checked if i can use the mouse cordinates and using them make something fancy Firefly",
    description:
      "Just used the mousemove event in JS to get the cordinates and use them",
    link: "https://react-three-fiber-3.web.app/firefly",
    img: fireflyCover,
  },
  {
    title: "Example of 3D Card",
    description: "Still working on it",
    link: "https://react-three-fiber-3.web.app/sakhis",
    img: cardThreeCover,
  },
  {
    title: "Simple bmi calc having the textured geometries background BMI CALC",
    description: "Learned textured geometries",
    link: "https://react-three-fiber-3.web.app/bmi",
    img: bmiCover,
  },
  {
    title: "Dynamically updating frames Loader",
    description: "I tried to update the positions with every frame.",
    link: "https://react-three-fiber-3.web.app/loader-1",
    img: loaderCover,
  },
  {
    title: "Just playing with SVG and animations",
    description: "SVG and animations",
    link: "https://react-three-fiber-3.web.app/babyWriting",
    img: babyWritingCover,
  },
  {
    title: "Sliding content",
    description: "Horizontal slider",
    link: "https://react-three-fiber-3.web.app/sliding-content",
    img: CakeCover,
  },
  {
    title: "A Simple Word game",
    description: "Particulation of Text",
    link: "https://react-three-fiber-3.web.app/particulationVisit",
    img: TextPCover,
  },
  {
    title: "Air-Bubbles",
    description: "I used mousemove event in js and just displacing the svgs",
    link: "https://react-three-fiber-3.web.app/bubbles",
    img: bubblesCover,
  },
  {
    title: "Weather-App",
    description: "Fetching the open-weather-api and mapping the data.",
    link: "https://assignment-codeparva.web.app/proto-weather",
    img: weatherAppCover,
  },
];

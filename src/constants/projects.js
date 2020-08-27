import realfooder from "../images/projects/realfooder.png"
import empresaurio from "../images/projects/empresaurio.png"
import ironnews from "../images/projects/ironnews.png"
import api from "../images/projects/api.png"
import expense from "../images/projects/expense.png"
import helpers from "../images/projects/helpers.png"
import portfolio from "../images/projects/portfolio.png"
import solidarity from "../images/projects/solidarity.png"
import clothing from "../images/projects/clothing.png"

export const projects = [
  {
    id: 1,
    isFinished: true,
    title: "El RealFooder",
    techs: ["JS", "CSS", "HTML"],
    img: realfooder,
    link: "https://angelluishernandez.github.io/Ironhack-Web-App/",
    github: "https://github.com/angelluishernandez/ironhack-game",
    description:
      "Ironhack's first project. El Realfooder is a tower-defense game in which the player has to avoid unhealthy food and eat healthy meals",
    description2: "Desarrollado con Javascript, HTML y CSS",
    isIronhack: true,
  },
  {
    id: 2,
    isFinished: true,
    title: "Empresaurio",
    techs: ["JS", "CSS", "HTML", "NODE", "EXPRESS", "MONGODB", "BOOTSTRAP"],
    img: empresaurio,
    link: "https://empresaurio.herokuapp.com",
    github: "https://github.com/angelluishernandez/empresaurio",
    description:
      "Ironhack's second project. Empresaurio is an app that allows companies and their HR personel and employees to keep track of the hour at which the later clock in",
    description2:
      "Desarrollado con Javascript, HTML, CSS, Bootstrap, MongoDB, NodeJS, Express",
    isIronhack: true,
  },
  {
    id: 3,
    isFinished: true,
    title: "IronNews - Front",
    techs: [
      "JS",
      "CSS",
      "HTML",
      "BOOTSTRAP",
      "API REST",
      "REACT",
      "REDUX",
      "AXIOS",
    ],
    img: ironnews,
    link: "https://ironnewsapi.herokuapp.com",
    github: "https://github.com/angelluishernandez/iron-news-front",
    description:
      "Ironhack's third and final project. In Ironnews, the user can search for relevant news and store them thanks to the newsapi.org API. The project has evolved overtime to include Redux as state handler and Scss as Css preprocessor",
    description2:
      "Desarrollado con Javascript, HTML, CSS, Bootstrap, React y API Rest",
    isIronhack: true,
  },
  {
    id: 4,
    isFinished: true,
    title: "IronNews - Back",
    techs: ["NODE", "EXPRESS", "MONGODB"],
    img: api,
    link: "https://ironnewsapi.herokuapp.com",
    github: "https://github.com/angelluishernandez/Ironnews-api",
    description:
      "Ironhack's third project. This is the backend where Ironnews with all the endpoints necessary for it to run and where user management functions live",
    description2: "Desarrollado con MongoDB, NodeJS, Express",
    isIronhack: true,
  },
  {
    id: 5,
    isFinished: true,
    title: "Expense Tracker",
    techs: [
      "JS",
      "CSS",
      "HTML",
      "BOOTSTRAP",
      "API REST",
      "REACT",
      "REDUX",
      "REACT-HOOKS",
      "REACT-CONTEXT",
      "FIREBASE",
      "JEST",
      "ENZYME",
    ],
    img: expense,
    link: "",
    github:
      "https://github.com/angelluishernandez/expensetracker-redux-project-",
    description:
      "My first incursion in Firebase as a back-end. It also helped me to improve my Redux knowledge that would be later used in improving Ironnews. This was my first personal project",
    description2:
      "Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context), Firebase",
    isIronhack: false,
  },

  {
    id: 7,
    isFinished: false,
    title: "Helpers",
    techs: [
      "JS",
      "CSS",
      "HTML",
      "BOOTSTRAP",
      "API REST",
      "REACT",
      "REDUX",
      "REACT-HOOKS",
      "REACT-CONTEXT",
      "FIREBASE",
    ],
    img: helpers,
    link: "",
    github: "https://github.com/angelluishernandez/helpers",
    description:
      "This is personal project in which I wanted to create a visualy appealing app using Material Design. It is an app that allows users to create their own tutorials for simple things by using steps to explain them",
    description2:
      "Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context), Firebase",
    isIronhack: true,
  },

  {
    id: 8,
    isFinished: false,
    title: "My portfolio",
    techs: [
      "JS",
      "CSS",
      "HTML",
      "BOOTSTRAP",
      "GATSBY",
      "NETLIFY",
      "REACT",
      "REACT-HOOKS",
    ],
    img: portfolio,
    link: "https://stoic-wright-507644.netlify.app/contact/",
    github: "https://github.com/angelluishernandez/portfolio-gatsby",
    description:
      "This is my personal portfolio. If you are reading this it means you can have a look at it :). It was created using Gatsby and Netlify",
    description2:
      "Desarrollado con Javascript, HTML, CSS, Bootstrap,  NodeJS, Express, React (Redux, Hooks y Context), Firebase",
    isIronhack: true,
  },
]

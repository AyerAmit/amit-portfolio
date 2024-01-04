import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Amit Ayer",
  title: "Hi all, I'm Amit",
  description:
    "In the digital world of endless connections, I build bridges that span the gap between sleek user interfaces and treasure troves of data, using tools like restful APIs, graphQL, and websockets. As serverless computing rises to the forefront, I’m eagerly exploring this dynamic and cutting-edge domain.",
  // resumeLink: "#",
};

export const openSource = {
  githubUserName: "AyerAmit",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:ayeramit@gmail.com",
  linkedin: "https://www.linkedin.com/in/amit-ayer-683575122/",
  github: "https://github.com/AyerAmit/",
  // twitter: "https://twitter.com/AnupamGautam46",
  // instagram: "https://www.instagram.com/anupam",
  // facebook: 'https://www.facebook.com/anupam',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "PRIMARILY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY NEW TECH TOOL",
  data: [
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing scalable Single-Page-Apps (SPA) & PWA in ASP.NET Core"),
        emoji("⚡ Designing serverless architectures with Azure Functions or AWS Lambda"),
        emoji("⚡ Building RESTful APIs in ASP.NET Core Web API"),
      ],
      softwareSkills: [
        {
          skillName: "Dotnet",
          iconifyTag: "logos:dotnet",
        },
        {
          skillName: "Serverless",
          iconifyTag: "logos:serverless",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Cloud",
    progressPercentage: "50",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "50", //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Pokhara University",
    subHeader: "Bachelor of Computer Engineering",
    duration: "",
    desc: "",
    grade: "2.98",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Radiant Higher Secondary School",
    subHeader: "Higher National Diploma (+2) in Science (Major: Computer Science)",
    duration: "2009 - 2011",
    desc: "",
    grade: "Second Divsion",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: " Fintech Solutions",
    companyLogo: "/img/icons/common/FintechLogo.png",
    date: "July 2022 - Present",
    desc: "Working as a backend developer for different web and app based api development as well as implementing third party api integration for payment process of different countries. Besides this I am currently working in a system architecture team where my responsibility is to write System Arch Document which is a bridge between Product and Development team.",
  },
  {
    role: "Software Developer",
    company: "Omnicom Media Group",
    companyLogo: "/img/icons/common/omnicom-logo.webp",
    date: "Feb 2021 - Apr 2022",
    desc: "Worked on different Australian based projects..",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Developer",
    company: "Proshore Nepal",
    companyLogo: "/img/icons/common/logo-badge-20s.svg",
    date: "Dec 2019 - Feb 2021",
    desc: "Work on different projects of Netherland.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Dotnet Developer",
    company: "Percoid IT Solutions",
    companyLogo: "/img/icons/common/percoid.png",
    date: "May 2018 - Nov 2019",
    desc: "Software Developer, Worked for US based company as a .Net developer.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Developer",
    company: "Channakya Software",
    companyLogo: "/img/icons/common/Channakya-logo.png",
    date: "Mar 2016 - Apr 2018",
    desc: "Primarily focused on projects of different Government and private Office in Nepal i worked as C#/ASP.NET developer and responsible for full phase of software development including both front end and back end coding and testing.    ",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Versatile developer with nearly 7+ years of experience in both frontend and backend development for web and desktop systems. Adapt at working with team members to drive achievement of project deliverables and goals throughout the software development lifecycle, with a proven history of multiple successfully completed client projects. Adaptable, fast-learner problem solver able to quickly devise innovative solutions to technology problems. Possess both backend and frontend development expertise across multiple application layers. Have adequate knowledge on current methods and practices for good design of software systems, including software design patterns, frameworks, architectures, and designing systems. Always eager to learn new Technology.",
    github: "https://github.com/anupam/developer-portfolio",
    link: "https://developer-portfolio-anupam.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Anupam is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Anupam has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Anupam is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Anupam for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page

export const seoData: SEODataType = {
  title: "Amit Ayer",
  description: greetings.description,
  author: "Amit Ayer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://anupamgautam.com.np",
  keywords: [
    "Amit",
    "Amit Ayer",
    "@AyerAmit",
    "ayeramit",
    "software engineeer",
    "Amit Portfolio ",
    "Amit Ayer Portfolio",
  ],
};

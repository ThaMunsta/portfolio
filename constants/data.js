const techStartYear = 2010;
const devStartYear = 2017;
const yearsSince = (year) => new Date().getFullYear() - year;

const userData = {
  githubUsername: "thamunsta",
  giteaUsername: "ThaMunsta",
  giteaUrl: "https://git.dev.nervesocket.com",
  pretext: "Yet Another",
  name: "Mike Johnston",
  designation: "Technical Team Lead",
  avatarUrl: "/avatar.png",
  email: "hello@yamj.ca",
  phone: "+12892080901",
  address: "Guelph Ontario, Canada",
  projects: [
    {
      id: 0,
      title: "Developer Website",
      link: "https://github.com/ThaMunsta/portfolio",
      imgUrl: "/portfolio.png",
    },
    {
      id: 1,
      title: "HashEx",
      link: "https://git.dev.nervesocket.com/ThaMunsta/hashex",
      imgUrl: "/hashex.png",
    },
    {
      id: 2,
      title: "LootHunt",
      link: "https://git.dev.nervesocket.com/ThaMunsta/loot-hunt",
      imgUrl: "/loothunt.png",
    },
  ],
  about: {
    title: `Hello, I'm Mike Johnston, a passionate and dedicated Developer and IT Professional with over ${yearsSince(techStartYear)} years experience.`,
    description: [
      `With ${yearsSince(devStartYear)}+ years of experience as a Developer and ${yearsSince(techStartYear)}+ years in tech, I have obtained expertise in various programming languages, frameworks, systems and utilities.`,
      " I have worked on a variety of projects, from simple websites to complex system integrations and solution architecture."    
    ],
    currentProject: "this portfolio website",
    currentProjectUrl: "https://github.com/thamunsta/portfolio",
  },
  experience: [
    {
      id: 0,
      title: "Technical Team Lead",
      company: "ClaroVant Digital Inc.",
      year: "2026 - Present",
      companyLink: "https://www.clarovantdigital.com/",
      desc: "",
    },
    {
      id: 1,
      title: "Senior Software Developer",
      company: "RBC",
      year: "2026",
      companyLink: "https://rbc.com/",
      desc: "",
    },
    {
      id: 2,
      title: "Senior Technical Lead",
      company: "ClaroVant Digital Inc.",
      year: "2025",
      companyLink: "https://www.clarovantdigital.com/",
      desc: "",
    },
    {
      id: 3,
      title: "Senior Developer / DevOps Lead",
      company: "Tekside.io",
      year: "2019 - 2025",
      companyLink: "https://www.tekside.io/",
      desc: "",
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Inbox Marketer",
      year: "2017 - 2019",
      companyLink: "https://www.shiftparadigm.com/",
      desc: ""
    },
    {
      id: 5,
      title: "Senior Technical Support",
      company: "Keystroke Quality Computing Ltd.",
      year: "2013 - 2017",
      companyLink: "https://www.keystroke.ca/en/",
      desc: ""
    },
    {
      id: 6,
      title: "Support Ninja",
      company: "Hero Technical Solutions Inc.",
      year: "2010 - 2013",
      companyLink: "https://yourcrmhero.com/",
      desc: ""
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1YqalUjsQTt5BNYvV78OP5h0IPiC_sCJg/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/thamunsta",
    linkedin: "https://linkedin.com/in/thatmikej",
    github: "https://github.com/thamunsta",
    gitea: "https://git.dev.nervesocket.com",
    mastodon: "https://mastodon.nervesocket.com/@ThaMunsta",
  },
};

export const devYears = () => yearsSince(devStartYear);

export default userData;

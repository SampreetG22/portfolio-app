import "./Skills.css";
export const skillsList = [
  {
    name: "ReactJS",
    image: "../assets/reactIcon.webp",
  },
  {
    name: "VueJS",
    image: "../assets/vueIcon.webp",
  },
  {
    name: "NodeJS",
    image: "../assets/nodeIcon.webp",
  },
  {
    name: "ExpressJS",
    image: "../assets/expressIcon.png",
  },
  {
    name: "NextJS",
    image: "../assets/nextjsIcon.png",
  },
  {
    name: "NuxtJS",
    image: "../assets/nuxtIcon.webp",
  },
  {
    name: "Python",
    image: "../assets/pythonIcon.png",
  },
  {
    name: "HTML",
    image: "../assets/htmlIcon.png",
  },
  {
    name: "CSS",
    image: "../assets/cssIcon.png",
  },
  {
    name: "Javascript",
    image: "../assets/javascript.png",
  },
  {
    name: "React Native",
    image: "../assets/nativeIcon.png",
  },
  {
    name: "MongoDB",
    image: "../assets/mongoIcon.png",
  },
  {
    name: "SQLite",
    image: "../assets/sqliteIcon.webp",
  },
  {
    name: "Postman",
    image: "../assets/postman.webp",
  },
  {
    name: "Gatsby",
    image: "../assets/gatsby.webp",
  },
  {
    name: "Ionic React",
    image: "../assets/ionicIcon.webp",
  },
  {
    name: "Firebase",
    image: "../assets/firebase.webp",
  },
  {
    name: "Git",
    image: "../assets/gitIcon.webp",
  },
  {
    name: "GitHub",
    image: "../assets/githubIcon.png",
  },
  {
    name: "ChartJS",
    image: "../assets/chartjsIcon.png",
  },
  {
    name: "Gridsome",
    image: "../assets/gridsome.png",
  },
];
export default function Skills() {
  return (
    <div className="skillsContainer">
      <h1 style={{ fontWeight: "400", fontSize: "3.3vw" }}>SKILLS AND TECH</h1>
      <div className="skillsList">
        {skillsList.map((skill, index) => (
          <div key={index} className="eachCard">
            <img src={skill.image} alt={skill.name} className="skillImage" />
            <p className="skillName">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

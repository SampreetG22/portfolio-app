const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/projects", async (req, res) => {
  const myProjects = [
    {
      title: "7Seas MedPharma domain Page",
      link: "https://www.7seasmed.com/",
      role: "Frontend Developer",
      description:
        "Developed reusable and maintainable code for admin and end-user consoles in which the admin should be able to see the orders, products, inventory, sales orders, shipping details, and customer details. On the end-user side, the user should be able to select a product, add it to the cart, and thereby place the order. Developed code for proper login functionality on both the admin and user sides.",
      technologies: ["ReactJS", "NextJS", "Gridsome"],
    },
    {
      title: "7Seas MedPharma admin console",
      link: "https://dev.console.7seasmed.ca/login",
      role: "Frontend Developer",
      credentials: {
        username: "admin1",
        password: "letmein@123",
      },
      description:
        "A strong e-commerce web application built during my previous work experience as Front end developer. The user plays the admin role in this application and he/she can manage the orders, product details, invoices, and a lot more.",
      technologies: ["ReactJS", "VueJS", "NodeJS", "NextJS", "NuxtJS"],
    },
    {
      title: "7Seas MedPharma end user console",
      link: "https://dev.console.7seasmed.ca/login",
      role: "Frontend Developer",
      credentials: {
        username: "Test1",
        password: "T1rzpzvRZZoO",
      },
      description:
        "This is the user side application for the same e-commerce application above. In this, the end users can typically do all the things which can be done in a typical e-commerce model like selecting the products, placing te orders, managing the orders,.",
      technologies: ["ReactJS", "NodeJS", "NextJS", "NuxtJS"],
    },
    {
      title: "Data Visualization Dashboard",
      link: "https://github.com/SampreetG22/data-visualization-dashboard.git",
      role: "Full Stack Developer",
      description:
        "Developed complete frontend and backend code for a data visualization dashboard for the U.S. Energy Information Administration's (EIA) Annual energy outlook. Used advanced UI stacks like Chart.js, Chakra UI, implemented proper state and route management for seamless user experience.",
      technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "ChartJS"],
    },
    {
      title: "Social Media Threads",
      link: "https://github.com/SampreetG22/advisorpedia_posts_app.git",
      role: "Full Stack Developer",
      description:
        "Developed complete frontend and backend code for a social media posts and threads application using MERN stack. Implemented proper authentication and authorization to avoid trespassing using JWT and cookie token management.",
      technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    },
    {
      title: "Chatting app for mobile",
      link: "https://github.com/SampreetG22/roarink_chat_app.git",
      role: "Fullstack Developer",
      description:
        "Designed, modelled and developed a small chatting application whose features are cloned from WhatsApp’s documentation. Implemented proper authentication and authorization to avoid trespassing. The app consists of high-level functionalities like media sharing and user updation.",
      technologies: ["React Native", "Firebase"],
    },
  ];
  try {
    res.status(200).send({
      projects: myProjects,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

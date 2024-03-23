import "./App.css";
import About from "./components/About/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const topPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Link style={{ color: "white", textDecoration: "none" }}>
            <div
              className="logoAndTitle"
              onClick={() => scrollToSection("home")}
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/012/051/691/small_2x/sg-letter-logo-design-with-white-background-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg"
                alt="Sampreet"
                className="logo"
              />
              <p className="name">SAMPREET G</p>
            </div>
          </Link>

          <div className="navigatorsContainer">
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p className="navigators" onClick={() => scrollToSection("home")}>
                Home
              </p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p
                className="navigators"
                onClick={() => scrollToSection("about")}
              >
                About
              </p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p
                className="navigators"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p
                className="navigators"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p
                className="navigators"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p
                className="navigators"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div
          style={{
            marginTop: "5vw",
            padding: "3vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="home" className="homeContainer">
            <div className="introTitle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/428/428573.png"
                alt="ProfilePhtoto"
                className={`myImage ${loaded ? "slide-in-left" : ""}`}
              />
              <h1
                className={`title ${loaded ? "slide-in-left" : ""}`}
                style={{
                  fontWeight: "400",
                  fontSize: "3.3vw",
                  marginBottom: "1vw",
                }}
              >
                FULL STACK DEVELOPER
              </h1>
              <p
                className={`subTitle ${loaded ? "slide-in-left" : ""}`}
                style={{ color: "gray", fontSize: "1.2vw" }}
              >
                I develop robust, scalable and maintainable full stack
                applications for both web and mobile applications using various
                emerging technologies.
              </p>
              <div
                className={`socialMediaContainer ${
                  loaded ? "slide-in-right" : ""
                }`}
              >
                <Link
                  to="https://www.linkedin.com/in/sampreetgumparla/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  to="https://github.com/SampreetG22?tab=repositories"
                  target="_blank"
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
            <img
              src="https://cdn.sanity.io/images/9ir33iub/production/cc2a95b462c94a974188e0f81aa2a562e658879f-600x590.png"
              alt="developer"
              className={`developer ${loaded ? "slide-in-right" : ""}`}
            />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

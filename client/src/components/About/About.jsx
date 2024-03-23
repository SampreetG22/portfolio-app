import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`aboutContainer ${loaded ? "loaded" : ""}`}>
      <h1 className="title" style={{ fontWeight: "400", fontSize: "3.3vw" }}>
        ABOUT ME
      </h1>
      <p className="subTitle">
        I am passionate tech enthusiast with extensive expertise in both
        frontend and backend technologies, including ReactJS, HTML, CSS,
        JavaScript, Python, Node.js, and SQLite and a hold a Masters degree in
        Mechatronics. Along with those I am also well versed in Data structures
        and algorithms. I am eagerly seeking the perfect opportunity to apply
        and expand upon my skills. With a solid foundation in frontend
        development, I excel at crafting intuitive user interfaces and
        optimizing performance to deliver exceptional user experiences. On the
        backend, I thrive in architecting robust systems, leveraging languages
        like Python and Node.js, and designing efficient database solutions
        using SQLite. Whether it's building dynamic web applications, creating
        responsive layouts, or implementing scalable backend infrastructures, I
        am driven by a relentless pursuit of excellence and innovation. I will
        always be looking for a chance to contribute my expertise to a
        forward-thinking team or project where I can make a meaningful impact
        and continue to grow professionally.
      </p>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.2vw" }}>
            Master of Science, Swinburne University of Technology, 2019 - 2021
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.2vw" }}>
            Bachelor of Engineering, MVSR Engineering College, 2015 - 2019
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.2vw" }}>
            XII Standard, Ratna Junior College, 2014 - 2015
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: "1.2vw" }}>
            X Standard, 2012 - 2013
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default About;

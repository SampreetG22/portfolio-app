import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { Link, Tooltip } from "@mui/material";
import { skillsList } from "../Skills/Skills";

export default function Projects() {
  useEffect(() => getProjectDetails);
  const [projects, setProjects] = useState([]);
  const getProjectDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/projects");
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <h1 style={{ fontWeight: "400", fontSize: "3.3vw" }}>
        CAPSTONE PROJECTS
      </h1>
      {projects.map((each, i) => (
        <Accordion sx={{ boxShadow: "0px 0px 10px silver" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ paddingBlock: "14px" }}
          >
            <Typography variant="h7">{each.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography sx={{ marginBlock: "10px" }} variant="body2">
              {each.description}
            </Typography>
            {each.credentials && (
              <>
                <Typography sx={{ marginBlock: "10px" }}>
                  <strong>Username: </strong>
                  {each.credentials.username}
                </Typography>
                <Typography sx={{ marginBlock: "10px" }}>
                  <strong>Password: </strong>
                  {each.credentials.password}
                </Typography>
              </>
            )}
            <Typography
              variant="body2"
              sx={{
                marginBlock: "10px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <strong>Technologies used: </strong>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1vw",
                }}
              >
                {each.technologies &&
                  each.technologies.map((tech, index) => (
                    <Tooltip title={tech} arrow>
                      <img
                        key={index}
                        src={
                          skillsList.find((skill) => skill.name === tech)?.image
                        }
                        alt={tech}
                        style={{
                          width: "2.4vw",
                          height: "2.4vw",
                          borderRadius: "50%",
                          marginRight: "1.2vw",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  ))}
              </div>
            </Typography>
            <Typography variant="body2">
              <strong>Project Link: </strong>
              <Link href={each.link} target="_blank">
                {each.link}
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TerminalIcon from "@mui/icons-material/Terminal";
import Typography from "@mui/material/Typography";

export default function Experience() {
  return (
    <div>
      <h1 style={{ fontWeight: "400", fontSize: "3.3vw" }}>WORK EXPERIENCE</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontStyle: "italic", fontSize: "1.1vw" }}
            align="right"
            color="text.secondary"
          >
            03/23 - Current
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: "150px",
            }}
          >
            <TimelineConnector />
            <TimelineDot color="primary">
              <TerminalIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography component="span" sx={{ fontSize: "1.4vw" }}>
              Roarink Labs Pvt Ltd
            </Typography>
            <Typography sx={{ fontSize: "1vw" }}>
              React Developer, Remote
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontStyle: "italic", fontSize: "1.1vw" }}
            variant="body2"
            color="text.secondary"
          >
            07/2023 - 02/2024
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: "150px",
            }}
          >
            <TimelineConnector />
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography sx={{ fontSize: "1.4vw" }} component="span">
              Nextinvo Pvt Ltd
            </Typography>
            <Typography sx={{ fontSize: "1vw" }}>
              Junior Software Developer, Remote
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontStyle: "italic", fontSize: "1.1vw" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            02/2022 - 05/2022
          </TimelineOppositeContent>
          <TimelineSeparator
            sx={{
              height: "150px",
            }}
          >
            <TimelineConnector />
            <TimelineDot color="warning">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography sx={{ fontSize: "1.4vw" }} component="span">
              TXON India
            </Typography>
            <Typography sx={{ fontSize: "1vw" }}>
              Web Development and Design Intern, Remote
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

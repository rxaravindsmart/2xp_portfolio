import AboutCard from "./AboutCard";

import ProgressBar from "./ProgressBar";
import { Box, Button, Divider, Grid } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const AboutPage = () => {
  const skills = [
    { title: "HTML", value: 92 },
    { title: "Bootstrap", value: 90 },
    { title: "Css", value: 88 },
    { title: "Java Script", value: 85 },
    { title: "React", value: 85 },
    { title: "TypeScript", value: 72 },
    { title: "Sass", value: 70 },
    { title: "Angular", value: 60 },
  ];
  const getResume = () => {
    fetch("./assets/2XPResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "2XPResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <Box className="about-container">
        <h1 className="about-head mb-2">
          Personal<strong className="blue"> Infos</strong>{" "}
        </h1>
        <AboutCard />
        <Divider className="divider" />
        <h1 className="about-head center mb-5">
          Profesional<strong className="blue "> Skills</strong>
        </h1>
        <Box className="progress-bar">
          <Grid container>
            {skills.map((data, index) => (
              <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                <ProgressBar percentage={data.value} title={data.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider className="divider" />
        <h1 className="about-head center mb-5">
          EXPERIENCE <strong className="blue "> & EDUCATION</strong>
        </h1>
        <Grid container alignSelf={"center"}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="exp-role mt-5">
              <Diversity2Icon className="icon-hold" />
              <span className="vertical-line"></span>
              <div>
                <h4 className="title-back">2022 - Present</h4>
              </div>
              <Box>
                <h2 className="role-title">
                  <strong>Frontend Developer - </strong>Lakeba Groups
                </h2>
                <p className="role-text">
                  I have worked with various technologies, frameworks, and tools
                  commonly used in front-end development, such as HTML, CSS,
                  JavaScript, and frameworks like React, Angular
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="exp-role mt-5">
              <Diversity2Icon className="icon-hold" />
              <span className="vertical-line"></span>
              <div>
                <h4 className="title-back">2018 - 2022</h4>
              </div>
              <Box>
                <h2 className="role-title">
                  <strong>B.Tech IT - </strong>SNS COllege of Technology
                </h2>
                <p className="role-text">
                  I have a B.Tech in Information Technology, with a strong
                  foundation in programming and software development, geared
                  towards a dynamic career in the evolving field, especially
                  front-end frameworks.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className="resume-download">
          <Button className="resume" onClick={getResume}>
            Download CV
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default AboutPage;

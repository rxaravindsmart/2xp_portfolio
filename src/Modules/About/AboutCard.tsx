import { Box, Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const AboutCard = () => {
  const about = [
    { key: "First Name", value: "Aravindkumar" },
    { key: "Age", value: "23 Years" },
    { key: "Last Name", value: "Palanisamy" },
    { key: "Languages", value: "Tamil,English" },
    { key: "Qualification", value: "B.Tech IT" },
    { key: "Freelance", value: "Available" },
  ];
  return (
    <>
      <Box className="about-card">
        <Grid container>
          <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
            <ul className="list-contents">
              {about.map((data, index) => (
                <li className="list-wrap" key={index}>
                  <p className="list-title">
                    {data.key}&nbsp;:&nbsp;
                    <strong className="blue">{data.value}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
            <ul className="exp-content">
              <li className="exp-wrap">
                <span className="title-exp">2+</span>
                <br />
                <span className="text-exp">
                  <RemoveIcon />
                  Years of Exprience
                </span>
              </li>
              <li className="exp-wrap">
                <span className="title-exp">10+</span>
                <br />
                <span className="text-exp">
                  <RemoveIcon />
                  Project Knoledge
                </span>
              </li>
              <li className="exp-wrap">
                <span className="title-exp">3+</span>
                <br />
                <span className="text-exp">
                  <RemoveIcon />
                  Projects Managed
                </span>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default AboutCard;

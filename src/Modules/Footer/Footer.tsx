import { Box, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Box className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <h3 className="footer-title">
              Designed & Developed by Aravindkumar
            </h3>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            <h3 className="footer-title">Copyright © {year}</h3>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul className="footer-ref">
              <li className="footer-icon">
                <IconButton
                  className="icon-button"
                  href="https://github.com/rxaravindsmart"
                  target="_blank"
                >
                  <GitHubIcon style={{ fontSize: 16 }} />
                </IconButton>
              </li>
              <li className="footer-icon">
                <IconButton
                  className="icon-button"
                  href="https://x.com/RXAraVinDSmart2?t=ltUVdDEQnFJzMYCQSsH4Lw&s=09"
                  target="_blank"
                >
                  <Twitter style={{ fontSize: 16 }} />
                </IconButton>
              </li>{" "}
              <li className="footer-icon">
                <IconButton
                  className="icon-button"
                  href="https://linkedin.com/in/aravindkumar-palanisamy-b33385186"
                  target="_blank"
                >
                  <LinkedInIcon style={{ fontSize: 16 }} />
                </IconButton>
              </li>{" "}
              <li className="footer-icon">
                <IconButton
                  className="icon-button"
                  href="https://www.instagram.com/rx_aravind_smart"
                  target="_blank"
                >
                  <InstagramIcon style={{ fontSize: 16 }} />
                </IconButton>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;

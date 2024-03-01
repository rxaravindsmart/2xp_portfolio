import { Twitter } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router";

const SocialMedia = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="extern-link ">
        <h1 className="social-head">Get in Touch</h1>
        <p className="social-text mb-5">Feel free to get in touch with me</p>
        <ul className="home-social-ref">
          <li className="home-social-icon">
            <IconButton
              className="icon-button"
              href="https://github.com/rxaravindsmart"
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 16 }} />
            </IconButton>
          </li>
          <li className="home-social-icon">
            <IconButton
              className="icon-button"
              href="https://x.com/RXAraVinDSmart2?t=ltUVdDEQnFJzMYCQSsH4Lw&s=09"
              target="_blank"
            >
              <Twitter style={{ fontSize: 16 }} />
            </IconButton>
          </li>{" "}
          <li className="home-social-icon">
            <IconButton
              className="icon-button"
              href="https://linkedin.com/in/aravindkumar-palanisamy-b33385186"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 16 }} />
            </IconButton>
          </li>{" "}
          <li className="home-social-icon">
            <IconButton
              className="icon-button"
              href="https://www.instagram.com/rx_aravind_smart"
              target="_blank"
            >
              <InstagramIcon style={{ fontSize: 16 }} />
            </IconButton>
          </li>
        </ul>
      </Box>
    </>
  );
};
export default SocialMedia;

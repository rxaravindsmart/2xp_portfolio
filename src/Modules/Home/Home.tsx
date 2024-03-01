import { Box, Grid, Button } from "@mui/material";
import OrgRoles from "./OrgRoles";
import HomeIntro from "./HomeIntro";
import SocialMedia from "./Socialmedia";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container mt-4">
        <Box>
          <Box className="home-container-top">
            <Grid container>
              <Grid item sm={12} xs={12} lg={6} md={5}>
                <img
                  src="./assets/home-main-2.png"
                  className="profile-picture"
                />
              </Grid>
              <Grid item sm={12} xs={12} lg={6} md={7}>
                <div className="box-contents">
                  <span className="sub-title ">Hi There, </span>
                  <br />
                  <span className="title">I'M ARAVINDKUMAR</span>
                  <br />
                  <div className="sub-title">
                    <OrgRoles />
                  </div>
                  <Button
                    className="btn-primary mt-5"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    MORE ABOUT ME
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className="home-cotainer-bot">
            <HomeIntro />
          </Box>
          <SocialMedia />
        </Box>
      </div>
    </>
  );
};
export default Home;

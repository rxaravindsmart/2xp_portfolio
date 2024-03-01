import { Box, Grid } from "@mui/material";

const Footer = () => {
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
            <h3 className="footer-title">Copyright © 2024</h3>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            <h3 className="footer-title">Arainvkumar</h3>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;

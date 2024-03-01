import { Box, Grid } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Box className="contact-container">
        <h1 className="contact-title">
          Contact<span className="blue"> Me</span>
        </h1>

        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <h4 className="contact-text">
              Let's Create Something together, Get in Touch with me
            </h4>
            <img src="./assets/conts-bg.png" className="img-contact" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;

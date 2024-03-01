import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { MailSchema } from "./Schema";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const mailForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const actionOnSubmit = async (formValues: any, formik: any) => {
    const { name, email, message, subject } = formValues;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        "service_t4v9a8c",
        "contact_form",
        templateParams,
        "AIed7f33l8JrC1d5G"
      );
      console.log("working");
    } catch (e) {
      console.error(e);
    } finally {
    }
  };
  return (
    <>
      <Box className="form">
        <Formik
          initialValues={mailForm}
          validationSchema={MailSchema}
          onSubmit={(values: any, formik: any) =>
            actionOnSubmit(values, formik)
          }
        >
          {({
            handleSubmit,
            isValid,
            touched,
            errors,
            handleBlur,
            handleChange,
            values,
          }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12} mt={5}>
                  <Typography variant="body1" className="prime-blue">
                    Name *
                  </Typography>
                  <TextField
                    defaultValue={values.name}
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="name"
                    className="field"
                    fullWidth
                    error={touched.name && Boolean(errors.name)}
                    helperText={
                      touched.name && errors.name ? errors.name.toString() : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} mt={5}>
                  <Typography variant="body1" className="prime-blue">
                    Email *
                  </Typography>
                  <TextField
                    defaultValue={values.email}
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    fullWidth
                    name="email"
                    className="field"
                    error={touched.email && Boolean(errors.email)}
                    helperText={
                      touched.email && errors.email
                        ? errors.email.toString()
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} mt={5}>
                  <Typography variant="body1" className="prime-blue">
                    Subject *
                  </Typography>
                  <TextField
                    defaultValue={values.subject}
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="subject"
                    multiline
                    rows={2}
                    className="field"
                    error={touched.subject && Boolean(errors.subject)}
                    helperText={
                      touched.subject && errors.subject
                        ? errors.subject.toString()
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} mt={5}>
                  <Typography variant="body1" className="prime-blue">
                    Message *
                  </Typography>
                  <TextField
                    defaultValue={values.message}
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="message"
                    multiline
                    rows={5}
                    className="field"
                    error={touched.message && Boolean(errors.message)}
                    helperText={
                      touched.message && errors.message
                        ? errors.message.toString()
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} mt={5} style={{ textAlign: "right" }}>
                  <Button
                    type="submit"
                    className="btn-submit-form"
                    disabled={!isValid}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
export default ContactForm;

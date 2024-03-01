import * as Yup from "yup";

const MailSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(28, "Name can have a maximum of 28 characters"),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required")
    .max(256, "Email can have a maximum of 256 characters"),
  subject: Yup.string()
    .required("Subject is required")
    .max(120, "Subject can have a maximum of 120 characters"),
  message: Yup.string()
    .required("Message is required")
    .max(1500, "Message can have a maximum of 1000 characters"),
});
export { MailSchema };

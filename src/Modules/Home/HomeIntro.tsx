import { Grid } from "@mui/material";
import Tilt from "react-parallax-tilt";

const HomeIntro = () => {
  return (
    <>
      <Grid container className="mt-5">
        <Grid item xs={12} sm={12} md={8}>
          <h1 className="title-wrap-head">
            {" "}
            Let me <strong className="red"> Interduce </strong> MySelf
          </h1>
          <p className="text">
            I'm an Indian based{" "}
            <strong className="blue-dot"> web designer </strong> & &nbsp;
            <strong className="blue-dot">front‑end developer</strong> focused on
            Crafting clean & user‑friendly experiences, I am passionate About
            building excellent software that improves the lives of Those around
            me.
          </p>
          <p className="text">
            I have proficiency in both classic and modern{" "}
            <strong className="blue-dot"> JavaScript </strong>
            libraries...
            <br />
            <br /> I am highly interested in new{" "}
            <strong className="blue-dot"> web technology products.</strong>
            <br />
            <br /> My proficiency extends to specialized frameworks like{" "}
            <strong className="blue-dot">Angular, React JS,</strong> and{" "}
            <strong className="blue-dot"> Nextjs,</strong> which allow me to
            create innovative solutions in the dynamic web technology landscape.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Tilt>
            <img
              src="./assets/man-toon.jpg"
              className="icon-picture"
              // className="img-fluid avatar-img"
              alt="avatar"
            />
          </Tilt>
        </Grid>
      </Grid>
    </>
  );
};
export default HomeIntro;

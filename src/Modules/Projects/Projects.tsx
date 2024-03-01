import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  const Projects = [
    {
      title: "PortFolio",
      imgSrc: "./assets/port-exp.png",
      description: `Dive into my sleek portfolio, a vivid embodiment of unwavering dedication to modern web development. The fusion of React.js, Material-UI, Bootstrap, and SCSS creates a harmonious blend of dynamic interactivity, aesthetic allure, and responsive design. Beyond mere pages, it encapsulates the essence of my design philosophy, inviting you to experience a seamless and visually appealing web journey.`,
      href: "https://github.com/rxaravindsmart/2xp_portfolio.git",
    },
    {
      title: "CallTodo",
      imgSrc: "./assets/calltodo-exp.png",
      description: `Immerse in a ToDo app where Redux, Material-UI, and Formik unite seamlessly. Redux ensures smooth data flow, Material-UI adds elegance, and Formik simplifies forms. More than task management, it's a code masterpiece showcasing precision and design finesse. Experience the responsive dance orchestrated by Redux, creating an efficient task management system. Material-UI and React's blend offers both aesthetic charm and practicality. Each line of code in this user-centric design showcases the elegance of construction.`,
      href: "https://github.com/rxaravindsmart/reduxcalltodo.git",
    },
    {
      title: "Admin Pannel",
      imgSrc: "./assets/admin-exp.png",
      description: `In my Angular admin panel, Bootstrap provides a robust framework, seamlessly blending with Font Awesome for captivating icons. Popper.js ensures precise pop-up positioning, creating an intuitive user interface. Leveraging RxJS, the admin panel achieves reactive programming, enhancing real-time data handling. This amalgamation of technologies forms the backbone of a dynamic and responsive admin experience.`,
      href: "https://github.com/rxaravindsmart/adminpannel.git",
    },
  ];
  return (
    <>
      <Box className="project-container">
        <h1 className="title">
          My Latest<span className="blue"> Initiative</span>
        </h1>
        <p className="text">These are some recent projects I've worked on.</p>
        {Projects.map((data, index) => (
          <Box className="grid-fix">
            <Box className="project">
              <h1 className="project-title">{data.title}</h1>
              <img
                alt="project image"
                src={data.imgSrc}
                className="project-img"
              />
              <p className="project-text">{data.description}</p>
              <div className="btn-box">
                <Button
                  className="btn-git"
                  href={data.href}
                  target="_blank"
                  startIcon={<GitHubIcon className="git-icon" />}
                >
                  GitHub
                </Button>
              </div>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default ProjectsPage;

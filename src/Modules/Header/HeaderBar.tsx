import { useState } from "react";

import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const HeaderBar = () => {
  const [isResponsive, setResponsive] = useState(false);

  const handleMenuClick = () => {
    setResponsive((prevState) => !prevState);
  };
  return (
    <>
      <Box className={`header-container${isResponsive ? " responsive" : ""}`}>
        <div id="rc_logo">
          <a title="Logo">PORTFOLIO</a>
        </div>

        <div className={`rc_nav${isResponsive ? " responsive" : ""}`}>
          <NavLink
            to={""}
            className={({ isActive }) =>
              ["nav-item", isActive ? "active" : null].filter(Boolean).join(" ")
            }
            title="Home"
            onClick={handleMenuClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ["nav-item", isActive ? "active" : null].filter(Boolean).join(" ")
            }
            title="Services"
            onClick={handleMenuClick}
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              ["nav-item", isActive ? "active" : null].filter(Boolean).join(" ")
            }
            title="Project"
            onClick={handleMenuClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ["nav-item", isActive ? "active" : null].filter(Boolean).join(" ")
            }
            title="Contact"
            onClick={handleMenuClick}
          >
            Contact
          </NavLink>
          <div title="Menu" className="icon" onClick={handleMenuClick}>
            {isResponsive ? (
              <CloseIcon className="cancel-icon" />
            ) : (
              <MenuIcon className="HumBurger-icon" />
            )}
          </div>
        </div>
      </Box>
    </>
  );
};
export default HeaderBar;

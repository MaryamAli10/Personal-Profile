import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ setPageId, pageId }) => {
  const [visible, setVisible] = useState(false);

  function menuBtnClick(id) {
    setPageId(id);
    document
      .getElementsByClassName("active-btn")
      .classList.remove("active-btn");
    document.getElementById("home-btn").classList.add(".active");
  }

  const menuCollapsible = (
    <div className={`collapsible-menu-layout`}>
      <button
        className="btn-collapsible"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? <Menu /> : <X />}
      </button>

      <ul>
        <li>
          <button
            onClick={() => {
              setPageId("home");
            }}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            className="btn-collapsible"
            onClick={() => {
              setPageId("projects");
            }}
          >
            PROJECTS
          </button>
        </li>
        <li>
          <button
            className="btn-collapsible"
            onClick={() => {
              setPageId("contact");
            }}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="menu-layout">
        <ul className="menu-btn-list">
          <li>
            <button
              id="home-btn"
              className={`menu-btn ${pageId === "home" ? "active" : ""}`}
              onClick={() => {
                setPageId("home");
              }}
            >
              HOME
            </button>
            {pageId === "home" && <div className="active-dot"></div>}
          </li>
          <li>
            <button
              id="project-btn"
              className={`menu-btn ${pageId === "projects" ? "active" : ""}`}
              onClick={() => {
                setPageId("projects");
              }}
            >
              PROJECTS
            </button>
            {pageId === "projects" && <div className="active-dot"></div>}
          </li>
          <li>
            <button
              id="contact-btn"
              className={`menu-btn ${pageId === "contact" ? "active" : ""}`}
              onClick={() => {
                setPageId("contact");
              }}
            >
              CONTACT
            </button>
            {pageId === "contact" && <div className="active-dot"></div>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

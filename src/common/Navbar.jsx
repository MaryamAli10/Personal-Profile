import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ setPageId }) => {
  const [visible, setVisible] = useState(false);
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
              className="menu-btn"
              onClick={() => {
                setPageId("home");
              }}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className="menu-btn"
              onClick={() => {
                setPageId("projects");
              }}
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              className="menu-btn"
              onClick={() => {
                setPageId("contact");
              }}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

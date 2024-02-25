import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarData } from "../../Data/Data";

function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="title" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

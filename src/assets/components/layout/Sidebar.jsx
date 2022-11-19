import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
// icon
import { IMdSpaceDashboard, IMdKeyboardArrowRight } from "../Icons";

function Sidebar() {
  const [click, setClick] = useState(false);

  const active = () => setClick(!click);

  const menuList = [
    {
      path: "/",
      name: "Dashboard",
      icon: <IMdSpaceDashboard />,
      down: <IMdKeyboardArrowRight />,
      list: [
        "general",
        "mantep",
      ],
    },
    {
      path: "/Layout",
      name: "Layout",
      icon: <IMdSpaceDashboard />,
      down: <IMdKeyboardArrowRight />,
      list: [],
    },
    {
      path: "/Component",
      name: "Component",
      icon: <IMdSpaceDashboard />,
      down: <IMdKeyboardArrowRight />,
      list: [],
    },
    {
      path: "/feature",
      name: "Feature",
      icon: <IMdSpaceDashboard />,
      down: <IMdKeyboardArrowRight />,
      list: [],
    },
  ];

  return (
    <div className="sidebar">
      <div>
        <NavLink className="sidebar-header" to="/">
          <Logo height="44px" fill="black" />
          <h3>thabys</h3>
        </NavLink>

        <div className="sidebar-main">
          {menuList.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " select" : " unselect")
              }
              to={item.path}
              key={index}
            >
              <div className="sidebar-btn">
                <div className="sidebar-menu">
                  <div className="btn btn-icon-md">{item.icon}</div>
                  <h4>{item.name}</h4>
                </div>
                <div size="40px" className="sidebar-drop">
                  {item.down}
                </div>
              </div>
              <span className="nad"></span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

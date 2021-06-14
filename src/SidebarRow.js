import React from "react";

import "./SidebarRow.css";

import { useHistory } from "react-router-dom";
function SidebarRow({ type, selected, text, Icon }) {
  const history = useHistory();
  const goToType = () => {
    if (type === "home") type = "";
    history.push(`/${type}`);
  };
  return (
    <div
      onClick={goToType}
      className={`sidebarRow active ${selected && "sidebarRow__selected"}`}
    >
      <div className="sidebarRow__icon">
        <Icon />
      </div>
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarRow;

import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Home from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HistoryIcon from "@material-ui/icons/History";

function Sidebar() {
  return (
    <div className="sidebar">
      <hr />
      <SidebarRow type={"home"} Icon={Home} text="Home" />
      <SidebarRow type={"trending"} Icon={WhatshotIcon} text="Trending" />
      <SidebarRow
        type={"subscription"}
        Icon={SubscriptionsIcon}
        text="Subscription"
      />
      <hr />
      <SidebarRow type={"library"} Icon={LibraryBooksIcon} text="Library" />
      <SidebarRow type={"history"} Icon={HistoryIcon} text="History" />
    </div>
  );
}

export default Sidebar;

import "./sidebar.css";
import logo from "../../assets/images/favicon.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
        <h2>Admin/Dashboard</h2>
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
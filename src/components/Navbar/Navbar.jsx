import { useState } from "react";
import { logout } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

import {
  AccountCircle,
  Menu,
  Dashboard,
  Inbox,
  BrandingWatermarkSharp,
  PowerSettingsNew,
  Settings,
  VideoSettings,
  DocumentScanner,
  Group,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className={`header ${open ? "responsive" : ""}`}>
        <div className="brand-wrapper">
          <Menu className="menu-icon" onClick={handleOpen} />
          <h3>Admin Panel</h3>
        </div>
        <div className="profile-wrapper">
          <AccountCircle className="account-icon" />
          <p>{localStorage.getItem("firstname")}</p>
        </div>
      </div>

      <nav className={`navbar ${open ? "responsive" : ""}`}>
        <div className="navbar-title">
          <Settings className="logo" />
          <h2>Admin Panel</h2>
        </div>
        <div className="nav-list">
          <NavLink to="/" className="link" exact onClick={handleOpen}>
            <Dashboard className="icon" />
            Dashboard
          </NavLink>
          <NavLink to="/schools" className="link" exact onClick={handleOpen}>
            <BrandingWatermarkSharp className="icon" />
            Schools
          </NavLink>

          <NavLink to="/classes" className="link" exact onClick={handleOpen}>
            <Group className="icon" />
            Classes
          </NavLink>
          <NavLink to="/users" className="link" exact onClick={handleOpen}>
            <AccountCircle className="icon" />
            Users
          </NavLink>
          <NavLink to="/videos" className="link" exact onClick={handleOpen}>
            <VideoSettings className="icon" />
            Videos
          </NavLink>
          <NavLink to="/documents" className="link" exact onClick={handleOpen}>
            <DocumentScanner className="icon" />
            Documents
          </NavLink>

          {/* <NavLink to="/inbox" className="link" onClick={handleOpen}>
            <Inbox className="icon" />
            Inbox
          </NavLink> */}
          <NavLink to="/settings" className="link" exact onClick={handleOpen}>
            <Settings className="icon" />
            Settings
          </NavLink>
          <p className="link" onClick={handleLogout}>
            <PowerSettingsNew className="icon" />
            Logout
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

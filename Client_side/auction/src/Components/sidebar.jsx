import { Activity, Calendar, Home, LogOut, Settings, User } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styling/Sidebar.css";
import logo from "../assets/logo.png";

function Sidebar() {
  const [user, setUser] = useState("");

  // Get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Handle sign-out
  const handleSignOut = () => {
    console.log("User signed out");
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src={logo} alt="logo" />
          </div>

          {/* Navbar */}
          <ul className="sidebar-menu">
            {[
              { path: "/", icon: <Home className="icon" />, label: "Home" },
              {
                path: "/routines",
                icon: <Calendar className="icon" />,
                label: "Routines",
              },
              {
                path: "/Consultation",
                icon: <Activity className="icon" />,
                label: "Consultation",
              },
              {
                path: "/profile",
                icon: <User className="icon" />,
                label: "Profile",
              },
              {
                path: "/settings",
                icon: <Settings className="icon" />,
                label: "Settings",
              },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login / Logout Section */}
          <div className="sign-out-container">
            {user == "" ? (
              <Link to="/login" className="sign-in-button ">
                <LogOut className="icon" />
                Login
              </Link>
            ) : (
              <button onClick={handleSignOut} className="sign-out-button">
                <LogOut className="icon" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

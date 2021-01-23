import React from "react";
import { Link} from "react-router-dom";

const avatar = "https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to = "/">
          <img src={avatar} alt="avatar" height="50px"/>
        </Link>

        <Link className="btn btn-outline-light" to="/users/add">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
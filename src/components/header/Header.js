import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="links">
          <li>
            <Link to="/settings">
              <button className="circular ui icon button settings-button">
                <i className="icon settings big teal" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button className="circular ui icon button settings-button">
                <i className="icon user big teal" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

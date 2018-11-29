import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Image from "../../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="links">
          <li>
            <Link to="/">
              <span><img className="ui avatar image logo" src={Image} alt="" />Eagle-I</span>
            </Link>
          </li>
          <div className="spacer" />
          <li>
            <Link to="/settings">
              <button className="circular ui icon button settings-button">
                <i className="icon settings big black" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button className="circular ui icon button settings-button">
                <i className="icon user big black" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

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
              <button class="circular ui icon button settings-button">
                <i class="icon settings big yellow" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <button class="circular ui icon button settings-button">
                <i class="icon user big yellow" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

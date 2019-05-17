import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="default-header">
        <div className="default-container">
          <Link to="/" className="default-header-link">
            <h1 className="default-header-title">{this.props.title}</h1>
          </Link>
        </div>        
      </header>
    );
  }
}

export default Header;
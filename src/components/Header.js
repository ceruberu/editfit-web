import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="App-nav">
    <div className="nav-fixed">
      <div className="nav-row">
        <div className="nav-logo">
          <span>edit.fit</span>
        </div>
        <div className="nav-search">
          검색
        </div>
        <div className="nav-navigation">
          <div className="navigation-container">
            <NavLink to="/" exact className="navigation-menu">데일리룩</NavLink>
            <NavLink to="/editor" className="navigation-menu">에디터</NavLink>
            <NavLink to="/community" className="navigation-menu">커뮤니티</NavLink>
            <NavLink to="/profile" className="navigation-menu">계정</NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = ({ user }) => {
  const { currentUser } = user;
  return (
    <nav className="App-nav">
      <div className="nav-fixed">
        <div className="nav-row">
          <div className="nav-logo">
            <span>edit.fit</span>
          </div>
          <form className="nav-search">
            <input className="nav-searchInput" type="text" placeholder="태그검색" />
          </form>
          <div className="nav-navigation">
            <div className="navigation-container">
              <NavLink to="/" exact className="navigation-menu">데일리룩</NavLink>
              <NavLink to="/editor" className="navigation-menu">에디터</NavLink>
              <NavLink to="/community" className="navigation-menu">
                커뮤니티
              </NavLink>
              {!currentUser
                ? <NavLink to="/sign" className="navigation-menu">로그인</NavLink>
                : <NavLink to="/profile" className="navigation-menu">
                    계정
                  </NavLink>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

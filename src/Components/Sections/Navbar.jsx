import React, { useEffect, useState } from "react";
import '../Sections/_navbar.scss';
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';

function Navbar() {

  const [Menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!Menu);
  };

  useEffect(() => {}, []);

  
    return (
      <>
        <div className='navbar-container'>
            <a href='/author'>Author</a>
            <a href='/library'>Library</a>
            <a href='/' className='slp-logo'>Haruki Murakami</a>
            <a href='/community'>Community</a>
            <a href='/resources'>Resources</a>
        </div>

        <div className="navbar-container-mobile">
        <div className="navbar-logo">
        <Link to='/'>Haruki Murakami</Link>
          <div className="btn-menu" onClick={showMenu}>
            {Menu ? (
              <h1>x</h1>
            ) : (
              <>
                <div></div>
                <div></div>
                <div></div>
              </>
            )}
          </div>
        </div>

        {Menu ? (
          <div className="navbar-menu-mobile-wrapper">
            <div className="navbar-mainmenu-mobile">
              <ul>
                <li>
                  <Link to="/author">Author</Link>
                </li>
                <li>
                  <Link to="/library">Library</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>

        <Outlet />
        <Footer />
        </>
  );
}

export default Navbar;

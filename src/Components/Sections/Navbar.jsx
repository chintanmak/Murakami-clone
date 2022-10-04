import React, { Component } from 'react';
import '../Sections/_navbar.scss';
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='navbar-container'>
            <a href='/author'>Author</a>
            <a href='/library'>Library</a>
            <a href='/' className='slp-logo'>Haruki Murakami</a>
            <a href='/community'>Community</a>
            <a href='#'>Resources</a>
        </div>

        <Outlet />
        <Footer />
      </>
    )
  }
}

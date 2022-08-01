import React, { Component } from 'react';
import '../Sections/_navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='navbar-container'>
            <a href='#'>Author</a>
            <a href='#'>Library</a>
            <a href='#' className='slp-logo'>Haruki Murakami</a>
            <a href='#'>Community</a>
            <a href='#'>Resources</a>

        </div>
      </>
    )
  }
}

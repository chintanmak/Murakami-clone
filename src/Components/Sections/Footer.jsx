import React, { Component } from 'react';
import '../Sections/_footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer-container'>
            <div className='firstside-footer'>
                <h3>Contact</h3>
                <p>Alfred A. Knopf | Vintage Books | Email Us
                <br />
                Privacy Policy | Terms of Use | Affiliate Program Disclosure</p>
            </div>
            <div className='secondside-footer'>
                <h3>Connect</h3>
                
            </div>
        </div>
      </>
    )
  }
}

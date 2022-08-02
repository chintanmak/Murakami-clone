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
            <hr />
            <div className='secondside-footer'>
                <h3>Connect</h3>
                <p>Facebooklogo</p>
                <p>Pinterestlogo</p>
            </div>
            <hr />
            <div className='thirdside-footer'>
                <h3>JOIN THE MURAKAMI MAILING LIST</h3>
                <div>
                <input type="test" />
                <button>submit</button>
                </div>
                <p>By clicking submit, I acknowledge that I have read and agree to Penguin Random House's Privacy policy and Terms of use.</p>
            </div>
        </div>
      </>
    )
  }
}

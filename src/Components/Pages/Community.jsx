import React from 'react';
import '../Scss/_community.scss';
import Community1 from '../Assets/Community1.jpg';
import pinterest from '../Assets/pinterest.png';
import facebook from '../Assets/facebook.png';

export default function Community() {
  return (
    <>
    <div className='community-container'>
            <div className='community-header'>
              <h1>COMMUNITY</h1>
              <hr />
              <p>If you are a Murakami fan, chances are you have been carried away by his highly imaginative scenes and vividly remember his mesmerizing characters. Enjoy browsing the comments below, and then submit your own favorites for possible inclusion.</p>
            </div>

            <div className='three-section-community'>
                <div className='first-section-community'>
                    <h3>HOW FANS DISCOVERED MURAKAMI</h3>
                    <p>“Whilst perusing the fiction aisle of a bookstore, I came across a somewhat large section of Haruki Murakami books.... I decided to choose Norwegian Wood first.... I soon went back to the book store and bought six other novels. ” <br /> -Jordan, U.S</p>
                    <button>READ MORE</button>
                </div>

                <div className='second-section-community'>
                    <h3>FAVORITE SCENES</h3>
                    <p>“I guess it’d been leading me towards this all along, for years now, but the dream sequences in Colorless Tsukuru had me facing sexuality a little more honestly. ” <br /> -Wilsom, Brazil</p>
                    <button>READ MORE</button>
                </div>

                <div className='third-section-community'>
                    <h3>FAVORITE CHARACTERS</h3>
                    <p>“The shipmen now lives in my heart and maybe I am part of the Dolphin Hotel as well. The shipmen saved my life. ”<br />-Elena, Italy</p>
                    <button>READ MORE</button>
                </div>
            </div>

            <div className='img-section-community'>
                <img src={Community1} />
            </div>

            <div className='social-community'>
                <div className='social-media'>
                <img src={pinterest} />
                <img src={facebook} />
                </div>
                <p>Visit FACEBOOK and PINTEREST for the latest Murakami news and updates.</p>
            </div>
    </div>
    </>
  )
}

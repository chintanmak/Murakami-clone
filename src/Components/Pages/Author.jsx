import React, { Component } from 'react';
import '../Scss/_author.scss';
import haruki from '../Assets/haruki.jpg';
import desk from '../Assets/desk.jpg';

export default class Author extends Component {
  render() {
    return (
      <>
        <div className='author-container'>
            <div className='author-header'>
              <h1>AUTHOR</h1>
              <hr />
              <p>Meet the man behind the works</p>
            </div>

            <div className='img-section'>
               <img src={haruki} />
            </div>

            <div className='momentofinspiration'>
                <h1>MOMENT OF INSPIRATION</h1>
                <p>
                In 1978 Murakami was in the bleachers of Jingu Stadium watching a baseball game between the Yakult Swallows and the Hiroshima Carp when Dave Hilton, an American, came to bat. According to an oft-repeated story, in the instant that he hit a double, Murakami suddenly realized that he could write a novel. He went home and began writing that night.
                </p>
            </div>

            <div className='two-section'>

                <div className='first-btb'>
                    <h1>BEHIND THE BOOKS:</h1>
                    <p>Find out what Murakami eats, drinks, and listens to while he writes.</p>
                    <div className='btn-section-twosection'>
                    <button>THE KAFKA ART GALLERY</button>
                    </div>
                </div>

                <div className='second-ownwords'>
                    <h1>IN HIS OWN WORDS:</h1>
                    <p>Discover more about the author by reading these conversations between Murakami and his publisher.</p>
                    <div className='btn-section-twosection'>
                    <button>SPUTNIK SWEETHEART</button>
                    <button>KAFKA ON THE SHORE</button>
                    </div>
                </div>
            </div>

            <div className='deskheading'>
               <h1>THE DESK OF MURAKAMI</h1>
            </div>

            <div className='img-section'>
               <img src={desk} />
            </div>
        </div>
      </>
    )
  }
}

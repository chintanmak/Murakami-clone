import React from 'react';
import '../Scss/_resources.scss';

export default function Resources() {
  return (
    <>
        <div className='resources-container'>
            <div className='resources-header'>
              <h1>RESOURCES</h1>
              <hr />
              <p>Delve into the world of Murakami in even greater detail.</p>
            </div>
            
            <div className='resource-first-two-section'>
              <div className='excerpts'>
                <button>EXCERPTS</button>
                <p>Get a taste of each novel by browsing through extensive excerpts from each book.</p>
              </div>

              <div className='music'>
                <button>MUSIC</button>
                <p>Discover and listen to the many musical references in Murakami's work.</p>
              </div>
            </div>

            <div className='resource-first-two-section'>
              <div className='music'>
                <button>CONVERSATIONS</button>
                <p>Read interviews with Murakami and discussions with his translators and jacket designers.</p>
              </div>

              <div className='excerpts'>
                <button>GALLERIES</button>
                <p>View collections of cover art, photography, and other images relating to Murakami's work.</p>
              </div>
            </div>

            <div className='resource-first-two-section'>
              <div className='excerpts'>
                <button>READER'S GUIDES</button>
                <p>Murakami's world explained: Read these guides to further your knowledge.</p>
              </div>

              <div className='music'>
                <button>REVIEWS</button>
                <p>Comprehensive archive of all reviews ranging from 1989 to present day.</p>
              </div>
            </div>
        </div>
    </>
  )
}

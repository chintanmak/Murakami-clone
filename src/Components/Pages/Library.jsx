import React from 'react';
import '../Scss/_library.scss';
import novelist from '../Assets/novelist.jpg';
import book1 from '../Assets/1.jpg';
import book2 from '../Assets/2.jpg';
import book3 from '../Assets/3.jpg';
import book4 from '../Assets/4.jpg';
import book5 from '../Assets/5.jpg';
import book6 from '../Assets/6.jpg';
import book7 from '../Assets/7.jpg';
import book8 from '../Assets/8.jpg';
import book9 from '../Assets/9.jpg';
import book10 from '../Assets/10.jpg';
import book11 from '../Assets/11.jpg';
import book12 from '../Assets/12.jpg';
import book13 from '../Assets/13.jpg';
import book14 from '../Assets/14.jpg';
import book15 from '../Assets/15.jpg';
import book16 from '../Assets/16.jpg';
import book17 from '../Assets/17.jpg';
import book18 from '../Assets/18.jpg';
import book19 from '../Assets/19.jpg';
import book20 from '../Assets/20.jpg';
import book21 from '../Assets/21.jpg';
import book22 from '../Assets/22.jpg';
import book23 from '../Assets/23.jpg';
import book24 from '../Assets/24.jpg';
import book25 from '../Assets/25.jpg';

export default function Library() {
  return (
    <>
        <div className='library-container'>
            <div className='library-header'>
              <h1>LIBRARY</h1>
              <hr />
              <p>The following represents over twenty-five years of Murakami’s work. Hover over or click on each novel to explore further.</p>
            </div>

            <div className='novelist-section'>
                <div className='novelimg'>
                    <img src={novelist} />
                </div>
                <div className='novelcontent'>
                    <h4>Pre-Order Now</h4>
                    <hr />
                    <h2>NOVELIST AS A VOCATION</h2>
                    <p>Haruki Murakami’s myriad fans will be delighted by this unique look into the mind of a master storyteller.  In this engaging book, the internationally best-selling author and famously reclusive writer shares with readers what he thinks about being a novelist; his thoughts on the role of the novel in our society; his own origins as a writer; and his musings on the sparks of creativity that inspire other writers, artists, and musicians. Readers who have long wondered where the mysterious novelist gets his ideas and what inspires his strangely surreal worlds will be fascinated by this highly personal look at the craft of writing.</p>
                    <button>EXPLORE</button>
                </div>

            </div>
                <div className='library-section'>
                  <img src={book1} />
                  <img src={book2} />
                  <img src={book3} />
                  <img src={book4} />
                  <img src={book5} />
                  <img src={book6} />
                  <img src={book7} />
                  <img src={book8} />
                  <img src={book9} />
                  <img src={book10} />
                  <img src={book11} />
                  <img src={book12} />
                  <img src={book13} />
                  <img src={book14} />
                  <img src={book15} />
                  <img src={book16} />
                  <img src={book17} />
                  <img src={book18} />
                  <img src={book19} />
                  <img src={book20} />
                  <img src={book21} />
                  <img src={book22} />
                  <img src={book23} />
                  <img src={book24} />
                  <img src={book25} />
                </div>
        </div>
    </>
  )
}

import React, { Component } from 'react';
import '../Scss/_home.scss';

import bg1 from '../Assets/backgroud1.jpg';
import desk from '../Assets/desk.jpg';
import bg2 from '../Assets/bg2.jpeg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='header-container'>
          <img src={bg1} />
          <div className='header-center'>
          <p>A CHARMINGLY IDIOSYNCRATIC LOOK AT WRITING, CREATIVITY, AND THE AUTHOR'S OWN NOVELS NOVELIST AS A VOCATION</p>
          <button>PRE-ORDER NOW</button>
          </div>
        </div>

          <div className='header-container'>
          <img src={desk} />
          <div className='header-center'>
          <p>A DESK OF MURAKAMI</p>
          <button>TAKE A VIRTUAL TOUR</button>
          </div>
          </div> 

          <div className='header-container'>
          <img src={bg2} />
          <div className='header-center'>
          <p>"MY FAVORITE CHARACTERS ARE ALWAYS THE NAMELESS ONES ON THE EDGE OF THE PLOT"</p>
          <button>MORE FAN FAVORITES</button>
          </div>
          </div> 
      </>
    )
  }
}

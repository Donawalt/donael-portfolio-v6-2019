import React from 'react'
import {TweenLite} from 'gsap'

import './index.scss';

class Burger extends React.Component {

  constructor(){
    super();
  }

  handleClick(){
    document.querySelector('div.hamburger').classList.toggle("is-active");
    if(document.querySelector('div.hamburger').classList.contains('is-active')){
      document.querySelector('#Menu').classList.add('is-active-menu');
      document.querySelector('main').classList.add('is-active-menu');
    }
    else{
        document.querySelector('#Menu').classList.remove('is-active-menu');
        document.querySelector('main').classList.remove('is-active-menu');
      
    }
  }
  render(){
    return(
      <>
      <div className="hamburger hamburger--spin js-hamburger" onClick={this.handleClick}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      </>
    )
  }
}

export default Burger;

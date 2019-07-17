import React from 'react';
import {Link} from 'gatsby';
import {TimelineLite, TweenLite} from 'gsap'

import './index.scss'

class Menu extends React.Component {
  componentDidMount(){
    let menu = document.querySelector('#Menu');
    };

  render(){
    return(
      <section id="Menu">
        <div className="dona-loader-container">
          <div className="dona-circle">
            <nav>
              <Link to="/project" name="projets">Projects</Link>
              <a href="https://blog.donaelwalter.com/" target="_blanck" name="blog">Blog</a>
              <Link to="/about" name="about">About</Link>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu;

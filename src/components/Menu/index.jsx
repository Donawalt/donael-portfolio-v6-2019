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
              <Link to="/project" name="projets">Projets</Link>
              <a href="https://theblog.donaelwalter.com/" target="_blanck" name="blog">Blog</a>
              <Link to="/about" name="about">À propos</Link>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu;

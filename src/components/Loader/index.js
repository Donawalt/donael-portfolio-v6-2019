import React from 'react'

import './loader.scss'

class Loader extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    document.querySelector('.Layout').style.display="none";
    setTimeout(function() {
        document.querySelector('#Loader').style.display = "none";
    }
    .bind(this),
    2600);
    setTimeout(function() {
        document.querySelector('#Loader').classList.add("reverse");
    }
    .bind(this),
    2500);
    setTimeout(function() {
        document.querySelector('.Layout').style.display="";
    }
    .bind(this),
    2500);
  }

  render(){
    return(
      <section id="Loader">
        <div className="dona-loader-container">
          <div className="dona-circle">
            <div className="dona-loader-title-groupe">
              <h1 className="dona-h-1">Donaël Walter</h1>
              <h2 className="dona-h-2">French Front-End Developer & UI Designer</h2>
              <i>Use keyboard arrows to navigate</i>
            </div>
          </div>
          <div className="dona-circle dona-circle-loader">

          </div>
        </div>
      </section>
    )
  }
}

export default Loader
